<template>
<div class="productpage">

<br><br><br>
<div class="container">
<v-app>
<v-card>
  <v-carousel 
       style="border-radius:15px;margin-top:9px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

</v-card>
</v-app>
</div>

<div class="container" style="background-color:white;border-radius:10px;height:auto;box-shadow: 6px 6px 6px 6px #E8E8E8">
    <div class="row">
        <div class="col-xs-12">
          <div></div>
            <div class="" style="text-align:left;margin-left:20px;margin-top:30px">
                <h3   ><strong >  <span  style="color:#005caf"> Name :</span> {{itemname}}</strong></h3><br><br>
                <h3> <strong style="color:#005caf"> Price :</strong> <strong  style="color:#3eef3e"> {{itemprice}} </strong>  <strong style="color:black;font-size:24px" > per   Day </strong></h3>
            </div><br><br><br>
      <h3 style="float:left;margin-left:20px"><strong style="color:#005caf">Pick Rental Date : </strong></h3>
<br><br><br>
  
<div class="wrapper">  
 
  <div class="date-picker-wrapper " >
    <div >
      
<h3 style="font-weight:bold;
  margin-left: 30px;">Start Date :  </h3>
      <input style="
  margin-left: 30px;" type="date" class="from-day"/>
     </div><br><br>
    <div style="">
<h3 style="font-weight:bold;
  margin-left: 30px;">End Date :  </h3>
      <input style="
  margin-left: 45px;" type="date" class="to-day"/>
     </div>
     
   </div>
   
 </div>
<br><br>

 <div class="date-content">
    <p class="date" ><span></span> Days</p>
   </div>
        </div>

    </div>

<br><br><br>




<br><br><br>

          

</div>











         <br><br><br><br>
         <div class="container" >
           <div class="row">
             <div class="col-sm-8">
               <div class="description"  style="text-align:left">
                 <h1> <strong> Description </strong> </h1><br>
                 <p style="line-height:2;font-size:20px;font-weight:400" >
                   {{description}}

                   </p>
               </div>
             </div>
           </div>
         </div>

 
         <br><br><br><br>
         
          <div class="container">
      <section class=" my-5 ">
        <h4 class="h2-responsive font-weight-bold my-5 text-left" style="">
          Location : 
        </h4>
      </section>
    </div>
         <div class="container">
                   <maplocation />
         </div>
         <br><br><br><br>



         <div class="container">
           <div class="row">
             <div class="col-sm-6">
               <div class="meetcustomer">
                 <img v-bind:src="customerimg" class="rounded-circle" alt="">
                  <div class="customerinfo">
                    <h2>Meet {{customername}} </h2>
                    <ul class="rating">
                    <li><mdb-icon icon="star" /></li>
                    <li><mdb-icon icon="star" /></li>
                    <li><mdb-icon icon="star" /></li>
                    <li><mdb-icon icon="star" /></li>
                    <li><mdb-icon far icon="star" /></li>
                  </ul>
                    <p>{{customernumber}}</p>
                           <mdb-btn color="deep-orange" style="color:white" ><mdb-icon icon="comments"  /> Send Message</mdb-btn>
                  </div>
               </div>
             </div>
           </div><br><br><br><br><br>
           
      <div class="">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template 
           v-slot:activator="{ on, attrs }">
        <v-btn
          color="indigo"
          dark
          v-bind="attrs"
          style="width:400px;height:60px;letter-spacing:20px;font-size:23px;border-radius:12px"
          v-on="on"
          @click="rentnow"
        >
        RENT NOW
        </v-btn>
      </template>

      <v-card style="border-radius:15px;box-shadow:10px 10px 8px grey">
        <v-card-title class="text-h5 green lighten-2" style="color:white;font-size:35px">
                    Done <mdb-icon style="margin-left:10px" icon="check" />

        
        </v-card-title>
<br><br>
        <v-card-text style="font-size:25px;color:green;text-align:left">
         Your Request has been sent
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
              Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

         </div>



<br><br>
    <hr style="width:90%;height:1px;background-color:grey; opacity:.2  " />

<br><br><br>

<div class="container">

<section class=" my-5 ">
      <h4 class="h2-responsive font-weight-bold my-5 text-left" style="color:">Most Related Items</h4></section>

</div>


<br>
 <div class="container">
      <div class="row" >
        <div class="col-lg-4 col-md-12 col-xs-12" v-for="product in products" :key="product.id">
     <mdb-card >
      <router-link :to="{name:'productpage'}">
       <div style="height: 250px;width:100%;" class="categoriesimage" >
         <img style="width:100%;height: 100%;" src="../assets/24.jpg" alt="">
       </div>
</router-link>
  <mdb-card-body class="text-center" cascade>

      <h4>{{product.categoryname}}</h4>
    <mdb-card-title>
      <strong>{{product.productname}}</strong>
    </mdb-card-title>
    <ul class="rating">
      <li><mdb-icon icon="star" /></li>
      <li><mdb-icon icon="star" /></li>
      <li><mdb-icon icon="star" /></li>
      <li><mdb-icon icon="star" /></li>
      <li><mdb-icon far icon="star" /></li>
    </ul>
    <mdb-card-text></mdb-card-text>
    <mdb-card-footer color="white" textColor="black" class="px-1" >
      <span class="float-left productprice"  >{{product.productprice}} $ </span>
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


      <br><br><br><br><br>

</div>

</template>

<script>
import axios from 'axios';
var startDate;
var endDate;
var NumOfDays;
import maplocation from "@/components/local/productpage/maplocation.vue"
import 'vue2-datepicker/index.css';
  import {
mdbCard,
mdbCardBody,
mdbCardTitle,
mdbCardText,
mdbIcon,
mdbBtn,
} from "mdbvue";

export default {
    name:"productpage",
    components: {
        maplocation,
        mdbCard,
        mdbCardBody,
        mdbCardTitle,
        mdbCardText,
        mdbIcon,
        mdbBtn,

    },
     data: () => ({
      dates: ['2021-07-08', '2021-07-09'],
      items: [
          // {
          //   src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          // },
         
          
         
        ],
        // x_ax: '',
        // y_ax: '',
        coordinates: [],
        itemname:"NIKON Flash 200EX- ll -FLASH",
        itemprice:"49$",
        customername:"Sara",
        customernumber:"0102345534",
        dialog: false,
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        customerimg:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
   
        products: [
          {
            id:1,
            categoryname:"Camera",
            productname:"NIKON FLASH 200EX",
            productprice:"49",
            imagesrc:"../assets/24.jpg"
          },
            {
            id:2,
            categoryname:"Camera",
            productname:"NIKON FLASH 200EX",
            productprice:"49",
            imagesrc:"../assets/24.jpg"
          },
            {
            id:3,
            categoryname:"Camera",
            productname:"NIKON FLASH 200EX",
            productprice:"49",
            imagesrc:"../assets/24.jpg"
          }
        ],
        temp1:' ',
        temp2:' ',
         temp3:'',
        temp4:'',
        startdate:'',
        enddate:'',
        days:''
    }),
    methods: {
      rentnow() {
        // alert(startDate);
        // alert(endDate);
        // alert(NumOfDays);
         let uri = 'http://localhost:3000/posts/rentPost'
              axios.post(uri, {postId: this.$route.params.productId, startDate: startDate, endDate: endDate, NumOfDays: NumOfDays},{ withCredentials: true }).then((res) => {
              // console.alert(res.data);
              alert('a notification was sent to ' + res.data)

              }).catch(error => {
                alert(error + ', ' + error.response.data);
              });

      },
      async setLoc() {
        // alert('enter secloc');
        // alert(this.$route.params.productId)
        let uri = 'http://localhost:3000/posts/' + this.$route.params.productId;
        await axios.get(uri, { withCredentials: true }).then((res) => {
        // alert(res.data.item_name);
              // this.customerimg = res.data.author.image.path;
              console.log(res.data.geometry.coordinates);
              this.coordinates = res.data.geometry.coordinates;
              // alert(this.coordinates[0]);
              // console.log(res.data.geometry.coordinates);
              // this.coordinate = res.data.geometry.coordinates;
              

        }).catch(error => {
          alert(error + ', ' + error.response.data);
        })
      }

    },
  
  mounted(){
    // alert(this.$route.params.productId);
    // alert("hello");
    // alert(this.$route.params.productId);
    let uri = 'http://localhost:3000/posts/' + this.$route.params.productId;
        axios.get(uri, { withCredentials: true }).then((res) => {
        // alert(res.data.item_name);
              this.itemname = res.data.item_name;
              this.itemprice = res.data.price.per_day;
              this.description = res.data.description;
              this.customername = res.data.author.first_name + " " + res.data.author.last_name;
              this.customernumber = res.data.author.phone_number;
              this.customerimg = res.data.author.image.path;
              res.data.images.forEach(image => {
                this.items.push({src: image.path});

                });
        }).catch(error => {
          alert(error + ', ' + error.response.data);
        })


let 
    datePicker = document.querySelectorAll('input')
;

datePicker.forEach(picker => {
  picker.addEventListener('change', _onDateSelect);
});

function _showHTML(days) {
  let domElement = document.querySelector('.date span'),
      dateWrapper = document.querySelector('.date')
  ;
  
  if(days <= 0 || !days) {
    domElement.innerHTML = 'Total :';
    dateWrapper.classList.remove('filled');
  } else {
    domElement.innerHTML = days;
    dateWrapper.classList.add('filled');
   }
}

function _onDateSelect() {
  let 
    dateValue = [document.querySelector('.from-day').value, document.querySelector('.to-day').value],
    date1 = new Date(dateValue[0]),
    date2 = new Date(dateValue[1]),
    timeDiff = Math.abs(date2.getTime() - date1.getTime()),
    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
  ;
  
  _showHTML(diffDays);
  startDate = date1;
  endDate = date2;
  NumOfDays = diffDays;
 
}

_showHTML(0);
    


}
}
</script>

<style scoped lang="scss">


.wrapper {
  width: 40%;
  padding-top: ms(3);
  display: inline;
  
}

.date-content {
    width: 200px; 
    font-size: 35px;
    float: right;
    position: absolute;
    left: 56%;
    font-weight: 400;
}


p {
  font-size: ms(0);
}


.filled {
  span {
    color: #50cc7f;
    font-size: ms(3);
    font-weight: 700;
   }
}

.date-picker-wrapper {
  display: inline;
  
  div {
    display: flex;
    flex: 1 auto;
  }
  
  p {
    margin-right: ms(1);
  }
  
  input {
      font-family: 'PT Sans', sans-serif;
    text-align: center;
      font-size: 1.2rem;
  display: block;
  padding: 0.5rem 1rem;
  border: 1px solid rgb(200, 200, 200);
  border-radius:12px;
  }
}
















.carousel {
    position: relative;
    width: 100%;
    margin: auto;
    border-radius: 10px;
    margin-top:.4%;
}

.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 410px;
    border-radius: 10px !important;
    box-shadow: 3px 3px 3px 3px #f7f7f7;

}
.carousel-item img {
  height: 100%;
  width: 100%;
}


 .carousel-control-prev-icon , .carousel-control-next-icon  {
    width: 33%  !important ;
    height: 14% !important;
    background-color:#4e4e4e52 !important;
    border-radius: 57% !important;
}




 .carousel-inner img {
    width: 100%;
    height: 100%;
  }

  #date-a{
    padding: 100px;
  }

.card {
  border-radius: 10%;
  margin-bottom: 30px;

  box-shadow: 5px 5px 5px 4px  rgb(180, 180, 180);

  transition: all .36s ease-in-out;
}
.card:hover{

  box-shadow: 2px 2px 2px  2px  rgb(223, 223, 223);
}
.view {
      border-radius: 10% 10% 0% 0%;

}
ul {
  margin-right: 10%;
}
ul li{
  display: inline;
  padding-left: 5px;
}
a{
  color: white;
}
.card a {
  color: black;

}
.rating{
  color: gold;
}

.card .shareicon{
  color:#9696ad;
  font-size: 23px;
}
.card .hearticon{
  color:#fa3e48;
  font-size: 23px;
}
.categoriesimage img {
  border-radius: 10% 10% 0% 0%;
}
.card-title{
  height: 38px;
}
.productprice{
  font-size: 23px;
  color: rgb(104, 209, 104);
}


.meetcustomer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 420px;
  overflow: hidden;
  box-sizing: border-box;
}
.customerinfo{
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  justify-content: space-around;
  width: 350px;
  overflow: hidden;
}

.customerinfo button {
  border-radius: 10px;
  margin: auto;
  font-size: 15px;
}
.meetcustomer img {
  width: 120px;
  height: 120px;
}

.meetcustomer h2{
font-size: 30px;
font-weight: bold;
color: orange;
}
.meetcustomer  p{
  font-size: 20px;
  font-weight: 500;
}
.rentnow button {
     width: 391px;
    word-spacing: -1px;
    letter-spacing: 15px;
    font-size: 30px;
    height: 62px;
    border-radius: 20px;
    background-color: #3f51b5 !important;
}

</style>