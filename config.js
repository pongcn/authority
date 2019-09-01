const DB_azure = `mongodb+srv://authoritywebAdmin:defPw*001@cluster0-kq99m.azure.mongodb.net/authorityweb?retryWrites=true&w=majority`

const DB_local = `mongodb://localhost:27017/authorityweb`

const DB_PATH = DB_local


const SERVER = {
    HOST: 'localhost',
    PORT: 4001
}


module.exports = { DB_PATH, SERVER }