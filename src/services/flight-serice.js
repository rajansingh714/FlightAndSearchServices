const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { CompareTime } = require('../utils/helper');

class FlightService {

        constructor() {
            this.flighRepository = new FlightRepository;
            this.ariplaneRepository = new AirplaneRepository;
        }

        async createFlight(data) {
            try {
                if(!CompareTime(data.arrivalTime, data.departureTime)) {
                    throw{error: 'Arrival time cannot be less than departure time'};
                }
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

        async getAllFlightData(data) {
            try {
                const flights = this.flighRepository.getAllFlights(data);
                return flights;
            } catch (error) {
                console.log('something went wrong in service layer');
                throw(error);
            }
        }
}


module.exports = FlightService;


/**
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime
 * departureTime,
 * price,
 * boardingGate,
 * totalSeats --> airplane from Table
 */


