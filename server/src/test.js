import { sign } from 'jsonwebtoken'



const Token = {
  User: {
    email: "pongcn@gmail.com",
    password: "defpw001"
  },
  token: ""
}


const data = {
  email: "pongcn@gmail.com",
  password: "defpw001"
}

const testJWT = async (args = data) => {

  let token = await sign(
    { password: args.password },
    "defPw*19820808",
    { expiresIn: '1d' },
    // (err, token) => {
    //   reToken = token
    // }
  )
  return console.log(token)
}
testJWT()