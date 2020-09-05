// util.js
import axios from 'axios';


const baseUrl = 'https://usesthis.com/api/';

const fetchHardareInfo = (equipment) =>( 
    axios.get(`baseUrl/hardware/${ equipment}`)

);



const fetchSoftwareInfo = (program) =>( 
    axios.get(`baseUrl/software/${ program}`)
);
