'use strict';
const Joi = require("joi");

module.exports = function (sequelize, DataTypes) {

    const Stats = sequelize.define('Stats', {
        date: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        views: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        clicks: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cost: {
            type: DataTypes.DECIMAL,
            allowNull: true
        }
    });
    return Stats
};