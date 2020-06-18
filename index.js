const express=require('express');
const path = require('path');
const morgan = require('morgan');

const app=express();

const routes = require(path.join(__dirname,'src/routes/routes'));

app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'src/views'));
app.use(express.static(path.join(__dirname,'src/public')))

app.use(morgan('dev'));

app.use('/',routes);

app.listen(app.get('port'), function(){
    console.log('server runing on port 3000');
});