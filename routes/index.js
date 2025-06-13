import express from 'express';
import { getUsers, getUser, Register, Login, Logout } from '../controllers/Users.js';
import { getMostRecentProducts, updateProducts, getAllProducts } from '../controllers/Products.js';
import { getCustomer, getCustomers, createCustomer, updateCustomer } from '../controllers/Customers.js';
import { getTransactions, getTransaction, createTransaction, updateTransaction } from '../controllers/Transactions.js';
import { getOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../Controllers/Orders.js';
import { refreshToken } from '../controllers/RefreshToken.js';
import { verifyToken } from '../middleware/VerifyToken.js';

const router = express.Router();

// Portfolio Routes
router.get('/users', verifyToken, getUsers);
router.get('/user', verifyToken, getUser);
router.post('/register', Register);
router.post('/login', Login);
router.post('/logout', Logout);
router.get('/token', refreshToken);
router.get('/verify-token', verifyToken, (req, res) => res.sendStatus(200));

// eCommerce Routes
  // Products
router.get('/products/get', getMostRecentProducts);
router.get('/products/getallhistory', getAllProducts);
router.put('/products/update', updateProducts);
  // Customers
router.get('/customers/get', getCustomers);
router.get('/customers/get/:id', getCustomer);
router.post('/customers/create', createCustomer);
router.put('/customers/update', updateCustomer);
  // Transactions
router.get('/transactions/get', getTransactions);
router.get('/transactions/get/:id', getTransaction);
router.post('/transactions/create', createTransaction);
router.put('/transactions/update', updateTransaction);
  // Orders
router.get('/orders/get', getOrders);
router.get('/orders/get/:id', getOrder);
router.post('/orders/create', createOrder);
router.put('/orders/update', updateOrder);
router.delete('/orders/delete/:id', deleteOrder);

// TEST Middleware tests


export default router;