const Promise = require("bluebird");
const Joi = require("joi");

class OrdersController {

    constructor(configuration) {
        this.configuration = configuration;
        this.tableName = "orders";

        this.existingOrderSchema = Joi.object().keys({
            id: Joi.number().integer().min(1).max(Number.MAX_SAFE_INTEGER).required(),
            bar: Joi.string().required(),
            drink: Joi.string().required(),
            time: Joi.date().iso().optional(),
            amount: Joi.number().integer().min(1).max(100).required(),
            done: Joi.bool().required()
        });

        this.drinkOrders = Joi.object().keys({
            drink: Joi.string().required(),
            amount: Joi.number().integer().min(1).max(100).required(),
        });

        this.createOrderSchema = Joi.object().keys({
            bar: Joi.string().required(),
            drinkOrders: Joi.array().items(this.drinkOrders)
        });
    }
    // request for GET /orders

    async getAll(req, res) {
        try {
            const isDone = req.query.done;
            this.configuration.logger.debug(`Get all orders filtered by done: ${isDone}`);
            if (isDone) {
                const done = (isDone === "true" ? 1 : 0);
                const filteredOrders = await this.configuration.dbCore.getByField(this.tableName, "done", done);
                return res.json(filteredOrders);
            }
            const orders = await this.configuration.dbCore.getAll(this.tableName);
            return res.json(orders);
        } catch (e) {
            // TODO properly log error
            this.configuration.logger.error("Error while trying to get orders", e);
            return res.status(400).send();
        }

    }

    // request for POST /orders

    async createOrder(req, res) {
        try {
            const order = req.body;
            const validationResult = Joi.validate(order, this.createOrderSchema);

            if (validationResult.error) {
                this.configuration.logger.debug("Validation error on order: ", validationResult.error);
                res.status(400).send();
                return;
            }

            const convertedOrder = order.drinkOrders.map((d) => { 
                return { bar: order.bar, drink: d.drink, amount: d.amount, done: false };
            });
            
            this.configuration.logger.debug("Create new order ", convertedOrder);
            const insertionResult = await this.configuration.dbCore.multiInsert(this.tableName, convertedOrder);
            const id = insertionResult.insertId;
            this.configuration.logger.info("Inserted new order with ID %d", id);
            order.id = id;
            return res.status(201).json(order);
        } catch (e) {
            // TODO properly log error
            this.configuration.logger.error("Error while trying to create new order ", e);
            return res.status(409).send();
        }
    }

    async updateOrder(req, res) {
        try {
            const id = parseInt(req.params.id);
            const order = req.body;

            if (id !== order.id) {
                res.status(403).send();
                return;
            }

            const validationResult = Joi.validate(order, this.existingOrderSchema);

            if (validationResult.error) {
                res.status(400).send();
                return;
            }

            const sanitizedOrder = { "done": order.done };

            const result = await Promise.using(this.configuration.dbCore.getSqlConnection(), connection => {
                const sql = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
                return connection.queryAsync(sql, [sanitizedOrder, id]);
            });

            this.configuration.logger.info(`Changed ${result.changedRows} row(s)`);
            return res.status(204).send();

        } catch (e) {
            // TODO properly log error
            this.configuration.logger.error("Error while trying to update order ", e);
            return res.status(400).send();
        }
    }

    setRoutes(app) {
        app.route("/api/orders")
            .get(this.getAll.bind(this))
            .post(this.createOrder.bind(this));

        app.route("/api/orders/:id")
            .put(this.updateOrder.bind(this));
    }
}

module.exports = OrdersController;