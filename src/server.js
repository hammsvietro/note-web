const app = require('./app');

require('dotenv').config({
    path: process.env.NODE_ENV  === 'test' ? '.env.test' : '.env',
});

app.listen(parseInt(process.env.PORT) || 3000);
console.log(process.env.PORT);





