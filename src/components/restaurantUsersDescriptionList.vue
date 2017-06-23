<template>
    <div>
        <div v-for="message in messageList"  class="media activity-item">
			<div class="media-body">
			    <p class="activity-title">{{message.title}} 
				 <small class="text-muted">- {{message.name}}</small>
			   </p>
				 <p>
				 {{message.description}}
				 </p>
			   <small class="text-muted">{{message.date}} </small>
			</div>
		</div>
	</div>
    </div>   
</template>


<script>
import RequestsService from '../services/requestsService.js'
export default {  
  data () {
    return {
      messageList : []
    }
  }, 
   beforeCreate () {
 		 RequestsService
              .getRestaurantLikes(this.$route.params.restaurantId) 
                .then(respose =>{
                  this.messageList = respose
              })
  			 } 
	}

</script>