import { registerSchema } from '../utils/validation.js';
import usermodel from '../models/usermodel.js';
import bcrypt from 'bcrypt';
import { generatetoken } from '../utils/generatetoken.js';

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production', // HTTPS only in prod
  sameSite: 'lax', // same-origin, so 'lax' is fine — no need for 'none'
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const registerUser =  async function (req, res) {
  try {
    let { name, email, password, phone, nationality } = req.body;

    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    let existingUser = await usermodel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists, please login' });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const createduser = await usermodel.create({
      name,
      password: hash,
      email,
      phone,
      nationality,
    });

    const token = generatetoken(createduser);
    res.cookie('token', token, COOKIE_OPTIONS);

    return res.status(201).json({
      message: 'User registered successfully',
      user: { id: createduser._id, name: createduser.name, email: createduser.email },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const loginUser =  async function (req, res) {
  try {
    let { email, password } = req.body;
    let user = await usermodel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(500).json({ message: 'Something went wrong, try again' });
      }

      if (result) {
        let token = generatetoken(user);
        res.cookie('token', token, COOKIE_OPTIONS);
        return res.status(200).json({
          message: 'Logged in successfully',
          user: { id: user._id, name: user.name, email: user.email },
        });
      } else {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};