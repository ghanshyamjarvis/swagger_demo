// Routes
/**
 * @swagger
 * /getAll:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

 /**
 * @swagger
 * /getById:
 *  get:
 *    description: Return By Id
 *    parameters:
 *     - in: query
 *       schema:
 *        type: integer
 *        enum: [approved, pending, closed, new]
 *    responses:
 *      '201':
 *        description: user by id
 */