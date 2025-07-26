const { ClientErrorCodes } = require('../utils/error-code');


const ValidateCreateFlight = (req, res, next) => {

        if(
            !req.body.flightNumber ||
            !req.body.airplaneId ||
            !req.body.departureAirportId ||
            !req.body.arrivalAirportId ||
            !req.body.arrivalTime || 
            !req.body.departureTime ||
            !req.body.price
        ) {
            return res.satus(ClientErrorCodes.BAD_REQUEST).json({
                data: {},
                success: false,
                message: 'Invalid request for create flight',
                err: 'Missing Manadotry properties to create a flight'
            })
        }
        next();
}

module.exports = ValidateCreateFlight;