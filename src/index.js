const express = require("express");
const bodyparser = require('body-parser');
const { PORT } = require('./config/serverConfig');


const setupAndStartServer = async() => {

        // create express object
        const app = express();


        // middleWare
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended: true}));

        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });
}

setupAndStartServer();

     