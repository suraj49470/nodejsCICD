const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',function(req,res){
    console.log('recieved');
   res.send('1234');
});
app.listen(PORT , (error) => console.log(error));




