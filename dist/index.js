/*!
* Integerify Bot - v1.0.0
* MIT License
* Copyright (c) 2019 Frenco W. Jobs
*/
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Twit = _interopDefault(require('twit'));
var axios = _interopDefault(require('axios'));

var config = {
  consumer_key: "YOUR-CONSUMER-KEY-HERE",
  consumer_secret: "YOUR-CONSUMER-SECRET-HERE",
  access_token: "YOUR-ACCESS-TOKEN-HERE",
  access_token_secret: "YOUR-ACCESS-TOKEN-SECRET-HERE"
};

var T = new Twit(config);
var types = ["trivia", "year", "date", "math"];
var count = 0;
var INTERVAL = 1000 * 60 * 60;
tweeter();

function tweeter() {
  var type = types[count % 4]; // Make a request

  axios.get("http://numbersapi.com/random/".concat(type)).then(function (_ref) {
    var data = _ref.data;
    T.post("statuses/update", {
      status: data
    }, tweeted);

    function tweeted(err, data, response) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully Tweeted");
      }
    }
  })["catch"](function (error) {
    console.log(error);
  });
  count++;
}

setInterval(tweeter, INTERVAL);
