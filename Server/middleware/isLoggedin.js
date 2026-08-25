import jwt from "jsonwebtoken";
import { user } from "../models/users.js";

export const isLoggedin = async (req, res, next) => {

    // check if token is present
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // get user
            const User = await user.findById(decoded.id).select("-password");
            if (!User) {
                res.status(401).json({ message: "user not authorized" });
                return;
            }
            req.user = User;
            next();

        } catch (error) {
            res.status(401).json({ message: "User authorization failed, try again" });
        }
    }
    if (!token) {
        res.status(401).json({ message: "No token available" });
    }
}