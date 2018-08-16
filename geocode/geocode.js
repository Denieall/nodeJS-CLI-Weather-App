const request = require('request');

var findLocation = (address, callback) => {

    request({

        url: `https://maps.googleapis.com/maps/api/geocode/json?address=%20${address}&key=AIzaSyDXD_sLVnKn4NxZCql2bcWsUCsF4a3WiqA`,
        json: true

    }, (error, response, body) => {

        if (error == null) {
            if (body.status === "OK") {

                let resObj = {
                    fAddress: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                };

                callback(null, resObj);

            } else {

                callback(body.error_message, null);

            }

        } else {

            callback("Unable to connect to Google's server", null);

        }

    });

};

module.exports = {
    findLocation
};
