const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/build'));

app.get('/',function(req,res){
    console.log('recieved');
   res.sendFile(__dirname+'/build/index.html');
});
app.listen(PORT , (error) => console.log(error));




