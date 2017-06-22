<template>
<div class="chef app-pages app-section">
		<div class="container">
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
					<ul>
						<li><a href=""><i class="fa fa-envelope"></i></a></li>
						<li><a href=""><i class="fa fa-facebook"></i></a></li>
						<li><a href=""><i class="fa fa-twitter"></i></a></li>
						<li><a href=""><i class="fa fa-linkedin"></i></a></li>
						<li><a href=""><i class="fa fa-link"></i></a></li>
					</ul>
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
