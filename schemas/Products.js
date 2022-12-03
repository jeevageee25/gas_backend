const Joi = require("joi");
const schemas = {
  searchProducts: Joi.object().keys({
    search_key: Joi.object().required(),
    page: Joi.number().optional(),
    perPage: Joi.number().optional(),
  }),
};

module.exports = schemas;
