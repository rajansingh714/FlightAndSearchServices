const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(200).json({
            success: true,
            data: flight,
            message: 'SucceSSfully created a flight',
            data: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to create a Flight",
            success: false,
            err: error
        });
    }
}

module.exports = {
    create,

}
