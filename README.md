# Welcome to Flight Services

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloded project
- Create a .env file in the root directory and add the following environment
  variable
        `PORT=3000`

- Inside the `src/config` folder create a new file `config.json` then add following piece of json


```````
{
  "development": {
    "username": "<your DB login NAME>",
    "password": "<your DB password>",
    "database": "Flight_Search_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```````

- Once you've added your db config as listed above, go to the src folder  from your terminal and execute 
`npx sequelize db:create`