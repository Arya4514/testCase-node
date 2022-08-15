const mockData = require('../../MOCK_DATA.json')

const initial = async () => {
    const sequelize = require("./sequelize");

    try {
        let data = await sequelize.stats.findAll({})

        if (data.length === 0) {
            let statsData = await sequelize.stats.bulkCreate(mockData)
            console.log(statsData.length)
        }
    } catch (error) {
        console.log(error)
    }
}

var seedData = {
    initial
}

module.exports = seedData

