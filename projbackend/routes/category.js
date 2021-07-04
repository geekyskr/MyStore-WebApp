const express = require('express');
const router = express.Router();

const {getCategoryById, createCategory, getCategory, getAllCategory, updateCategory, removeCategory} = require('../controllers/category');
const {isSignedIn, isAdmin, isAuthenticated} = require('../controllers/auth');
const {getUserById} = require('../controllers/user');

router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

router.post('/create/:userId', isSignedIn, isAuthenticated, isAdmin, createCategory);
router.get('/:categoryId', getCategory);
router.get('/all', getAllCategory);
router.put('/:categoryId/:userId', isSignedIn, isAuthenticated, isAdmin, updateCategory);
router.delete('/:categoryId/:userId', isSignedIn, isAuthenticated, isAdmin, removeCategory);

module.exports = router;