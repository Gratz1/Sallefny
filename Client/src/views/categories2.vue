<template>
    <div class="categories2 animated bounceInRight" >


<br><br><br><br><br>
<router-link :to="{name: 'categories'}">
<mdb-icon icon="arrow-left" style="float: left;margin-left: 7%; font-size: 30px;margin-top: 6px;color:black" />
</router-link>
<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br>





<h1>Toggle MenU </h1>





<br><br><br><br><br><br>

<div class="container">
      <section class="my-5">
        <h4
          class="h2-responsive font-weight-bold my-5 text-left"
          style="color: "
        >
          Featured By SALLEFNY
        </h4>
      </section>
    </div>
    <br />


    <!------------------------------  Featured By SALLEFNY Section -------------------------->

   
    <div class="container"
     v-mdb-animate-on-scroll="{
            animation: 'fadeIn',
          }">
      <div class="row">
        <div class="col-lg-4 col-md-12 col-xs-12" v-for="item in featureditems" :key="item.id">
          <mdb-card>
            <router-link :to="{ name: 'productpage' }">
              <div style="height: 250px; width: 100%" class="categoriesimage">
                <img
                  style="width: 100%; height: 100%"
                  :src="item.srcimage"
                  alt=""
                />
              </div>
            </router-link>
            <mdb-card-body class="text-center" cascade>
              <h4>{{item.categoryname}}</h4>
              <mdb-card-title>
                <strong>{{item.categorytype}}</strong>
              </mdb-card-title>
              <ul class="rating">
                <li><mdb-icon icon="star" /></li>
                <li><mdb-icon icon="star" /></li>
                <li><mdb-icon icon="star" /></li>
                <li><mdb-icon icon="star" /></li>
                <li><mdb-icon far icon="star" /></li>
              </ul>
              <mdb-card-text></mdb-card-text>
              <mdb-card-footer color="white" textColor="black" class="px-1">
                <span class="float-left productprice"> {{item.price}} $</span>
                <span class="float-right">
               <div class="text-center">
                  <v-btn
      class="ma-2"
      
      large
      
      style="color:red;background-color:white;border-radius:15px"
    >
      <v-icon>mdi-heart</v-icon>
    </v-btn>
                 
                  </div>
                </span>
              </mdb-card-footer>
            </mdb-card-body>
          </mdb-card>
        </div>

      </div>
    </div>

    <br /><br />












    </div>
</template>
<script>

import {
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbIcon,
  mdbAnimateOnScroll
  
} from "mdbvue";

export default {
    name:"categories2",
    
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon,
    
},
  directives: {
    mdbAnimateOnScroll,
  },
data(){
return{
 featureditems: [
          {
            id:"1",
            categoryname:"Camera",
            categorytype:"NIKON Flash 200X",
            price:"20",
            srcimage: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            id:"2",
            categoryname:"Camera",
            categorytype:"NIKON Flash 200X",
            price:"20",
            srcimage: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
           {
            id:"3",
            categoryname:"Camera",
            categorytype:"NIKON Flash 200X",
            price:"20",
            srcimage: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
        
        ],

}
},
methods: 

{

     
},

props: ['id','type1','type2','type3','type4','type5','type6','type7','type8']
};
</script>
<style scoped lang="scss">







.card {
  border-radius: 10%;
  margin-bottom: 30px;

  box-shadow: 5px 5px 5px 4px rgb(180, 180, 180);

  transition: all 0.36s ease-in-out;
}
.card:hover {
  box-shadow: 2px 2px 2px 2px rgb(223, 223, 223);
}
.view {
  border-radius: 10% 10% 0% 0%;
}
ul {
  margin-right: 10%;
}
ul li {
  display: inline;
  padding-left: 5px;
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

</style>