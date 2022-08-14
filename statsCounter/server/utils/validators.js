const Joi = require("joi");

function validateStats(stats) {
    const schema = Joi.object({
        date: Joi.date().iso().messages({ 'date.format': `Date format is YYYY-MM-DD` }).required(),
        views: Joi.number(),
        clicks: Joi.number(),
        cost: Joi.number(),
        adsId: Joi.number()
    });

    return schema.validate(stats);
}

exports.validate = validateStats