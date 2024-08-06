import { JWT } from "jsonwebtoken";
import { unAuthorized } from "../helpers/helperFunctions";

export const verifyTokenMiddleware = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        JWT.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY, (err, decode) => {
            if (err) {
                return unAuthorized(res, 'Your Access Has Been denied')
            } else {
                req.user = decode
                next()
            }
        })
    } else {
        return unAuthorized(res, 'Access granted')
    }
}