<template>
  <div class="filterproduct">
      <br><br><br><br><br>
      <div class="container">
    <div class="row">
     
      <div class="col-3" id="filter" >
      <!-- section filter-->
       <br><br>

       <div class="container" style="border-radius:20px;;height:30%">
      
               
 <h6 class="font-weight-bold mb-3">category</h6>
      <label for=""> <input type="radio" v-model="category" value="New"/> New</label><br>
        <label for=""> <input type="radio" v-model="category" value="Used" />Used</label><br>
     <label for=""> <input type="radio" v-model="category" value="Renew" /> Renew</label> <br>
       
              
                

  

        <br><br>

        <h6 class="font-weight-bold mb-3">PriceCategory</h6>
        <label style=""><input type="radio" v-model="categoryprice" value="UP $500" /> UP $500</label><br>
        <label style=""><input type="radio" v-model="categoryprice" value="Equal $500" /> Equal $500</label><br>
        <label style=""><input type="radio" v-model="categoryprice" value="Low $500" /> Low $500</label>
        <br><br>

        <h6 class="font-weight-bold mb-3">LocationCategory</h6>
        <label><input type="radio" v-model="location" value="egypt" /> IN Egypt</label><br>
        <label style=";"><input type="radio" v-model="location" value="OUt Egypt" /> OUt Egypt</label><br>
        <br><br>

        <h6 class="font-weight-bold mb-3">Avg. Customer Review</h6>

        <label for="customer-rating-4" class="A z-depth-0 py-0">
        <input type="radio" value="4" v-model="rating"/>&nbsp;
          <li><mdb-icon icon="star" /></li>
          <li><mdb-icon far icon="star" /></li>
          <li><mdb-icon far icon="star" /></li>
          <li><mdb-icon far icon="star" /></li>
          <li><mdb-icon far icon="star" /></li>
        </label><br>

        <label for="customer-rating-3" class="A z-depth-0 py-0">
        <input type="radio" value="3" v-model="rating"/> &nbsp;
          <li><mdb-icon icon="star" /></li>
          <li><mdb-icon icon="star" /></li>
          <li><mdb-icon far icon="star" /></li>
          <li><mdb-icon far icon="star" /></li>
          <li><mdb-icon far icon="star" /></li> 
        </label><br>

        <label for="customer-rating-2" class="A z-depth-0 py-0">
        <input type="radio" value="2" v-model="rating"/>&nbsp;
          <li><mdb-icon icon="star" /></li>
          <li><mdb-icon icon="star" /></li>
          <li><mdb-icon icon="star" /></li>
          <li><mdb-icon far icon="star" /></li>
          <li><mdb-icon far icon="star" /></li>
        </label><br>

        <label for="customer-rating-1" class="A z-depth-0 py-0">
        <input type="radio" value="1" v-model="rating"/>&nbsp;
          <li><mdb-icon icon="star" /></li>
          <li><mdb-icon icon="star" /></li>
          <li><mdb-icon icon="star" /></li>
          <li><mdb-icon icon="star" /></li>
          <li><mdb-icon far icon="star" /></li>
        </label>
</div>
       </div>

      <!-- section products -->

      <div class="col-9">
        <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-xs-12" v-for="product in filterProducts" :key="product.id">
            <mdb-card>
              <router-link :to="{ name: 'productpage', params: {productId: product.id } }">
                <div style="height: 210px;width:100%;" class="categoriesimage">
                  <img style="width:100%;height: 100%;" :src="product.image" alt=""/>
                </div>
              </router-link>
              <mdb-card-body class="text-center" cascade>
                <h4>{{ product.name }}</h4>
                  <mdb-card-title> <strong>{{ product.description }}</strong> </mdb-card-title>
                  <mdb-card-text></mdb-card-text>
                  <br>
                  <mdb-card-footer color="white" textColor="black" class="px-1">
                    <span class="float-left productprice">${{ product.price }}</span>
                    <span class="float-right">
                      <div class="text-center">
                  <v-btn @click="addFav(product.id)"
      class="ma-2"
      
      large
      
      style="color:red;background-color:white;border-radius:15px"
    >
      <v-icon>mdi-heart</v-icon>
    </v-btn>
                 
                  </div> </span>
                  </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import { mdbCard, mdbCardBody, mdbCardTitle, mdbIcon } from "mdbvue";
export default {
  name: "filter",
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbIcon,
  },
  data() {
    return {
      category: "",
      categoryprice:"",
      location: "",
      image: "",
      price: "",
      color:'',
      rating:'',
      amount:1,
      money:50,
      index: 0,
     selectedIndex: null,
     
      products: [
       
        //         {
        //   id: 12,
        //   name: "camera13",
        //   price: 800,
        //   category: "Used",
        //   categoryprice:"500",
        //   image:"https://images.unsplash.com/photo-1500468415400-191607326b6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        //   location: "IN Egypt",
        //   description: "NIKON Flash 1200EX",
        //   rating:'2',
        // },
      ],
    };
  },
  methods: {
    addFav(id) {
      // alert(id);
      
      let uri = 'http://localhost:3000/posts/addFav'
              axios.post(uri, {postId: id}, { withCredentials: true }).then((res) => {
              console.log(res.data);
              alert(res.data);
                    
              }).catch(error => {
                alert(error + ', ' + error.response.data);
              })
    }
  },
   mounted() {
     let uri = 'http://localhost:3000/posts/filtercat'

     if (this.$route.params.querySearch) {
      //  alert("in filter, " + this.$route.params.querySearch )
      
         axios.post('http://localhost:3000/search', {query: this.$route.params.querySearch} ,{ withCredentials: true }).then((res) => {
         this.products = [];
         res.data.forEach(product => {

         this.products.push({id:product._id,seen:true, name: product.item_name,category:product.category, case: product.case   , price: product.price.per_month || 10, location: product.location, description: product.description, rating: product.rating || 0,image:product.images[0].path});

         });
             
       }).catch(error => {
         alert(error + ', ' + error.response.data);
       })


     } else {
      //  alert("enter else");
       axios.post(uri,  { withCredentials: true }).then((res) => {
         var catprice;
         this.products = [];
         res.data.forEach(product => {
           if (product.price.per_month > 500 )  catprice = "UP $500"
           if (product.price.per_month < 500 )  catprice = "Low $500"
           if (product.price.per_month == 500 )  catprice = "Equal $500"
         this.products.push({id:product._id,seen:true, name: product.item_name, categoryprice: catprice,case: product.case,price: product.price.per_month || 10, location: product.location, description: product.description, rating: product.rating || 0,image:product.images[0].path});

         });
             
       }).catch(error => {
         alert(error + ', ' + error.response.data);
       })
     }
  },

  computed: {
    filterProducts: function() {
          console.log(this.products);
          return this.products.filter((item)=>{
            
            return (this.category.length === 0 || this.category.includes(item.case))&
             (this.location.length === 0 || this.location.includes(item.location))&
             (this.rating.length === 0 || this.rating.includes(item.rating))&
             (this.categoryprice.length === 0 || this.categoryprice.includes(item.categoryprice))
          })
          
        },
    totalmoney: function () {
      return this.amount * this.money
    },
  },
  
  
   
  
};
</script>

<style scoped>
#filter {
  margin-top: 4%;
  right:3%;
}
.card {
  border-radius: 25px;
  margin-top: 15%;
  box-shadow: 5px 5px 5px 4px rgb(180, 180, 180);
  transition: all 0.36s ease-in-out;
}
.card:hover {
  box-shadow: 2px 2px 2px 2px rgb(223, 223, 223);
}
.view {
  border-radius: 10% 10% 0% 0%;
}
a {
  color: white;
}
.card a {
  color: black;
}
.rating {
  color: gold;
}
.card .shareicon {
  color: #9696ad;
  font-size: 23px;
}
.card .hearticon {
  color: #fa3e48;
  font-size: 23px;
}
.categoriesimage img {
  border-radius: 10% 10% 0% 0%;
}
.card-title {
  height: 38px;
}
.productprice {
  font-size: 23px;
  color: rgb(104, 209, 104);
}
.A li{
  display:inline;
  color:gold;
  margin-top: 15%;
}
 input[type="radio"] {
  appearance: none;
  background-color: #dddddd;
  height: 18px;
  width: 18px;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  float:left;
  margin-top: -1px;
}
 
 input[type="radio"]:checked {
  background-color: DeepSkyBlue;
}
</style>
