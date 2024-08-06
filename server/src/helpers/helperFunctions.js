export const successMessage = (res, message) => {
    return res.status(200).json({Message: message})
}

export const dataFound = (res, data, message) => {
    return res.status(200).json({Message: message, data})
}

export const sendCreated = (res, message) => {
    return res.status(201).json({Message: message})
}

export const sendDeleteSuccess = (res, message) => {
    return res.status(200).json({Message:message})
}

export const unAuthorized = (res, message) => {
    return res.status(401).json({Message:message})
}

export const validationError = (res, message) => {
    return res.status(400).json({Message:message})
}

export const sendBadRequest = (res, message) => {
    return res.status(400).json({Message: message})
}

export const sendNotFound = (res, message) => {
    return res.status(404).json({Message:message})
}

export const conflict = (res, message) => {
    return res.status(409).json({Message:message})
}

export const Unprocessable_Entity = (res, message) => {
    return res.status(422).json({Message:message})
}

export const sendServerError = (res, message) => {
    return res.status(500).json({Message:message})
}