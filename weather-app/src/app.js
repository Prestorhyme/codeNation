const express = require('express');
const path = require('path');
const app = express();
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const hbs = require('hbs');
const partialsPath = path.join(__dirname, '../templates/partials');
const myForecast = require('./weatherMap');

let myWeatherData="";

myForecast("Manchester", "UK", "Metric", (response) => {
    myWeatherData = response;
    console.log("app.js weather data");
    console.log(myWeatherData);
});

hbs.registerPartials(partialsPath);
app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
    res.render('index', 
    {
        title: 'Weather App',
        author: 'Conor Staniforth',
    }
    );
})

// app.get('/' , (request, response) => {
//     response.send('this is the Home Page');
// });

// app.get('/about' , (request, response) => {
//     response.send('this is the About Page');
// });

app.get('/api',(req, res) => {
    console.log(req.query);

    if(!req.query.city) {
        res.send({
            error: 'Please enter a city name'
        })
    } else {

    myforeCast(req.query.city, "uk", "metric", (response) => {
    res.send(
    {
        cityName: req.query.city,
        
    }
    )
  
})

app.listen(3000, () => {
    console.log('server is running');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact' , (request, response) => {
    response.send('<h1>Contact Page...</h1>');
});


app.get('/weather', (req, res) => {
    res.render('weather', {
        cityName: myWeatherData.name,
        temperature: myWeatherData.main.temp
    });
});

app.get('/api', (req, res) => {
    res.send({
        cityName: myWeatherData.name,
        temperature: myWeatherData.main.temp
    })
})