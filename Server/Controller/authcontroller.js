const { registerSchema } = require('../utils/validation');
const usermodel = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generatetoken} = require('../utils/generatetoken');

module.exports.registerUser = async function (req, res) {
  try {
    let { name, email, password, phone, nationality } = req.body;

    const { error } = registerSchema.validate(req.body);
    if (error) {
      req.flash('error', error.message);
      return res.redirect('/');
    }

    let existingUser = await usermodel.findOne({ email: email });
    if (existingUser) {
      req.flash('error', 'User already exists, Please Login');
      return res.redirect('/');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const createduser = await usermodel.create({
      name,
      password: hash,
      email,
      phone,
      nationality
    });

    const token = generatetoken(createduser);
    res.cookie('token', token, { httpOnly: true });
    req.flash('success', 'User registered successfully, please login');
    return res.redirect('/');

  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports.loginUser = async function (req, res) {
  try {
    let { email, password } = req.body;
    let user = await usermodel.findOne({ email: email });

    if (!user) {
      req.flash('error', 'Invalid email or password');
      return res.redirect('/');
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        req.flash('error', 'Something went wrong, try again');
        return res.redirect('/');
      }

      if (result) {
        let token = generatetoken(user);
        res.cookie('token', token, { httpOnly: true });
        return res.redirect('/shop');
      } else {
        req.flash('error', 'Invalid email or password');
        return res.redirect('/');
      }
    });

  } catch (err) {
    console.log(err.message);
    return res.status(500).send('Internal Server Error');
  }
};