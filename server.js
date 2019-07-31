const express= require('express')
const graphqlHTTP= require('express-graphql')
const app = express();
const PORT = process.env.PORT || 4000;
const Schema = require('./schema')
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true
}))

app.listen(PORT)