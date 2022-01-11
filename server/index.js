const express = require('express');
const app = express();

// Defining get request at '/multiple' route
app.get('/cities', function (req, res) {
  res.json({
    cities: [
      {
        name: 'Sydney',
        name_native: 'Sydney',
        country: 'Australia',
        continent: 'Australia',
        latitude: '-33.865143',
        longitude: '151.209900',
        population: '5312000',
        founded: '1788',
        landmarks: [
          'Sydney Opera House',
          'Sydney Harbour Bridge',
          'Queen Victoria Building',
        ],
      },
      {
        name: 'New York City',
        name_native: 'New York City',
        country: 'USA',
        continent: 'North America',
        latitude: '40.730610',
        longitude: '-73.935242',
        population: '8419000',
        founded: '1624',
        landmarks: [
          'Chrysler Building',
          'Brooklyn Bridge',
          'Madison Square Garden',
        ],
      },
      {
        name: 'Madrid',
        name_native: 'Madrid',
        country: 'Spain',
        continent: 'Europe',
        latitude: '40.416775',
        longitude: '-3.703790',
        population: '3223000',
        founded: '1083',
        landmarks: ['Royal Palace', 'Plaza Mayor', 'Plaza de Cibeles'],
      },
      {
        name: 'Moscow',
        name_native: 'Москва',
        country: 'Russia',
        continent: 'Europe',
        latitude: '55.751244',
        longitude: '37.618423',
        population: '11920000',
        founded: '1147',
        landmarks: ["Saint Basil's Cathedral", 'Kremlin', 'Bolshoi Theatre'],
      },
      {
        name: 'Tokyo',
        name_native: '東京',
        country: 'Japan',
        continent: 'Asia',
        latitude: '35.652832',
        longitude: '139.839478',
        population: '13960000',
        founded: '1603',
        landmarks: ['Meji Shrine', 'Asakusa', 'Tokyo Skytree'],
      },
      {
        name: 'Lagos',
        name_native: 'Lagos',
        country: 'Nigeria',
        continent: 'Africa',
        latitude: '6.465422',
        longitude: '3.406448',
        population: '14800000',
        founded: '1914',
        landmarks: [
          'Iga Idungaran',
          'Freedom Park',
          'The Cathedral Church of Christ',
        ],
      },
      {
        name: 'Sao Paulo',
        name_native: 'São Paulo',
        country: 'Brazil',
        continent: 'South America',
        latitude: '-23.533773',
        longitude: '-46.625290',
        population: '12330000',
        founded: '1554',
        landmarks: [
          'Mosteiro De Sao Bento',
          'Italian Building',
          'Farol Santander',
        ],
      },
      {
        name: 'Munich',
        name_native: 'München',
        country: 'Germany',
        continent: 'Europe',
        latitude: '48.137154',
        longitude: '11.576124',
        population: '1472000',
        founded: '1158',
        landmarks: ['Bavaria statue', 'Marienplatz', 'ottonova office'],
      },
    ],
  });
});

// Setting the server to listen at port 3000
app.listen(3000, function (req, res) {
  console.log('Server is running at port 3000');
});
