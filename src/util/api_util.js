// api_util.js
import axios from 'axios';

export const fetchInfo = state =>{
	return axios.get( `	https://api.covidtracking.com/v1/states/${state}/current.json`);
};



