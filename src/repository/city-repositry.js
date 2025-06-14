const { City } = require('../models/index');
const { Op } = require('sequelize');


class CityRepository {

        async createCity({ name }) {
            try {
                const city = await City.create({
                name: name
            });
            return city;
            } catch (error) {
                console.log("Something went wrong in repository layer");
                throw{error};
            }
        } 

       async deleteCity(cityId)  {
            try {
                const response = await City.destroy({
                    where: {
                        id: cityId
                    }
                });
                return true;
            } catch (error) {
                console.log("Something went wrong in repository layer");
                throw{error};
            }
       }

        async updateCity(data, cityId) {
            try {
                const response = await City.update(data, {
                    where: {
                        id: cityId
                    }
                });
                return response;
            } catch (error) {
                console.log("Something went wrong in repository laeyr");
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

        async getAllCities(filter) { // filter can be empty 
            try {
                if(filter.name) {
                    const cities = await City.findAll({
                        where: {
                            name: {
                            [Op.startsWith]: filter.name

                            }
                        }
                    });
                    return cities;
                }
                const cities = await City.findAll();
                return cities;
            } catch (error) {
                console.log("Something went wrong in repository laeyr");
                throw(error);
            }
        }
}


module.exports = CityRepository;

