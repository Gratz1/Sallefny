<template>
<div class="favourite">
 
    <div class="container" style="color:white">

    <div  style="border-radius:20px" class=" card mb-4 d-flex  text-light flex-lg-row flex-column " v-for="product in products" :key="product.id">
      
     
      <div  v-if="product.seen" class="view overlay" style="border-radius: 20px 0px 0px 20px;">
        <img class="card-img-top rounded-0 d-block w-100 h-100" :src="product.image" alt="Card image cap">
        <router-link :to="{name:'productpage', params: {productId: product.id }}">
          <div class="mask rgba-white-slight"></div>
        </router-link>
      </div>

      <div v-if="product.seen" class="card-body" style="background-color:#3949AB;border-radius: 0px 20px 20px 0px;">
        <div class="collapse-content">
          <h2 style="text-align:start">{{product.name}}</h2>
          <ul class="list-unstyled list-inline rating">
            <li class="list-inline-item mr-0"><i class="fa fa-star"> </i></li>
            <li class="list-inline-item mr-0"><i class="fa fa-star"></i></li>
            <li class="list-inline-item mr-0"><i class="fa fa-star"></i></li>
            <li class="list-inline-item mr-0"><i class="fa fa-star"></i></li>
            <li class="list-inline-item"><i class="fa fa-star"></i></li>
          </ul>
          <p class="card-text  white-text" id="collapseContent">Camera, in photography, device for recording an image of an object on a light-sensitive surface; it is essentially a light-tight box with an aperture to admit light focused onto a sensitized film or plate</p>
             <i style="font-size:23px"  v-on:click="addFav(product.id)"  class="fa fa-heart  white-text text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it"></i>
        </div>
      </div>
    </div>  
 </div>
 </div>
</template>

<script>
import axios from 'axios';

export default {
  name:"cart",
  data(){
    return{
      name:'',
      image:'',
      products: [
          // {id:1,seen:true, name: "CAMERA FLASH.1", image:'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' },
          // {id:2,seen:true, name: "CAMERA FLASH.2", image:'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'},
          // {id:3,seen:true, name: "CAMERA FLASH.3", image:'https://images.unsplash.com/photo-1494168684379-764b46e4be02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=729&q=80'},
          // {id:4,seen:true, name: "CAMERA FLASH.3", image:'https://images.unsplash.com/photo-1494168684379-764b46e4be02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=729&q=80'},
          ],
    }
  },
  methods: {
    addFav(id) {
      alert(id);
      
      let uri = 'http://localhost:3000/posts/addFav'
              axios.post(uri, {postId: id}, { withCredentials: true }).then((res) => {
              console.log(res.data);
              alert(res.data);
                    this.getFav();

              }).catch(error => {
                alert(error + ', ' + error.response.data);
              });
    },
    getFav() {
       this.products = []
    // alert("hello");
    // this.products.push({id:4,seen:true, name: "testttttttt", image:'https://images.unsplash.com/photo-1494168684379-764b46e4be02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=729&q=80'});
    let uri = 'http://localhost:3000/posts/getFavs'
              axios.get(uri,  { withCredentials: true }).then((res) => {
                res.data.forEach(product => {
                this.products.push({id:product._id,seen:true, name: product.item_name, image:product.images[0].path});

                });
                    
              }).catch(err => {
                console.log(err.message);
              })
    }
  },
  mounted() {
    this.getFav();

  }
  
 
};
</script>
<style scoped>
.carousel-card-image{
  flex:2;
}
.carousel-right{
  flex:1;
}
.collapse-content .fa.fa-heart {
  color: #f52011 !important;
  font-size: 20px;
}
.collapse-content .fa.fa-share-alt {
  font-size: 20px;
}
.collapse-content .fa.fa-share-alt:hover {
  color: #0d47a1 !important;
  font-size: 20px;
}
.rating{
  text-align: left;
}
p{
  text-align: left;
}
.fa {
  color: #f7aa00;
}
li{
  padding: 2%;
}
</style>