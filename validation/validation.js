const Joi = require('joi');

const userValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
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
  userId: Joi.number().required(),
  startTime: Joi.date().required(),
  endTime: Joi.date().required(),
  interuptions: Joi.number().required(),
});

module.exports = {
  userValidation,
  idValidation,
  loginValidation,
  scheduleValidation,
};
