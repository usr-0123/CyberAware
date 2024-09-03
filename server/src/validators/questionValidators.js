import Joi from 'joi';

export const questionValidator = (question) => {
    const questionSchema = Joi.object({
        questionWeight: Joi.number().required(),
        questionCategoryId: Joi.string().required(),
        questionText: Joi.string().required()
    });

    return questionSchema.validate(question);
};