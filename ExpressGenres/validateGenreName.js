const Joi = require('joi');
const schema = {
    name: Joi.string().min(3).required()
};
const validateGenreName = (reqBody) => {
    const result = Joi.validate(reqBody, schema);
    return result;
};
module.exports = validateGenreName;