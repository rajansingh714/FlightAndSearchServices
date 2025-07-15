const { FlightRepository } = require('../repository/index');

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            const airplane = await this.airplaneRepository.getAirPlane(data.id);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer",error);
            throw(error);
        }
    }

    async getFlightData() {
        
    }
}


module.exports = FlightService;


/**
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * departureTime,
 * price,
 * boardingGate,
 * totalSeats
 */


