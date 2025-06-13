const { CityService } = require('../services/index');

const cityService = new CityService();


const create = async(req, res) => {
        try {
            const city = await cityService.createCity(req.body);
            return res.status(201).json({
                 data: city,
                 message: "successfully created a city",
                 success: true,
                 err: {}
        });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                 data: {},
                 message: "successfully not crated",
                 success: false,
                 err: error
            });
        }
}


// DELTE -> /city/:id

const destory = async(req, res) => {
        try {
            const response = await cityService.deleteCity(req.params.id);
            return res.status(200).json({
                data: response,
                message: "Successfully delete a City",
                success: true,
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data: {},
                message: "Not able to delte a City",
                success: false,
                err: error
            });
        }
}


// patch -> city/:id  -> req.body

const update = async(req, res) => {
        try {
            const city = await cityService.updateCity(req.body, req.params.id);
            return res.status(200).json({
                data: city,
                message: "sucessFully updated",
                success: true,
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data: {},
                message: "not updated",
                success: false,
                err: error
            });
        }    
}

// GET --> /city/:id

const get = async(req, res) => {
        try {
            const response = await cityService.getCity(req.params.id);
            return res.status(200).json({
                data: response,
                success: true,
                message: "successFully get data",
                err: {}
            });
        }  catch (error) {
            console.log(error);
            return res.status(500).json({
                data: {},
                message: "not able to get a city",
                success: true,
                err: error
            });
        }
}

const getAll = async(req, res) => {
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data: cities,
            success: true,
            message: "SuccessFully fetch all Cities",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to getAll Cities",
            err: error
        });
    }
}

module.exports = {
    create,
    destory,
    update,
    get,
    getAll
    
}


