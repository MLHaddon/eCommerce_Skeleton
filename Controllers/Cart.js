import Customer from '../models/customerModel.js';
import IpHistory from '../models/ipHistoryModel.js';

export const updateCartItems = async (req, res) => {
    try {
        const customer = await Customer.findOne({ where: { id: req.params.id } });
        console.log("Customer found: ", customer);

        const cartItems = customer.cartItems;
        const ipHistory = await IpHistory.findOne({ where: { ipAddress: req.params.ipAddress } });
        if (!ipHistory) {
            return res.status(404).json({ message: 'IP not found' });
        };
        console.log("IP Found: ", ipHistory);
        const ipCartItems = ipHistory.cartItems;
        const localCart = localStorage.getItem('cart');
        const mergedCartItems = [...cartItems, ...ipCartItems, ...localCart];
        await customer.update({ cartItems: mergedCartItems });
        await ipHistory.update({ cartItems: mergedCartItems });
        res.status(200).json(mergedCartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCartItem = async (req, res) => {
    try {
        const customer = await Customer.findOne({ where: { id: req.params.id } });
        const cartItems = customer.cartItems;
        const updatedCartItems = cartItems.filter(item => item.id !== req.params.productId);
        customer.cartItems = updatedCartItems;
        await customer.save();

        const ipHistory = await IpHistory.findOne({ where: { ipAddress: req.params.ipAddress } });
        if (!ipHistory) {
            return res.status(404).json({ message: 'IP not found' });
        };
        const ipCartItems = ipHistory.cartItems;
        const updatedIp = ipCartItems.filter(item => item.id !== req.params.productId);
        ipHistory.cartItems = updatedIp;
        await ipHistory.save();
        
        res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};