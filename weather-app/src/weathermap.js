const request = require('request');

const forecast = (city, country, units, callback) => {

    // ?q=New York, US (Non-Encoded)
    // ?q=New%20York,%20US (Encoded)

    const encodedCityName = encodeURIComponent(city);
    
    const weatherMapUrl = `http://api.openweathermap.org/data/2.5/weather?q=${encodedCityName},${country},uk&units=${units}&APPID=404d7c33000be70cccaa96bede693fd0`

    request({ url: weatherMapUrl, json: true}, (error, response) => {
        console.log(response.body)
        // const data = JSON.parse(response.body);
        // console.log(data);

        if(error){
            console.log('error cannot connect to the API services');
        } else if(response.body.name === undefined){
            console.log('that city does not exist...');
        } else{
            console.log(`today we have mainly ${response.body.weather[0].main}`);
            console.log(`The current temperature in ${response.body.name} is ${response.body.main.temp} C`);
            callback(response.body);
        }
    })
}

module.exports = forecast;