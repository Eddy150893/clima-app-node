const axios = require('axios');
/* Tenemos que registrarnos en un sitio web 
https://home.openweathermap.org
user name: EddyPaz
correo: eddypaz150893@gmail.com
pass: carne201404346*/
const getClima = async(lat, lng) => {
    /*En el url van los parametros de la api
    la latitud, longitud, apiid(El cual se nos
        provee al crear la cuenta) y un ultimo parametro
    metric para que nos lance en unidades metricas
    los datos. */
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=76835cb6582f864dd4c00d6e864a9ad9&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}