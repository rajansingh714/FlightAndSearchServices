const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-contoller');

const FlightMiddleware = require('../../middlewares/index');

const router = express.Router();


router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destory);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);

router.post('/flights',
    FlightMiddleware.ValidateCreateFlight,
    FlightController.create
);

router.get('/flights', FlightController.getAll); 


router.post('/airports', AirportController.create);

module.exports = router;



