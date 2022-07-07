const Joi = require('joi');

const userValidation = Joi.object({
  firstName: Joi.string().required(),
  lastNAme: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNo: Joi.string().required(),
  password: Joi.string().required(),
});

const idValidation = Joi.object({
  id: Joi.number().required(),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const scheduleValidation = Joi.object({
  startTime: Joi.date().timestamp().required,
  endTime: Joi.date().timestamp().required,
  interuptions: Joi.number().required(),
});

module.exports = {
  userValidation,
  idValidation,
  loginValidation,
  scheduleValidation,
};
