const { Airplane } = require('../models/index');



class AirplaneRepository {
    async getAirPlane(id) {
        try {
            const result = await Airplane.findByPk(id);
            return result;
        } catch (error) {
            console.log("something went wrong in Repository layer", error);
            throw(error);
        }
    }
}


module.exports = AirplaneRepository;

