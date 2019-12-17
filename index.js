const ttn = require("ttn") //SDK de l'application Node.js

const appID = "smart_cantine_app"
const accessKey = "ttn-account-v2.lakaif4bREswHrfjTA0vYkipJ9IlAeDk9NFdppIWZ5k"

ttn.data(appID, accessKey)
  .then(function (client) {
    client.on("uplink", function (devID, payload) {
      console.log("Received uplink from ", devID)
      console.log(payload)
    })
  })
  .catch(function (error) {
    console.error("Error", error)
    process.exit(1)
  })

  ttn.application(appID, accessKey)
    .then(function (client) {
      return client.get()
    })
    .then(function (app) {
      console.log("Got app", app)
    })
    .catch(function (err) {
      console.error(err)
      process.exit(1)
    })
