import Vue from 'vue'
import axios from 'axios'

export default {
    
  getRestaurantsByLatAndLong(lat,long) {
    const request = axios .get(process.env.APIURL + lat + '/' + long)
    return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    }
}