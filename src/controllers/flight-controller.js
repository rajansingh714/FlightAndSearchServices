const { FlightService } = require('../services/index');

const flightService = new FlightService();


const create = async (req, res) => {
    try {
        const response = await flightService.createFlight(req.body);
        return res.status(200).json({
            data: response,
            message: 'successFully created a flight',
            success: true,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to create a flight",
            success: false,
            err: error
        });
    }
}

module.exports = {
    create,
}