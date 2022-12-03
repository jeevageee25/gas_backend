const appUtils = require("../util/appUtils");
const constants = require("../constant");
const { ProductsService } = require("../services").ProductsService;
const service = new ProductsService();

class ProductsController {
  constructor() {}

  /**
   * this method is used to get all the collection center
   * @param {*} req
   * @param {*} res
   */
  async searchProducts(req, res) {
    try {
      const responseFromService = await service.searchProducts(req);
      return appUtils.successResponse(
        res,
        responseFromService,
        constants.MESSAGES.success
      );
    } catch (error) {
      return appUtils.errorResponse(res, error, constants.code.error_code);
    }
  }
 
}

module.exports = { ProductsController };
