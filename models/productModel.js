import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

// Access the Datatypes from sequelize
const { DataTypes } = Sequelize;

const Products = db.define('products', {
  products_data: {
    type: DataTypes.JSON
  }
  // name: {
  //   type: DataTypes.STRING,
  //   unique: true
  // },
  // summary: {
  //   type: DataTypes.STRING,
  //   unique: true
  // },
  // description: {
  //   type: DataTypes.STRING,
  //   unique: true
  // },
  // reviews: {
  //   type: DataTypes.JSON
  // },
  // availability: {
  //   type: DataTypes.INTEGER
  // },
  // price: {
  //   type: DataTypes.FLOAT
  // },
  // category: {
  //   type: DataTypes.STRING,
  //   unique: true
  // }
}, {
  freezeTableName:true
});

// Sync to the current database
(async () => {
  await db.sync();
})();

export default Products;