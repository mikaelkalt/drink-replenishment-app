const bars = require("../model/bars.json");

class BarsController {

    constructor(configuration) {
        this.configuration = configuration;
    }

    // request GET for /bars
    getAll(req, res) {
        this.configuration.logger.debug("GET all bars");
        return res.json(bars);
    }

    setRoutes(app) {
        app.route("/api/bars")
            .get(this.getAll.bind(this));
    }
}

module.exports = BarsController;