<template>
  <div class="restaurantsList">
    <div class="panel panel-info" v-for="restaurant in restaurantsList" v-on:click="click(restaurant.Id)">
      <div class="panel-heading">
        <h3 class="panel-title">{{restaurant.Name}}</h3>
      </div>
      <div class="panel-body">
         {{restaurant.City}} ,
         {{restaurant.Country}}
         <p>
         {{restaurant.Address}}
         </p>
      </div>
    </div>
  </div>
</template>

<script>
import RequestsService from '../services/requestsService.js'
import router from '../router'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lat: '',
      long: '',
      restaurantsList : []
    }
  },
  computed: {
    fetchGet(lat,long) {
        RequestsService
            .getRestaurantsByLatAndLong(this.lat,this.long)
              .then(respose =>{
                this.restaurantsList = respose
              })
      },
    },
     methods: {
      click(Id) {
       router.push({ name: 'restaurant', params: { restaurantId: Id }})
      }
     },
   beforeCreate () {
           navigator.geolocation
                  .getCurrentPosition(event => {
                      this.lat = event.coords.latitude
                      this.long = event.coords.longitude
                      this.fetchGet
            })
    
   }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  padding: 20px;
  height: 500px;
}

</style>
