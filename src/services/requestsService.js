import Vue from 'vue'
import axios from 'axios'

export default {
    
  getRestaurantsByLatAndLong(lat,long) {
    const request = axios .get(process.env.APIURL + lat + '/' + long)
    return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    },
   getRestaurant(Id) {
    const request = axios .get(process.env.APIURL + Id)
    return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    },
    insertRestaurtantExperience(description) {
        const request = axios .post(process.env.APIURL + 'like',description)
        return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    },
    getRestaurantLikes(Id) {
    const request = axios .get(process.env.APIURLLIKES + Id)
    return request
        .then(result => { console.log(result); return result.data.message; })
        .catch(error => { console.error(error); throw error; });
    }   
}