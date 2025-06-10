const { City } = require('../models/city');


class CityRepository {

        async createCity({ name }) {
            try {
                const city = await City.create({
                        name: name
                });
                return city;
            } catch (error) {
                console.log("Something went wrong in respository layer");
                throw(error);
            }
        }

        async deelteCity(cityId) {
            try {
                await City.destory({
                    where: {
                        id: cityId
                    }
                });
                return true;

            } catch (error) {
                console.log("Something went wrong in respository layer");
                throw(error);
            }
        }

        async updateCity(cityId, data) {
            try {
                const city = await City.update(data, {
                    where: {
                        id: cityId
                    }
                });
                return city;
            } catch (error) {
                  console.log("Something went wrong in respository layer");
                  throw(error);
            }
        }


        async getCity(cityId) {
            try {  
                const city = await City.findByPk(cityId);
                return city;
            } catch (error) {
                console.log("Something went wrong in respository layer");
                throw(error);
            }
        }
}   

module.exports = CityRepository;