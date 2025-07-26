const { Flight } = require('../models/index');
const { Op } = require('sequelize');


class FlightRepository {

        // private memeber fuction
        #createFileter(data) {
            let filter = {};
            if(data.arrivalAirportId) {
                filter.arrivalAirportId = data.arrivalAirportId
            }

            if(data.departerAirportId) {
                filter.departerAirportId = data.departerAirportId
            }
            
            // if(data.minPrice && data.maxPrice) {
            //     Object.assign(filter, {
            //         [Op.and]: [
            //             { price: {[Op.lte]: data.maxPrice} },
            //             { price: {[Op.gte]: data.minPrice} }
            //         ]
            //     });
            // }

            let priceFilter = [];

            if(data.minPrice) {
                // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
                priceFilter.push({ price: {[Op.gte]: data.minPrice}});
            }

            if(data.maxPrice) {
                // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
                priceFilter.push({ price: {[Op.lte]: data.maxPrice}});
            }
            Object.assign(filter, {[Op.and]: priceFilter})
            return filter;
        }   
 
        async createFlight(data) {
            try {
                const response = await Flight.create(data);
                return response;
            } catch (error) {
                console.log("something went wrong in repository layer", error);
                throw(error);
            }
        }

        async getFlight(flightId) {
            try {
                const response = await Flight.findByPk(flightId);
                return response;
            } catch (error) {
                console.log("something went wrong in repository layer", error);
                throw(error);
            }
        }

        async getAllFlights(filter) {
            try {
                const filterObject = this.#createFileter(filter);
                const flight = await Flight.findAll({ 
                    where: filterObject
                });
                return flight;
            } catch (error) {
                console.log("something went wrong in repository layer", error);
                throw(error);
            }
        }
}

module.exports = FlightRepository;  

/**
 *  where: {
 *     
 *       arrivalAirportId: 2,
 *      departureAirportId: 4,
 *      price: {[gte]: 4000}
 *   
 * }
 */


