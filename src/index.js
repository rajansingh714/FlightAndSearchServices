const express = require('express');
const {PORT} = require('./config/serverConfig');

const setupAndStartService = async() => {

    // create a express object
    const app = express();
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server Started at ${PORT}`);
        // console.log(process.env);
    })

}

setupAndStartService();

