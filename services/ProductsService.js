const db = require("../util/dbConnect");
const helpers = require("../util/Helpers");
const constants = require("../constant");
const _ = require("lodash");
const appUtils = require("../util/appUtils");
const mongodb = require("mongodb");
const { ServiceUtil } = require("./ServiceUtil");

class ProductsService {
  constructor() {
    this.serviceUtil = new ServiceUtil();
  }
 
  async searchProducts(req) {
    return await this.serviceUtil.search(req.body, 'test');
  }

}

module.exports = { ProductsService };
