const express = require('express');
const bodyParser = require('body-parser');


const db = require('./models/index');
const  airplanes  = require('./models/index')


const { PORT } = require('./config/serverConfig');
const ApiRoutes = require("./routes/index");



const setupAndStartService = async() => {

    // create a express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async() => {
        if(process.env.DB_SYNC) {
            //  db.sequelize.sync({alter: true});
         }
            console.log(`Server Started at ${PORT}`);
         console.log(typeof(airplanes));
            await airplanes.create({

            })
    });
}


setupAndStartService();

