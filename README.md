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

> docker-compose --env-file ./config/.env.prod.pi up

> docker-compose --env-file ./config/.env.prod.pi down
