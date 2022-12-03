const appUtils = require("../util/appUtils");
const constants = require("../constant");
const { ProductsService } = require("../services").ProductsService;
const service = new ProductsService();

class ProductsController {
  constructor() { }

  /**
   * this method is used to get all the collection center
   * @param {*} req
   * @param {*} res
   */
  async searchProducts(req, res) {
    try {
      const pService = await service.searchProducts(req);
      return appUtils.successResponse(
        res,
        pService,
        constants.MESSAGES.success
      );
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async addProducts(req, res) {
    try {
      const pService = await service.addProducts(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async updateProducts(req, res) {
    try {
      const pService = await service.updateProducts(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async deleteProducts(req, res) {
    try {
      const pService = await service.deleteProducts(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async searchExecutive(req, res) {
    try {
      const pService = await service.searchExecutive(req);
      return appUtils.successResponse(
        res,
        pService,
        constants.MESSAGES.success
      );
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async addExecutive(req, res) {
    try {
      const pService = await service.addExecutive(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async updateExecutive(req, res) {
    try {
      const pService = await service.updateExecutive(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async deleteExecutive(req, res) {
    try {
      const pService = await service.deleteExecutive(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async searchArea(req, res) {
    try {
      const pService = await service.searchArea(req);
      return appUtils.successResponse(
        res,
        pService,
        constants.MESSAGES.success
      );
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async addArea(req, res) {
    try {
      const pService = await service.addArea(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async updateArea(req, res) {
    try {
      const pService = await service.updateArea(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async deleteArea(req, res) {
    try {
      const pService = await service.deleteArea(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async searchRole(req, res) {
    try {
      const pService = await service.searchRole(req);
      return appUtils.successResponse(
        res,
        pService,
        constants.MESSAGES.success
      );
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async addRole(req, res) {
    try {
      const pService = await service.addRole(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async updateRole(req, res) {
    try {
      const pService = await service.updateRole(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }

  async deleteRole(req, res) {
    try {
      const pService = await service.deleteRole(req);
      return appUtils.successResponse(res, pService, constants.MESSAGES.success);
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }
}

module.exports = { ProductsController };
