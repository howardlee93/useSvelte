// api_util.js
import axios from 'axios';

export const fetchInfo = query =>{
	return axios.get( "https://api.covidtracking.com/v1/us/current.json");

};


