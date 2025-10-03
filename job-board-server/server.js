
import { ApolloServer } from '@apollo/server'
import { expressMiddleware as apolloMiddleware } from '@as-integrations/express5'
import cors from 'cors'
import express from 'express'
import { readFile } from 'node:fs/promises'
import { authenticate, authMiddleware } from './auth.js'
import { resolver} from './resolver.js'



const PORT = 9000

const app = express()
app.use(express.json(), cors())


const typeDefs = await readFile('./schema.graphql', 'utf-8');



app.post('/login', authenticate);

const apolloServer = new ApolloServer({ typeDefs, resolver})

await apolloServer.start()

app.use( '/graphql', apolloMiddleware(apolloServer))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`Graphql server is running on http://locahost:${PORT}/graphql`)
})


