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


const getAll = async (req, res) => {
    try {
        let flightRequrestDate = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const response = await flightService.getAllFlightData(flightRequrestDate);
        return res.status(200).json({
            success: true,
            data: response,
            message: 'successFully fecth the flights',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to getAll a flight",
            success: false,
            err: error
        });
    }
}
module.exports = {
    create,
    getAll
}