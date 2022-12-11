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

  async searchExecutive(req) {
    return await this.serviceUtil.search(req.body, constants.COLLECTIONS.EMPLOYEES);
  }

  async addExecutive(req) {
    return await this.serviceUtil.add(
      req.body,
      constants.COLLECTIONS.EMPLOYEES,
      constants.MESSAGES.success,
      req
    );
  }

  async updateExecutive(req) {
    return await this.serviceUtil.update(
      req.body,
      constants.COLLECTIONS.EMPLOYEES,
      constants.MESSAGES.success,
      req
    );
  }

  async deleteExecutive(req) {
    return await this.serviceUtil.delete(
      req.params,
      constants.COLLECTIONS.EMPLOYEES,
      constants.MESSAGES.success
    );
  }

  async searchAreaAllocation(req) {
    return await this.serviceUtil.search(req.body, constants.COLLECTIONS.AREA_ALLOCATION);
  }

  async addAreaAllocation(req) {
    return await this.serviceUtil.add(
      req.body,
      constants.COLLECTIONS.AREA_ALLOCATION,
      constants.MESSAGES.success,
      req
    );
  }

  async updateAreaAllocation(req) {
    return await this.serviceUtil.update(
      req.body,
      constants.COLLECTIONS.AREA_ALLOCATION,
      constants.MESSAGES.success,
      req
    );
  }

  async deleteAreaAllocation(req) {
    return await this.serviceUtil.delete(
      req.params,
      constants.COLLECTIONS.AREA_ALLOCATION,
      constants.MESSAGES.success
    );
  }

  //Default Area Allocation

  async searchDefaultAreaAllocation(req) {
    return await this.serviceUtil.search(req.body, constants.COLLECTIONS.DEFAULT_AREA_ALLOCATION);
  }

  async addDefaultAreaAllocation(req) {
    return await this.serviceUtil.add(
      req.body,
      constants.COLLECTIONS.DEFAULT_AREA_ALLOCATION,
      constants.MESSAGES.success,
      req
    );
  }

  async updateDefaultAreaAllocation(req) {
    return await this.serviceUtil.update(
      req.body,
      constants.COLLECTIONS.DEFAULT_AREA_ALLOCATION,
      constants.MESSAGES.success,
      req
    );
  }

  async deleteDefaultAreaAllocation(req) {
    return await this.serviceUtil.delete(
      req.params,
      constants.COLLECTIONS.DEFAULT_AREA_ALLOCATION,
      constants.MESSAGES.success
    );
  }

  //Sales Entry

  async searchSales(req) {
    return await this.serviceUtil.search(req.body, constants.COLLECTIONS.SALES_ENTRY);
  }

  async addSales(req) {
    return await this.serviceUtil.add(
      req.body,
      constants.COLLECTIONS.SALES_ENTRY,
      constants.MESSAGES.success,
      req
    );
  }

  async updateSales(req) {
    return await this.serviceUtil.update(
      req.body,
      constants.COLLECTIONS.SALES_ENTRY,
      constants.MESSAGES.success,
      req
    );
  }

  async deleteSales(req) {
    return await this.serviceUtil.delete(
      req.params,
      constants.COLLECTIONS.SALES_ENTRY,
      constants.MESSAGES.success
    );
  }

}

module.exports = { ProductsService };
