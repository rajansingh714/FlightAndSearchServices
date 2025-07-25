const { FlightRepository, AirplaneRepository } = require('../repository/index');


class FlightService {

        constructor() {
            this.flighRepository = new FlightRepository;
            this.ariplaneRepository = new AirplaneRepository;
        }

        async createFlight(data) {
            try {
                const airplane = await this.ariplaneRepository.getAirplane(data.airplaneId);

                const flight = await this.flighRepository.createFlight({
                    ...data, totalSeats: airplane.capacity
                });
                return flight;

            } catch (error) {
                console.log('something went wrong in service layer');
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
 * totalSeats --> airplane from Table
 */


