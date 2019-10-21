const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
/* Tenemos que registrarnos en un sitio web 
https://rapidapi.com/dev132/api/city-geo-location-lookup
user name: EddyPaz
correo: eddypaz150893@gmail.com
pass: carne201404346*/


const encodedUrl = encodeURI(argv.direccion);
console.log(encodedUrl);
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: { 'x-rapidapi-key': 'd2a3305526msh4144be7e4deb9f3p1a354ajsn050e3f01486b' }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('ERROR!!!!', err)
    });