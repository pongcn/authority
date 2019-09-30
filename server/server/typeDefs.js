const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
  user(
    _id: ID!
  ): User

  users: [User!]!

  me: User

  product(
    _id: ID
    name: String
    detail: String
    author_ID: String
    productType: [String]
    status:[String]
  ):Product

  products(
    author_ID: String
    productType: [String]
  ):[Product]

  productType(
    _id: ID
    name: String
    detail: String
    author_ID: String
  ):ProductType

  productTypes(
    author_ID: String
  ):[ProductType]

  blog(
    _id:ID
    name: String
  ):Blog

  blogs(
    name: String
    author_ID: String
    release: Boolean # default: true , 
  ):[Blog]

  userAuth(
    email:String!
    password:String!
  ):Token
  

}

type Mutation {
  
  addUser(
    email: String!, 
    password: String!, 
    role:[Int]
  ): User

  updataUser(
    _id: ID
    email: String, 
    password: String, 
    role:[Int]
  ): Massage

  removeUser(
    _id: ID
    email: String, 
    password: String, 
  ): Massage


  addProduct(
    name: String!
    detail: String
    author_ID: String
    productType: [String]
    status:[String]
    release: Boolean # default: true , 
  ): Product

 
  updataProduct(
    _id: ID!
    name: String
    detail: String
    author_ID: String
    productType: [String]
    status:[String]
    release: Boolean # default: true 
  ): Massage

  removeProduct(
    _id: ID!
    name: String
  ): Massage

  addProductType(
    name: String!
    detail: String
    author_ID: String
    release: Boolean # default: true , 
  ): ProductType

 
  updataProductType(
    _id: ID!
    name: String
    detail: String
    author_ID: String
    release: Boolean # default: true 
  ): Massage

  removeProductType(
    _id: ID!
    name: String
  ): Massage

  addBlog(
    name: String!
    detail: String
    author_ID: String
    release: Boolean # default: true , 
  ): Product

 
  updataBlog(
    _id: ID!
    name: String
    detail: String
    author_ID: String
    release: Boolean # default: true 
  ): Massage

  removeBlog(
    _id: ID!
    name: String
  ): Massage

  # addRecom(
  #   _id:ID!
  #   url: String!
  #   text: String!
  #   release: Boolean # default: true , 
  # ): Recom

 
  # updataRecom(
  #   _id: ID!
  #   url: String!
  #   text: String!
  #   release: Boolean # default: true 
  # ): Massage

  # removeRecom(
  #   _id: ID!
  # ): Massage

}

type Token {
  user: User
  token: String
}

type Massage {
  type:[Int]
  status:Int
  body:String!
}

type User {
  _id: ID!
  email: String!
  password: String!
  role: [Int]
}


type UserDetial {
  _id: ID!
  user_ID: String!
  nickName: String
  userType: String
  firstName: String
  lastName: String
  gender: Int
  email: String
  country: String
  phoneNumber: Int
  updatedAt: String
}

type Product {
  _id:ID!
  name: String!
  detail: String
  author_ID: String
  productType: [String]
  status: [String]
  release: Boolean # default: true , 
  del:Boolean
}

type ProductType{
  _id:ID!
  name: String!
  detail: String
  author_ID: String
  release: Boolean # default: true , 
  del:Boolean
}

type Blog{
  _id:ID!
  name: String!
  detail: String!
  author_ID: User
  release: Boolean # default: true , 
  del:Boolean
}

# type recom{
#   _id:ID!
#   url: String!
#   text: String!
#   release: Boolean # default: true , 
#   del:Boolean
# }


# type SysEvent{
#   release: Boolean # default: true , 
#   del:Boolean
# }

# type Album{
#   _name:
#   _detail: 
#   author_ID: 
#   release: Boolean # default: true , 
# }



`
  ;

module.exports = typeDefs