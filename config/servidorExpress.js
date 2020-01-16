const express = require('express');
var servidorExpress = ()=>{
    const app = express();
    app.use(bodyParser.json());
    

    return app;
}
module.exports = servidorExpress;