import Joi from "joi";

export const userValidator = (user) => {
    const userValidationSchema = Joi.object({
        firstName: Joi.string().max(255).required(),
        lastName: Joi.string().max(255).required(),
        surName: Joi.string().max(255).allow(''),
        userName: Joi.string().max(255).allow(''),
        gender: Joi.number().integer().valid(0, 1).default(0).allow(''),
        emailAddress: Joi.string().email().required(),
        usrPassword: Joi
            .string()
            .min(8)
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
            .message('The password should have a minimum length of 8 characters, at least one uppercase letter, at least one lowercase letter, at least one digit, and at least one special character.')
            .required(),
        phoneNumber: Joi.string().max(255).allow(''),
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