//change the url to an api call to the server for when its using its own server
import $ from 'jquery';

export const fetchWines = () => {
    return $.ajax({
        method: 'GET',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        mode: 'no-cors',
        url: "https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/t100_2018.json"
    });
};