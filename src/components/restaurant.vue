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
            </p>
            <div class="row">
              <div class="col-md-8">
							<div class="profile-info-right">
								<ul class="nav nav-pills nav-pills-custom-minimal custom-minimal-bottom">
									<li class="active"><a href="#activities"  v-on:click="changeActivity('activities')" data-toggle="tab">Restaurant Desciptions</a></li>
									<li><a href="#userdesc" v-on:click="changeActivity('useractivity')" data-toggle="tab">Users Desciptions</a></li>
									<li><a href="#yourdesc" v-on:click="changeActivity('youractivity')"data-toggle="tab">Insert your description</a></li>
								</ul>
                <div class="tab-content">
                <div class="tab-pane fade in active" id="activities">
                    <restaurantDescriptionList v-if="activities == 'activities'"></restaurantDescriptionList>
                    <restaurantUsersDescriptionList v-if="activities == 'useractivity'"></restaurantUsersDescriptionList>
                    <restaurantYourDescription v-if="activities == 'youractivity'"></restaurantYourDescription>
                </div>
                </div>  
							</div>
						</div>
            </div>
        </div>  
        </div>	
</div>
	
 </div>

</template>


<script>
import RequestsService from '../services/requestsService.js'
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
import restaurantDescriptionList from './restaurantDescriptionList'
import restaurantYourDescription from './restaurantYourDescription'
import restaurantUsersDescriptionList from './restaurantUsersDescriptionList'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyALL9qaik_cgTPdFa2Ps9UkXwLtQVGEHT8'
      // libraries: 'places', //// If you need to use place input
    }
  });


export default {
  components: {
    restaurantDescriptionList,
    restaurantYourDescription,
    restaurantUsersDescriptionList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      restaurant : '',
      center: '',
        markers: [{
          position: ''
        }],
     activities : 'activities'   
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
      changeActivity(activity) {
        this.activities = activity
      }
     }
  
}
</script>