const joi = require("joi");

const listingSchema = joi.object({
    listing:joi.object({
        title:joi.string().required(),
        description: joi.string().required(),
        price:joi.number().required().min(0),
        image:joi.string().allow("",null),

    }).required(),
});