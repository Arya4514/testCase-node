const { Op } = require("sequelize")
const sequelize = require("../models/sequelize")
var db = require('../models/sequelize');




module.exports = {
    statsList: async (req, res) => {

        let startDate = req.query.fromDate,
            endDate = req.query.toDate

        let where = startDate && endDate ? { date: { [Op.between]: [startDate, endDate] } } : {}

        try {
            let data = await sequelize.stats.findAll({
                where,
                attributes: [
                    'id',
                    'date',
                    [db.Sequelize.literal('(cost/clicks)'), 'cpc'],
                    [db.Sequelize.literal('(cost/views * 1000)'), 'cpm'],
                    'views',
                    'clicks',
                    'cost',
                ],
            })
            return res.status(200).json({ error: false, data, message: "Ok" })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: true, message: error.message })
        }
    },

    statsReset: async (req, res) => {
        try {
            let data = await sequelize.stats.destroy({ where: {} });
            return res.status(200).json({ error: false, data, message: "Ok" })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: true, message: error.message })
        }
    }
}