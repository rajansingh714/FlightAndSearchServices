const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {

        try {
            const response = await airportService.create(req.body);
            return res.status(200).json({
                success: true,
                data: response,
                message: 'SuccessFully created a airport',
                err: {}
            }); 
        } catch (error) {
              console.log(error);
            return res.status(500).json({
                data: {},
                message: "can not create a new airport",
                success: false,
                err: error
            });
        }
}


module.exports = {
    create
}