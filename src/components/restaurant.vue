<template>
  <div  v-if="restaurant != ''">
  <!-- slider -->
	<div class="slider-slick app-pages">
		<div class="slider-entry">
			       <gmap-map
                    :center="markers[0].position"
                    :zoom="18"
                    style="width: 2000px; height: 500px"
                >
                 <gmap-marker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                    ></gmap-marker>
                </gmap-map> 
			<div class="caption">
			</div>
		</div>
	</div>
	<!-- end slider -->
    <div class="jumbotron">
        <div  class="container">
            <h1>{{restaurant.name}}</h1>
            <span v-if=" restaurant.likes && restaurant.likes.count">Peoples who likes this restaurant : {{restaurant.likes.count}}</span>
            <span v-else>Nobody likes this restaurant yet</span>
            </p>
             <span v-if=" restaurant.location && restaurant.location.address">Address : {{restaurant.location.address}}</span>
             <span v-else>Don't have Adress</span>
             </p>
             <span>Contact : {{restaurant.contact.formattedPhone}}</span>
             </p>
            <a v-bind:href="restaurant.shortUrl">{{restaurant.name}} FourSquare Link</a>
        </div>  
        	<!-- faq -->
	<div class="faq app-pages app-section">
		<div class="container">
			<div class="pages-title">
				<h3></h3>
			</div>
			<div class="entry">
				<ul class="collapsible" data-collapsible="accordion"> 
					<li>
						<div class="collapsible-header faq-collapsible">
							How was your experience ? <i v-on:click="open()" class="fa fa-plus"></i>
						</div>
						<div class="collapsible-body">
		
              <input type="text" placeholder="Name">
              <input type="text" placeholder="Title">
              <textarea name="" id="" cols="30" rows="10" placeholder="Additional Message"></textarea>
              <button type="button" class="button">Submit</button>
            </form>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>	
	<!-- end faq -->	
</div>
	
 </div>

</template>


<script>
import RequestsService from '../services/requestsService.js'
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyALL9qaik_cgTPdFa2Ps9UkXwLtQVGEHT8'
      // libraries: 'places', //// If you need to use place input
    }
  });


export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      restaurant : '',
      center: '',
        markers: [{
          position: ''
        }]
    }
  }, 
   beforeCreate () {
       RequestsService
            .getRestaurant(this.$route.params.restaurantId)
              .then(respose =>{
                  this.restaurant = respose
                  
                  this.markers[0].position = {lat: respose.location.lat, lng: respose.location.lng}
                console.log(this.restaurant)
        })

        navigator.geolocation
                  .getCurrentPosition(event => {
                      this.center =  {lat: event.coords.latitude, lng: event.coords.longitude}
            })
   },
   methods: {
      open() {
         find('span i').toggleClass('fa-chevron-down')
      },
      close(){

      }
     }
  
}
</script>