import Koa from 'koa'
import mount from 'koa-mount'
import { graphqlHTTP } from 'koa-graphql'
import cors from '@koa/cors'
import mongoose from 'mongoose'

import GraphQLSchema from './graphql/schema'

mongoose.connect(
  'mongodb://0.0.0.0:27017/graphql',
  {
    authSource: 'admin',
    user: 'root',
    pass: 'rootpassword'
  }, (err) => {
    if (err != null) process.exit(1)
  })

mongoose.connection.once('open', (err) => {
  if (err != null) process.exit(1)
  console.log('Successfully connected to database!')
})

const app = new Koa()

app.use(cors())
app.use(
  mount('/',
    graphqlHTTP({
      schema: GraphQLSchema,
      graphiql: true,
      pretty: true
    }))
)

app.listen(8000)
