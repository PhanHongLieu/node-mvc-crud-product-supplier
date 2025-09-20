const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lấy danh sách sản phẩm
 */
router.get('/', productController.index);
router.get('/new', productController.newForm);
router.post('/', productController.create);
router.get('/:id/edit', productController.editForm);
router.post('/:id', productController.update);
router.get('/:id/delete', productController.delete);

module.exports = router;
