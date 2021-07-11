const express = require('express');
const router = express.Router();

const {getProductById, createProduct, getProduct, photo, deleteProduct, updateProduct, getAllProduct, getAllUniqueCategory} = require('../controllers/product')
const {isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth')
const {getUserById} = require('../controllers/user')

router.param("userId", getUserById);
router.param("productId", getProductById);

router.post('/create/:userId', isSignedIn, isAuthenticated, isAdmin, createProduct);
router.get('/:productId', getProduct);
router.get('/photo/:productId', photo);
router.delete('/:productId/:userId', isSignedIn, isAuthenticated, isAdmin, deleteProduct)
router.put('/:productId/:userId', isSignedIn, isAuthenticated, isAdmin, updateProduct)
router.get('/products', getAllProduct);
router.get('/products/categories', getAllUniqueCategory);



module.exports = router;