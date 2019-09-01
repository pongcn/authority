const { DB_PATH, SERVER } = require('../config')
const app = require('express')()
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')
const routers = require('./routers')



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
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
})


app.use('/', routers);


app.listen(SERVER.PORT, () => console.log(`Example app listening on port http://${SERVER.HOST}:${SERVER.PORT}`))
mongoose.set('useCreateIndex', true);
mongoose.connect(DB_PATH, { useNewUrlParser: true, useFindAndModify: false }).then(() => {
  console.log("Connected to Database")
}).catch(err => { throw err });
