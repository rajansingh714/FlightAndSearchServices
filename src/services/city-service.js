const { CityRepository } = require('../repository/index');


class CityService {
    constructor() {
        this.CityRepository = new CityRepository();
    }

    async createCity(data) {
            try {
                const city = await this.CityRepository.createCity(data);
                return city;
            } catch (error) {
                console.log("Something went wrong in service layer");
                throw(error);
            }
    }

    async deleteCity(cityId) {
            try {
                const response = await this.CityRepository.deleteCity(cityId);
                return response;
            } catch (error) {
                console.log("Something went wrong in service layer");
                throw(error);
            }
        }

    async updateCity(data, cityId) {
                try {
                    const response = await this.CityRepository.updateCity(data, cityId);
                    return response;
                } catch (error) {
                    console.log("Something went wrong in service layer");
                    throw(error);
                }
        }

    async getCity(cityId) {
            try {
                const response = await this.CityRepository.getCity(cityId);
                return response
            } catch (error) {
                console.log("Something went wrong in service layer");
                throw(error);
            }
        }
    
    async getAllCities(filter) {
            try {
                const cities = await this.CityRepository.getAllCities({name: filter.name});
                return cities;
            } catch (error) {
                console.log("Something went wrong in service layer");
                throw(error);
            }
        }

}

module.exports = CityService;
    