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
    return await this.serviceUtil.search(req.body, constants.COLLECTIONS.PRODUCTS);
  }

  async addProducts(req) {
    return await this.serviceUtil.add(
      req.body,
      constants.COLLECTIONS.PRODUCTS,
      constants.MESSAGES.success,
      req
    );
  }

  async updateProducts(req) {
    return await this.serviceUtil.update(
      req.body,
      constants.COLLECTIONS.PRODUCTS,
      constants.MESSAGES.success,
      req
    );
  }

  async deleteProducts(req) {
    return await this.serviceUtil.delete(
      req.params,
      constants.COLLECTIONS.PRODUCTS,
      constants.MESSAGES.success
    );
  }
  
  async searchArea(req) {
    return await this.serviceUtil.search(req.body, constants.COLLECTIONS.AREA);
  }

  async addArea(req) {
    return await this.serviceUtil.add(
      req.body,
      constants.COLLECTIONS.AREA,
      constants.MESSAGES.success,
      req
    );
  }

  async updateArea(req) {
    return await this.serviceUtil.update(
      req.body,
      constants.COLLECTIONS.AREA,
      constants.MESSAGES.success,
      req
    );
  }

  async deleteArea(req) {
    return await this.serviceUtil.delete(
      req.params,
      constants.COLLECTIONS.AREA,
      constants.MESSAGES.success
    );
  }

  async searchRole(req) {
    return await this.serviceUtil.search(req.body, constants.COLLECTIONS.ROLE);
  }

  async addRole(req) {
    return await this.serviceUtil.add(
      req.body,
      constants.COLLECTIONS.ROLE,
      constants.MESSAGES.success,
      req
    );
  }

  async updateRole(req) {
    return await this.serviceUtil.update(
      req.body,
      constants.COLLECTIONS.ROLE,
      constants.MESSAGES.success,
      req
    );
  }

  async deleteRole(req) {
    return await this.serviceUtil.delete(
      req.params,
      constants.COLLECTIONS.ROLE,
      constants.MESSAGES.success
    );
  }
}

module.exports = { ProductsService };
