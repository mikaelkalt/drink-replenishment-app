const OrdersController = require("../controllers/ordersController");
const BarsController = require("../controllers/barsController");

module.exports = function (app, configuration) {

    const orders = new OrdersController(configuration);
    const bars = new BarsController(configuration);

    // orders routes
    orders.setRoutes(app);

    // set bars routes
    bars.setRoutes(app);
};