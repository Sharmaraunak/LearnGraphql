import cors from 'cors'
import express from 'express'
import { authenticate, authMiddleware } from './auth'


const PORT = 9000

const app = express()
app.use(express.json(), cors(), authMiddleware)

app.post('/login', authenticate);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


