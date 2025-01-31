const Joi = require("joi")

exports.carSchema = Joi.object({
    year: Joi.number().required().messages({
        "string.base": "Yili number bo'lishi kerak!",
        "string.empty": "Yili bo'sh bo'lmasligi kerak!",
        "any.required": "Yili talab qilinadi"
    }),    
    image: Joi.binary().messages({
        "binary.base": "Rasm binary formatda bo‘lishi kerak!",
    }),    
    model: Joi.string().required().messages({
        "string.base": "Model string bo'lishi kerak!",
        "string.empty": "Model bo'sh bo'lmasligi kerak!",
        "any.required": "Model talab qilinadi"
    }), 
    price: Joi.number().required().messages({
        "string.base": "Narxi number bo'lishi kerak!",
        "string.empty": "Narxi bo'sh bo'lmasligi kerak!",
        "any.required": "Narxi talab qilinadi"
    }),
})