const request = require('request');

var fetchWeather = (latitude, longitude, callback) => {

    request(`https://api.darksky.net/forecast/14351cc4a94fc3cb6711f2b269c655b0/${latitude},${longitude}?units=si`, function (error, response, body) {

        if (error) {
            callback("Unable to connect to Forecast.io server", null);
        }else {

            if (response.statusCode === 200) {

                let temp = JSON.parse(body);

                let tempObj = {
                    temperature: temp.currently.temperature + " °C",
                    summary: temp.currently.summary
                }

                callback(null, tempObj);

            } else {

                callback("Unable to fetch the weather", null);

            }

        }

    });

}

module.exports = {
    fetchWeather
}
