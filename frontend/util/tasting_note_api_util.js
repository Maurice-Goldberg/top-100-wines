//change the url to an api call to the server for when its using its own server
import $ from 'jquery';

export const fetchTastingNote = (wineId) => {
    return $.ajax({
        method: 'GET',
        mode: 'cors',
        url: `https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/${wineId}.json`
    });
};