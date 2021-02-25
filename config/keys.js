if(process.env.NODE_ENV==='production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}


// module.exports={
//     MONGOURI:"mongodb+srv://bharath:9663100750Bs@cluster0.3efk9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     JWT_SECRET:"qwertyasdfgh"
// }