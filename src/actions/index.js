import axios from 'axios';


const API_KEY = '0905ffe2ac6af584023b710d4c5df5b5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log("req: "+request.data);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}