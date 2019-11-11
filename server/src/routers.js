// import { resolve } from 'path'
// import { Router, static } from 'express'

// // var bodyParser = require('body-parser')

// const rootPath = resolve(__dirname, '../')


// // routers.use(bodyParser.json())

// // routers.use(function (req, res, next) {
// //     restring = JSON.stringify(req.body)
// //     res.send(restring);
// //     console.log(restring + 'succesed')
// // })

// export const routers = Router()


// routers.use('/adminw', static(rootPath + ('/views/adminw')))
// routers.get('/adminw', function (req, res, next) {
//     res.sendFile(rootPath + ('/views/adminw/index.html'));
// })



// routers.use('/assets', static(rootPath + ('/views/customerw/assets')))

// routers.get('/products', function (req, res, next) {
//     res.sendFile(rootPath + ('/views/customerw/products.html'));
// })
// routers.get('/product', function (req, res, next) {
//     res.sendFile(rootPath + ('/views/customerw/product.html'));
// })
// routers.get('/blogs', function (req, res, next) {
//     res.sendFile(rootPath + ('/views/customerw/products.html'));
// })
// routers.get('/blog', function (req, res, next) {
//     res.sendFile(rootPath + ('/views/customerw/blog.html'));
// })


// routers.post('/auth', function (req, res, next) {
//     res.header('Access-Control-Expose-Headers', 'access-token');
//     const now = Date.now();
//     let unauthorized = true;
//     const token = req.headers['access-token'];
//     if (token) {
//         const expired = now - token > expireTime;
//         if (!expired) {
//             unauthorized = false;
//             res.header('access-token', now);
//         }
//     }

//     if (unauthorized) {
//         res.sendStatus(401);
//     } else {
//         next();
//     }


// })

export const routers = null