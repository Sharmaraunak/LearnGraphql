import { expressjwt } from 'express-jwt'
import jwt from 'jsonwebtoken'

import { getUserByEmail } from './db/users'

const JWT_SECRET = Buffer.from('my-jwt-secret', 'base64')


const authMiddleware = expressjwt({

    algorithms: ['HS256'],
    credentialsRequired: true,
    secret: JWT_SECRET
})


export async function authenticate(req, res, next) {
    const {email, password} = req.body
    const user = await getUserByEmail(email)
    if (!user || user.password !== password) {
        return res.status(401).json({message: 'Invalid credentials'})
    }
    const claims = {
        sub: user.id,
        iss: user.email
    }
    const accessToken = jwt.sign(claims, JWT_SECRET, {expiresIn: '15m'})
    res.json({accessToken})
}


