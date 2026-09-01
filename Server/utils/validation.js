const Joi = require('joi');
 
// Mirrors the required fields in models/usermodel.js
export const registerSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required(),
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().trim().min(6).required(),
  nationality: Joi.string().trim().required(),
});
 

