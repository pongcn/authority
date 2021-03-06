import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import models from './models'

// resolvers
const { user, product, blog } = models

export const resolvers = {

  Query: {

    user: async (parent, args, ctx, info) => {
      let User = await user.findOne(args)
      if (!User) { throw new Error('Invalid user') }
      return User;
    },
    users: async (parent, args, ctx, info) => {
      let User = await user.find(args)
      return User
    },
    me: async (parent, args, ctx, info) => {
      let User = await user.findOne(args)
      if (!User) { throw new Error('Invalid user') }
      return User;
    },

    product: async (parent, args, ctx, info) => {
      let Product = await product.findOne(args)
      // if (!Product) { throw new Error('product unexist') }
      return Product
    },
    products: async (parent, args, ctx, info) => {
      let Products = await product.find(args)
      return Products
    },
    productType: async (parent, args, ctx, info) => {
      let ProductType = await productType.findOne(args)
      // if (!Product) { throw new Error('product unexist') }
      return ProductType
    },
    productTypes: async (parent, args, ctx, info) => {
      let ProductTypes = await productType.find(args)
      return ProductTypes
    },
    blog: async (parent, args, ctx, info) => {
      let Blog = await blog.findOne(args)
      // if (!Product) { throw new Error('product unexist') }
      return Blog
    },
    blogs: async (parent, args, ctx, info) => {
      let Blogs = await blog.find(args)
      return Blogs
    },


    userAuth: async (parent, args, ctx, info) => {
      let reUser = await user.findOne({ email: args.email })
      if (!reUser) { throw new Error('invalid reUser') }
      let comPWD = bcrypt.compareSync(args.password, reUser.password);
      if (!comPWD) { throw new Error('invalid password') }
      let Token = {}
      Token.user = reUser
      Token.token = jwt.sign(
        { _id: reUser._id },
        "defPw*19820808",
        { expiresIn: '1d' },
      )
      return Token
    },


  },




  Mutation: {


    addUser: async (parent, args, ctx, info) => {
      let newUser = await new user(args)
      newUser.password = await bcrypt.hashSync(newUser.password, 10);
      let User = await newUser.save()
      return User
    },
    updataUser: async (parent, args, ctx, info) => {
      args.password = await bcrypt.hashSync(args.password, 10);
      await user.findByIdAndUpdate(args._id, args)
      return { type: 1, status: 200, body: 'db updataUser sucessed' }
    },
    removeUser: async (parent, args, ctx, info) => {
      await user.findByIdAndRemove(args._id, args)
      return { type: 1, status: 200, body: 'db removeUser sucessed' }
    },

    addProduct: async (parent, args, ctx, info) => {
      // const name = args.productType
      // console.log(productType.findOne({name}))
      // args.productType = productType.findOne(name)
      // args.productType = productType.findOne(args.productType)
      let newProduct = await new product(args)
      let Product = await newProduct.save();
      return Product
    },
    updataProduct: async (parent, args, ctx, info) => {
      await product.findByIdAndUpdate(args._id, args)
      return { type: 1, status: 200, body: 'db updataProduct sucessed' }
    },
    removeProduct: async (parent, args, ctx, info) => {
      await product.findByIdAndRemove(args._id, args)
      return { type: 1, status: 200, body: 'db removeProduct sucessed' }
    },

    addProductType: async (parent, args, ctx, info) => {
      let newProductType = await new productType(args)
      let ProductType = await newProductType.save();
      return ProductType
    },
    updataProductType: async (parent, args, ctx, info) => {
      await productType.findByIdAndUpdate(args._id, args)
      return { type: 1, status: 200, body: 'db updataProductType sucessed' }
    },
    removeProductType: async (parent, args, ctx, info) => {
      await productType.findByIdAndRemove(args._id, args)
      return { type: 1, status: 200, body: 'db removeProduct sucessed' }
    },

    addBlog: async (parent, args, ctx, info) => {
      let newBlog = await new blog(args)
      let Blog = await newBlog.save();
      return Blog
    },
    updataBlog: async (parent, args, ctx, info) => {
      await Blog.findByIdAndUpdate(args._id, args)
      return { type: 1, status: 200, body: 'db updataBlog sucessed' }
    },
    removeBlog: async (parent, args, ctx, info) => {
      await Blog.findByIdAndRemove(args._id, args)
      return { type: 1, status: 200, body: 'db removeBlog sucessed' }
    },

  },


}

