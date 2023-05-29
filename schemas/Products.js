const Joi = require("joi");
const schemas = {
  delete: Joi.object({
    _id: Joi.string().required(),
  }),
  searchProducts: Joi.object().keys({
    search_key: Joi.object().required(),
    page: Joi.number().optional(),
    perPage: Joi.number().optional(),
  }),
  addProducts: Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
  }),
  updateProducts: Joi.object({
    _id: Joi.string().required(),
    name: Joi.string().optional(),
    price: Joi.number().optional(),
    category: Joi.string().optional(),
  }),
  searchExecutive: Joi.object().keys({
    search_key: Joi.object().required(),
    page: Joi.number().optional(),
    perPage: Joi.number().optional(),
  }),
  addExecutive: Joi.object({
    area: Joi.array().required(),
    siebel_code: Joi.number().required(),
    name: Joi.string().required(),
  }),
  updateExecutive: Joi.object({
    _id: Joi.string().required(),
    area: Joi.array().optional(),
    siebel_code: Joi.number().optional(),
    name: Joi.string().optional(),
  }),
  searchArea: Joi.object().keys({
    search_key: Joi.object().required(),
    page: Joi.number().optional(),
    perPage: Joi.number().optional(),
  }),
  addArea: Joi.object({
    area: Joi.string().required(),
  }),
  updateArea: Joi.object({
    _id: Joi.string().required(),
    area: Joi.string().optional(),
  }),
  searchRole: Joi.object().keys({
    search_key: Joi.object().required(),
    page: Joi.number().optional(),
    perPage: Joi.number().optional(),
  }),
  addRole: Joi.object({
    role: Joi.string().required(),
  }),
  updateRole: Joi.object({
    _id: Joi.string().required(),
    role: Joi.string().optional(),
    previledge: Joi.array().optional(),
  }),
  searchpayment: Joi.object().keys({
    search_key: Joi.object().required(),
    page: Joi.number().optional(),
    perPage: Joi.number().optional(),
  }),
  addpayment: Joi.object({
    name: Joi.string().required(),
    mobile: Joi.string().required(),
    amount: Joi.number().required(),
  }),
  updatepayment: Joi.object({
    _id: Joi.string().required(),
    name: Joi.string().optional(),
    mobile: Joi.string().optional(),
    amount: Joi.number().optional(),
  }),
  searchExecutive: Joi.object().keys({
    search_key: Joi.object().required(),
    page: Joi.number().optional(),
    perPage: Joi.number().optional(),
  }),
  addExecutive: Joi.object({
    role: Joi.string().required(),
    siebel_code: Joi.string().required(),
    mobile_number: Joi.string().optional(),
    staff_name: Joi.string().required(),
    user_name: Joi.string().required(),
    password: Joi.string().required(),
    profile_update: Joi.boolean().optional(),
  }),
  updateExecutive: Joi.object({
    _id: Joi.string().required(),
    role: Joi.string().optional(),
    siebel_code: Joi.string().required(),
    staff_name: Joi.string().required(),
    mobile_number: Joi.string().optional(),
    user_name: Joi.string().required(),
    password: Joi.string().required(),
  }),
  searchAreaAllocation: Joi.object().keys({
    search_key: Joi.object().required(),
    page: Joi.number().optional(),
    perPage: Joi.number().optional(),
  }),
  addAreaAllocation: Joi.object({
    date: Joi.date().required(),
    allocation_date: Joi.string().required(),
    allocation_data: Joi.array().required(),
  }),
  updateAreaAllocation: Joi.object({
    _id: Joi.string().required(),
    allocation_data: Joi.array().optional(),
  }),
  searchDefaultAreaAllocation: Joi.object().keys({
    search_key: Joi.object().required(),
    page: Joi.number().optional(),
    perPage: Joi.number().optional(),
  }),
  addDefaultAreaAllocation: Joi.object({
    area_ids: Joi.array().required(),
    executive_id: Joi.string().required(),
  }),
  updateDefaultAreaAllocation: Joi.object({
    _id: Joi.string().required(),
    area_ids: Joi.array().required(),
    executive_id: Joi.string().required(),
  }),
  searchSales: Joi.object().keys({
    search_key: Joi.object().required(),
    page: Joi.number().optional(),
    perPage: Joi.number().optional(),
  }),
  addSales: Joi.object({
    allocation_date: Joi.string().required(),
    area_id: Joi.string().required(),
    count: Joi.number().required(),
    executive_id: Joi.string().required(),
    paymentMode: Joi.string().required(),
    price: Joi.number().required(),
    product: Joi.string().required(),
    supplied: Joi.number().required(),
    payments: Joi.object().required()
  }),
  updateSales: Joi.object({
    _id: Joi.string().required(),
    allocation_date: Joi.string().optional(),
    area_id: Joi.string().optional(),
    count: Joi.number().optional(),
    executive_id: Joi.string().optional(),
    paymentMode: Joi.string().optional(),
    price: Joi.number().optional(),
    product: Joi.string().optional(),
    supplied: Joi.number().optional(),
    payments: Joi.object().optional()
  }),
};

module.exports = schemas;
