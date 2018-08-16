const yargs = require('yargs');

const geocode = require("./geocode/geocode.js");
const weather = require("./weather/weather.js");

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "Address to fetch weather for.",
            string: true
        }
    })
    .help()
    .alias('help', "h")
    .argv;

geocode.findLocation(encodeURIComponent(argv.address), (errMsg, res) => {

    if (errMsg == null) {

        console.log(`\nFormated Address:\n${res.fAddress}`);
        console.log(`\nCoordinates:\n${res.latitude}, ${res.longitude}`);

        weather.fetchWeather(res.latitude, res.longitude, (weatherErrMsg, weatherObj) => {
            if (weatherErrMsg == null) {
                console.log(`\nTemperature:\n${weatherObj.temperature}`);
                console.log(`\nSummary:\n${weatherObj.summary}`);
            } else {
                console.log(weatherErrMsg);
            }
        });


    } else {

        console.log(errMsg);

    }

});
