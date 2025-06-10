const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async(req, res) => {
        try {
            const city = await cityService.createcity(req.body);
            return res.status(201).json({
                data: city,
                success: true,
                message: "Successfully created city",
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "not able to craete city",
                err: error
            });
        }
}

// DELET -> /city/:id

const destory = async(req, res) => {
        try {
            const city = await cityService.deleteCity(req.params.id);
            return res.status(200).json({
                data: city,
                success: true,
                message: "Successfully deleted city",
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "not able to delete city",
                err: error
            });
        }
}


// GET -> /city/:id

const get = async(req, res) => {
    try {
            const response =  await cityService.getCity(req.params.id);
            return res.status(200).json({
                data: city,
                success: true,
                message: "Successfully get city",
                err: {}
            });
    } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "not able to get city",
                err: error
            });
    }
}


// PATCH -> /city/:id -> req.body
const update = async(req, res) => {
    try {
            const response = await cityService.updateCity(req.params.id, req.body);
            return res.status(200).json({
                data: city,
                success: true,
                message: "Successfully updated city",
                err: {}
            });
    } catch (error) {
             console.log(error);
            return res.status(500).json({
                success: false,
                message: "not able to update city",
                err: error
            });
    }
}

module.exports = {
    create,
    destory, 
    get,
    update
}