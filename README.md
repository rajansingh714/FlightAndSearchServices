## Welcome to Flight Service


## Project Setup

-- clone the project in your local system
-- Execute `npm install` on the same path as of your root directory of the download project

-- Create a `.env ` file in the root directory and add the following environment variable

    -- `PORT=3000`
-- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json


``````
        {
            "development": {
                 "username": "<your DB Name>",
                "password": "<yorr DB password >",
                "database": "flight_search_dev",
                "host": "127.0.0.1",
                 "dialect": "mysql"
            }        
        }

``````


-- Once you have added your db config as listed above, go to the src folder 
from your terminal and execute  `npx sequuelize db:create` and then execute


` npx sequelize db:migrate ` 

### DB design
    - Airplane  Table
    - Flight
    - Airport
    - City

    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A City has many airports but one airport belongs to a city
    - One airport can have many flights, but a flight belongs to one airport