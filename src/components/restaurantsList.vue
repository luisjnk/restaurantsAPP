<template>
<div class="chef app-pages app-section">
		<div v-if="lat != '' && long!=''" class="container">
			<div class="pages-title">
				<h3>Restaurants near to you</h3>
			</div>
      <div class="entry" v-for="restaurant in restaurantsList" v-on:click="click(restaurant.Id)">
				<img src="img/chef1.png" alt="">
				<div class="content">
					<h5>{{restaurant.Name}}</h5>
					<div class="rating">
						<span class="active"><i class="fa fa-star"></i></span>
						<span class="active"><i class="fa fa-star"></i></span>
						<span class="active"><i class="fa fa-star"></i></span>
						<span class="active"><i class="fa fa-star"></i></span>
						<span class=""><i class="fa fa-star"></i></span>
					</div>
					<p><span>Address:</span> <a href="">{{restaurant.Address}}</a></p>
          <p><span>Contact:</span> <a href="">{{restaurant.Contact}}</a></p>
				</div>
			</div>
     </div>
     <div v-else class="slider-slick app-pages">
        <div class="slider-entry">     
          <div class="overlay"></div>
          <div class="caption">
            <div class="container">
              <h2>Impossible access your location</h2>
              <p>Can you enable your location ?</p>
  
            </div>
          </div>
        </div>
    </div>
   </div>    
  
	<!-- end offers -->

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


</style>
