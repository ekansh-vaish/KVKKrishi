const Joi = require("joi");

const signupSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("user", "admin").default("user")
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});


const ReportSchema = Joi.object({
  Name: Joi.string().required(),
  Email: Joi.string().email().required(),
  Phone: Joi.number().required(),
  Subject: Joi.string().required(),
  Message: Joi.string().required()
});

module.exports = {signupSchema,loginSchema,ReportSchema};