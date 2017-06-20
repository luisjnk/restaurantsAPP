<template>
  <div class="restaurantsList">
  <b-card-group>
    <div v-for="restaurant in restaurantsList">
      <b-card 
              img="http://placeskull.com/200/200/ABABAB/-1/0"
              title="Skulls are nice"
              class="mb-3"
      >
          `{{restaurant.Name}}
      </b-card>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import RequestsService from '../services/requestsService.js'
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
