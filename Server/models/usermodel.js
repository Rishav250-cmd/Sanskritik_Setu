import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        password: { type: String, minlength: 6, required: true },
        phone: { type: String, minlength: 6, required: true },
        nationality: { type: String, required: true },
    },
    { timestamps: true }
);

userSchema.set("toJSON", {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    },
});

const user = model("user", userSchema);
export default user;