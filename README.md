# Immfly

## _Backend server with typescript, node, and express. Jest unit tests and docker._

This Express server was developed making use of:

- Node.js and Express.js
- TypeScript
- Jest for unit tests
- Axios for external API requests
- Dotenv to read environmental variables
- A couple of beer cans and several coffee cups ☕

## Installation

Prerequisites:

- Node v16 with npm or yarn

Install the dependencies and devDependencies and start the server.

```sh
cd ts-node-backend
npm i or yarn
npm run dev or yarn dev
```

Running with docker

```sh
docker-compose build
docker-compose run
```

## Endpoints

If runnnig locally, you can access the endpoint with http://localhost:4000/
| Route | Method | Description |
| ------ | ------ | ------ |
| /countries?filter=ia&order=asc | This will return a list of countries filtered by any given string (must be an string) and order it ascendant or descendant ([asc, desc]) |
| /reverse/:phrase | When providing a valid string, this endpoint will return the given phrase reversed and with uppercased vowels |
| /append?start=start&end=end | The append route will return a new array of elements where first one will be the start value (string), the last one the end value (string). In the middle of them the SIMPLE_ARRAY provided as a enviromental variable |
