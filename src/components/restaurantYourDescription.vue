<template>
    <div>
        <div class="media activity-item">
         <div class="form-group">
		  <label class="col-md-2 control-label">Name</label>
		   <div class="col-md-10">
			  <input v-model="description.name" type="text" class="form-control" placeholder="your name">
			</div>
		</div>
        <div class="form-group">
		  <label class="col-md-2 control-label">Title</label>
		   <div class="col-md-10">
			  <input v-model="description.title" type="text" class="form-control" placeholder="Title">
			</div>
		</div>
        <div class="form-group">
			<label class="col-md-2 control-label">Are you Like ?</label>
				<div class="col-md-10">
					<label class="radio radio-inline">
						<input  v-model="description.like" type="radio" name="radioinline" value="1">Yes, I Liked
					</label>
					<label class="radio radio-inline">
						<input v-model="description.like" type="radio" name="radioinline" value="0">No, I Disliked
					</label>
				</div>
		    </div>
        <div class="form-group">
		   <label class="col-md-2 control-label">Description</label>
			<div class="col-md-10">
				<textarea v-model="description.message" class="form-control" placeholder="Why ?" rows="4"></textarea>
           </div>
	   </div>
       <button  v-on:click="submit(description)" type="button" class="btn btn-primary"> submit </button>
     </div>
	</div>   
</template>


<script>

export default {
  data () {
    return {
      description: {
          name : '',
          like : '',
          message : '',
          title : '' ,
          venueId : 'venueId'
      }
    }
  }, 
   methods: {
      submit(description) {
        console.log(description);
      }
     }
  
}
</script>