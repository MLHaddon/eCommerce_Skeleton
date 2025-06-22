import express from 'express';
import { getUsers, getUser, Register, Login, Logout } from '../controllers/Users.js';
import { getMostRecentProducts, updateProducts, getAllProducts } from '../controllers/Products.js';
import { getCustomer, getCustomers, createCustomer, updateCustomer } from '../controllers/Customers.js';
import { getTransactions, getTransaction, createTransaction, updateTransaction } from '../controllers/Transactions.js';
import { getOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../Controllers/Orders.js';
import { updateCartItems, deleteCartItem } from '../Controllers/Cart.js';
import { initializeSquareClient, getPayment, updatePayment, cancelPayment, completePayment, createPayment, refundPayment, listPayments } from '../middleware/SquareAPI.js';
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
  // Cart updates
router.delete('/cart/delete/:id', deleteCartItem);
router.post('/cart/update', updateCartItems);
  //  API Routes
router.post('/payments', createPayment);
router.get('/payments/:paymentId', getPayment);
router.put('/payments/:paymentId', updatePayment);
router.delete('/payments/:paymentId', cancelPayment);
router.post('/payments/:paymentId/complete', completePayment);
router.post('/payments/:paymentId/refund', refundPayment);
router.get('/payments', listPayments);
router.get('/initialize', initializeSquareClient);


export default router;