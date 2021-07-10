const express = require('express');
const router = express.Router();

const {getProductById, createProduct, getProduct, photo} = require('../controllers/product')
const {isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth')
const {getUserById} = require('../controllers/user')

router.param("userId", getUserById);
router.param("productId", getProductById);

router.post('/create/:userId', isSignedIn, isAuthenticated, isAdmin, createProduct);
router.get('/:productId', getProduct);
router.get('/product/photo/:productId', photo);



module.exports = router;