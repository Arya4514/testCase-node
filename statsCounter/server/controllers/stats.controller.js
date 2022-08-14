const sequelize = require("../models/sequelize")
const { validate } = require("../utils/validators")

module.exports = {

    statsCreate: async (req, res) => {
        /*  #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    date: "",
                    views:0,
                    clicks:0,
                    cost:0,
                }
        } */
        const { error } = validate(req.body)

        if (error) {
            return res.status(500).json({ error: true, message: error.details[0].message })
        }

        try {
            await sequelize.stats.create(req.body)
            return res.status(200).json({ error: false, message: "Stats created successfully" })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: true, message: error.message })
        }
    }
}