import Joi from "joi";

export const userValidator = (user) => {
    const userValidationSchema = Joi.object({
        firstName: Joi.string().max(255).required(),
        lastName: Joi.string().max(255).required(),
        surName: Joi.string().max(255).required(),
        gender: Joi.number().integer().valid(0, 1).default(0).allow(''),
        emailAddress: Joi.string().email().required(),
        usrPassword: Joi
            .string()
            .min(8)
            .pattern(/^[a-zA-Z0-9_]{3,20}$/)
            .message('The username should have a Minimum length of 8 characters, at least one uppercase letter, at least one lowercase letter, at least one digit, at least one special character.')
            .required(),
        phoneNumber: Joi.string().max(255).required().allow(''),
    })

    return userValidationSchema.validate(user)
}

export const userLoginValidator = (user) => {
    const userLoginSchema = Joi.object({
        emailAddress: Joi.email().required(),
        usrPassword: Joi.string().required()
    })
    return userLoginSchema.validate(user)
}