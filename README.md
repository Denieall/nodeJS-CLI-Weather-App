<div align="center">
<img src="https://github.com/Denieall/nodeJS-CLI-Weather-App/blob/weatherApp_Promise/logo.png" width="200" height="200" />
<h1 align="center">NodeJS Command Line Weather App</h1>
<h3>Built with Google's Geolocation API and Dark Sky API</h3>
</div>

## Objective
This weather app was built in order to learn about consuming apis and using axios, a promise based HTTP client.

## How it works
* The address given by the user will be cnoverted into coordinates by the Google Geocoding API.
* Then the coordinates will passed on as a GET request to the Dark Sky API.
* Finally the API respond with the weather data which is then printed into the terminal.

## Library/API Used

 <ol>
 <li><a href="https://github.com/axios/axios">&nbsp;axios</a></li>
 <li><a href="https://github.com/yargs/yargs">&nbsp;yargs</a></li>
 </ol>

## Screenshots (API called using Postman)
<img src="https://github.com/Denieall/nodeJS-CLI-Weather-App/blob/weatherApp_Promise/screenshot.PNG" />
