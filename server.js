const express = require('express');
const app = express();
const path = require('path');



app.use('/public', express.static(__dirname + '/public'));

app.get('/home',(req,res,next) => {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.listen(process.env.PORT ,() => {
    console.log("listen on port ");
});