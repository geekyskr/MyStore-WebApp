const express = require('express');
const router = express.Router();

const {getOrderById, createOrder, getAllOrders, getOrderStatus, updateStatus} = require('../controllers/order');
const {isSignedIn, isAuthenticated, isAdmin} = require('../controllers/auth')
const {getUserById, pushOrderInPurchaseList} = require('../controllers/user')
const {updateStock} = require('../controllers/product')

router.param("userId", getUserById);
router.param("orderId", getOrderById);

router.post('/create/:userId', isSignedIn, isAuthenticated, pushOrderInPurchaseList, updateStock, createOrder);
router.get('/all/:userId', isSignedIn, isAuthenticated, isAdmin, getAllOrders);
router.get('/status/:userId', isSignedIn, isAuthenticated, isAdmin, getOrderStatus);
router.put('/:orderId/status/:userId', isSignedIn, isAuthenticated, isAdmin, updateStatus);

module.exports = router;