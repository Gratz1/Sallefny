<template>
  <div class="categories ">
    <!---------------------------------  Ahmed El Sayed Code-------------------------------->

    <!---------------------------------  Navbar Section -------------------------------->

    <br /><br /><br /><br /><br /><br>

    <!---------------------------------  Categories Circle Section ---------------------------->

<div class="container animated zoomIn">
            <h2 style="font-weight: bold;float:left;margin-left:4%">Select Category :</h2>

<br><br>
    <div class="container">
      
      <br /><br />
      <div class="row">
        <div
          class="col-md-3 col-sm-6 col-xs-12"
          v-for="category in categories"
          :key="category.id"
        >
          <router-link
            :to="{
              name: 'categories2',
              params: {
                id: category.categoryname,
                type1: category.type1,
                type2: category.type2,
                type3: category.type3,
                type4: category.type4,
                type5: category.type5,
                type6: category.type6,
                type7: category.type7,
                type8: category.type8,
              },
            }"
          >
            <mdb-btn :color="category.color" class="categoriesFirstSelect">{{
              category.categoryname
            }}</mdb-btn></router-link
          >
        </div>
      </div>
    </div>
    
</div>

   <br /><br /><br />
  <hr class="my-5" />
     
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

    <div class="container " v-mdb-animate-on-scroll="{
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

    <!---------------------------------  Footer Section -------------------------------->
  </div>
</template>

<script>
import {
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbIcon,
  mdbBtn,
  mdbAnimateOnScroll
} from "mdbvue";
export default {
  name: "categories",
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbIcon,
    mdbBtn,
  },
  directives: {
    mdbAnimateOnScroll,
  },
  data() {
    return {
      temp: "",
      categories: [
        {
          id: 1,
          categoryname: "Gaming",
          color: "amber",
          type1: "Action",
          type2: "Adventure",
          type3: "Simulation",
          type4: " Sports",
          type5: "Puzzle",
          type6: "Strategy",
          type7: "Role-playing",
          type8: "Mix",
        },

        {
          id: 2,
          categoryname: "Books",
          color: "cyan",
          type1: "Fantasy",
          type2: "Mystery",
          type3: "Thriller",
          type4: "Romance",
          type5: "Westerns",
          type6: "Dystopian",
          type7: "Contemporary ",
          type8: "Sci-Fi",
        },

        {
          id: 3,
          categoryname: "Cameras",
          color: "info",
          type1: "Compact",
          type2: "DSLR",
          type3: "Mirrorless",
          type4: "Action",
          type5: "Medium Format",
          type6: "Traditional",
          type7: " Film",
          type8: "Nikon",
        },

        {
          id: 4,
          categoryname: "Mobiles",
          color: "danger",
          type1: "",
          type2: "",
          type3: "",
          type4: "",
          type5: "",
          type6: "",
          type7: " ",
          type8: "",
        },

        {
          id: 5,
          categoryname: "Sports",
          color: "primary",
          type1: "",
          type2: "",
          type3: "",
          type4: "",
          type5: "",
          type6: "",
          type7: " ",
          type8: "",
        },

        {
          id: 6,
          categoryname: "Camping",
          color: "indigo",
          type1: "",
          type2: "",
          type3: "",
          type4: "",
          type5: "",
          type6: "",
          type7: " ",
          type8: "",
        },

        {
          id: 7,
          categoryname: "Veichels",
          color: "deep-orange",
          type1: "",
          type2: "",
          type3: "",
          type4: "",
          type5: "",
          type6: "",
          type7: " ",
          type8: "",
        },

        {
          id: 8,
          categoryname: "Toys",
          color: "unique",
          type1: "",
          type2: "",
          type3: "",
          type4: "",
          type5: "",
          type6: "",
          type7: " ",
          type8: "",
        },
      ],
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
    };
  },
};
</script>
<style scoped>
.categoriesFirstSelect {
  width: 170px;
  height: 86px;
  border-radius: 12px;
  font-size: 22px;
  text-transform: capitalize;
  margin-bottom: 20px;
}

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

.menu {
  transform: translate(-50%, -50%);
  height: 120px;
  filter: url("#goo");
}
.item.open-menu {
  z-index: 1;
  transition: transform 300ms ease-out;
  transition-delay: 300ms;
}
.opened .item:nth-child(2) {
  transform: translateX(180px);
}
.opened .item:nth-child(3) {
  transform: translateX(100px) translateY(160px);
}
.opened .item:nth-child(4) {
  transform: translateX(-100px) translateY(160px);
}
.opened .item:nth-child(5) {
  transform: translateX(-180px);
}
.opened .item:nth-child(6) {
  transform: translateX(-100px) translateY(-160px);
}
.opened .item:nth-child(7) {
  transform: translateX(100px) translateY(-160px);
}

.opened .item.open-menu {
  transform: scale(0);
}
.item:nth-child(2) {
  transition-delay: 0;
}
.item:nth-child(3) {
  transition-delay: 50ms;
}
.item:nth-child(4) {
  transition-delay: 100ms;
}
.item:nth-child(5) {
  transition-delay: 150ms;
}
.item:nth-child(6) {
  transition-delay: 200ms;
}
.item:nth-child(7) {
  transition-delay: 250ms;
}
</style>
