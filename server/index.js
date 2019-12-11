import App from 'express'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'
import { DB_PATH, SERVER } from './config'
import { resolvers, typeDefs } from './src'
// const resolvers = require('./src/resolvers')
// const typeDefs = require('./src/typeDefs')
// const routers = require('./src/routers')

const app = App()

const gqlserver = new ApolloServer({
  typeDefs,
  resolvers
});

gqlserver.applyMiddleware({ app, path: "/gql" });

// // cross-orgin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  req.method === 'OPTIONS'
    ? res.sendStatus(200)
    : next()
})

// app.use('/', routers);

app.listen(SERVER.PORT, () => console.log(`Example app listening on port http://${SERVER.HOST}:${SERVER.PORT}`))
mongoose.set('useCreateIndex', true);
mongoose.connect(DB_PATH, { useNewUrlParser: true, useFindAndModify: false }).then(() => {
  console.log("Connected to Database")
}).catch(err => { throw err });
