const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        .required(),

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(6)
        .required(),
    phone: Joi.string()
        .min(6)
        .required(),
    nationality: Joi.string()
        .required(),
});

module.exports = { registerSchema };
