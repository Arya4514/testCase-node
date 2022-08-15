'use strict';
const dotEnv = require("dotenv");
const Sequelize = require('sequelize');
const seedData = require('./dummyData');
const { DATABASE, USERNAME, PASSWORD, HOST, DIALECT } = require('../config');

/** 
 *  Database connection configs.
 */

var sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    define: {
        decimalNumbers: true,
        timestamps: true,
        freezeTableName: true,
        defaultScope: {
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        }
    },
    logging: false
});

/**
 * checks the database connectivity
 */

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/** 
 * create and connect theconnnect modal instance to database
 */

db.stats = require('./stats.model')(sequelize, Sequelize);

db.sequelize.sync({ force: false, alter: true }).then(() => {
    console.log("Drop and re-sync db.");
    if (process.env.NODE_ENV == "dev")
        seedData.initial()
});

module.exports = db;
