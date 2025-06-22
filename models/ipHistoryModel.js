import { Sequelize } from "sequelize";
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const IpHistory = db.define('ipHistories', {
    ipAddress: {
        type: DataTypes.STRING
    },
    lastLogin: {
        type: DataTypes.DATE
    },
    cartItems: {
        type: DataTypes.JSON
    }
}, {
    freezeTableName: true
});

(async() => {
    await db.sync();
})();

export default IpHistory;