const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Lấy danh sách nhà cung cấp
 */
router.get('/', supplierController.index);
router.get('/new', supplierController.newForm);
router.post('/', supplierController.create);
router.get('/:id/edit', supplierController.editForm);
router.post('/:id', supplierController.update);
router.get('/:id/delete', supplierController.delete);

module.exports = router;
