import jwt from "jsonwebtoken"

export function verifyToken(req, res, next) {

    const { token } = req.headers
    jwt.verify(token, process.env.JWT_SECRET, function(err, decodeed){
        if (err) {
            return res.status(401).send("Token not verify!.")
        }
        req.user = decodeed
        next()
    })

        
}