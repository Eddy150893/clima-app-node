const axios = require('axios');
/* Tenemos que registrarnos en un sitio web 
https://rapidapi.com/dev132/api/city-geo-location-lookup
user name: EddyPaz
correo: eddypaz150893@gmail.com
pass: carne201404346*/
const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        /* Ya que se creo una cuenta esta nos provee de un rapid key por ello se lo enviamos en el header
        al igual que de la url para el servicio y como parametro la localizacion ya codificada 
        de una manera amena para una url */
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'd2a3305526msh4144be7e4deb9f3p1a354ajsn050e3f01486b' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}