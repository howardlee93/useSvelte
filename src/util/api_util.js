// util.js
import axios from 'axios';

const baseUrl = 'https://usesthis.com/api/stats';

export const fetchInfo = (type, query) =>( 
    axios.get(baseUrl+`/${type}/${query}`,
    {headers: {'Access-Control-Allow-Origin': '*'}}
)

);
