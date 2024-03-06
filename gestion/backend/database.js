const mongoose = require('mongoose');
//const URI='mongodb://localhost:27017/siglo';
const URI='mongodb+srv://bases1:3kfcZUGwoDDI1XU0@cluster1.ptbagef.mongodb.net/2024?retryWrites=true&w=majority&appName=Cluster1'
mongoose.connect(URI)
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err));
module.exports=mongoose;