# SpeedTester

## Requirements

### Local Development

- Nodemon

  `npm install -g nodemon`

  `npm install -g @vue/cli-service`

- Build client application first
  `npm run serve`
- Run node app
  `npm run start:dev`

### Docker

Start docker-compose up and by supplying the correct env file, need to verify restarts still

> docker-compose --env-file .env.dev.pc up

> docker-compose --env-file .env.dev.pc down
