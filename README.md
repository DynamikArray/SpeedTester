# SpeedTester

##

dotEnv is not used yet as this only uses local mongo instance and no creds

##

### Requirements

- node
- mongo
- Pm2
- speedtester globally

Speed tester library

- speedtest module - https://github.com/ddsol/speedtest.net
  - install globally - `npm install --global speedtest-net`
  - accept liscense `speedtest-net --accept-license`

Other Misc Stuff

- configure Pm2 to run app
  pm2 start application.config.js --env production/development
