import Twit from "twit"
import axios from "axios"
import config from "./config"

let T = new Twit(config)

const types = ["trivia", "year", "date", "math"]
let count = 0
let INTERVAL = 1000 * 60 * 60

tweeter()

function tweeter() {
  let type = types[count % 4]
  // Make a request
  axios
    .get(`http://numbersapi.com/random/${type}`)
    .then(({ data }) => {
      T.post("statuses/update", { status: data }, tweeted)
      function tweeted(err, data, response) {
        if (err) {
          console.log(err)
        } else {
          console.log("Successfully Tweeted")
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  count++
}

setInterval(tweeter, INTERVAL)
