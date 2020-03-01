//change the url to an api call to the server for when its using its own server
import $ from 'jquery';

export const fetchWines = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/wines'
    });
};