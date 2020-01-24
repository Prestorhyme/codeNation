const request = require('request');
const APPID = 'c720397f7506038e2705f435dd6fc209';

const getWeather = () => {
    request({
        uri: `https://api.openweathermap.org/data/2.5/find?q=Manchester,uk&APPID=${APPID}`,
        json: true

    }, (err, res) => {
        if(err) throw err;
        console.log(res.body);
    });
}

getWeather()