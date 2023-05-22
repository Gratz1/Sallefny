<template>
  <div class="profile_page">
   <br><br><br><br><br>
    <!-- profile -->
    <div class="profile">
      <div class="container-fluid " >
      <div class="row"> 
        <div class="col-lg-4  shadow bg-white person" style="height:auto" >
<br>
  
<div class="profile-pic-div" style="margin-left:50%;margin-top:20%;width:200px;height:200px">
  <img  style="" :src='clientimg' id="photo">
  <input type="file" id="file">
  <label for="file" id="uploadBtn" >Choose Photo</label><br>

       </div>
           <p style="font-size:20px;font-weight:bold"><strong>{{clientname}}</strong></p>
          <span><b>{{clientnumber}}</b></span>

 <br><br><br>




          
          <div class="row justify-content-center">

            <!--box1-->
            <button @click="component='favourite'" style="color:#007bff"  >
            <div class="icon-row-item glide__slide--active" style="width: 150px; margin-left: 10px;">
              <div class="card mb-3 text-center" id="box">
                <div class="card-body">
                <i class="far fa-heart" style="" id="icon"></i>
                <br><br>
                <p class="card-text  mb-0" style="color:black; font-size:18px">Favourites</p> 
                </div>
              </div>
              
            </div>
</button>
            <!--box2-->
            <button @click="component='rentals'" style="color:#007bff">
            <div class="icon-row-item glide__slide--active" style="width: 150px; margin-left: 20px;">
          
              <div class="card mb-4 text-center" id="box">
                <div class="card-body">
                <i class="fas fa-briefcase" id="icon"></i>
                <br><br>
                <p class="card-text  mb-0" style="color:black; font-size:18px">Rentals</p> 
                </div>
              </div>
    
            </div>
</button>
            <!--box3-->
            <button @click="component='account'" style="color:#007bff"> 
                      <div class="icon-row-item glide__slide--active" style="width: 150px; margin-left: 10px;">
              
                             <div class="card mb-4 text-center" id="box" >
                <div class="card-body" >
                  
                <i class="fas fa-user" style="" id="icon"></i>
                <br><br>
                <p class="card-text  mb-0" style="color:black; font-size:18px">Account</p> 
                </div>
              </div>
             
 
            </div>
 </button>
            <!--box4-->
         
             <!--box5-->
            <!-- <div class="icon-row-item glide__slide--active" style="width: 150px; margin-left: 10px;">
              <router-link :to="{name:''}"> 
              <div class="card mb-4 text-center" id="box">
                <div class="card-body">
                          <v-badge
                              :content="messages"
                              :value="messages"
                              color="green"
                              overlap
                            >
                     
                <i class="far fa-bell" id="icon"></i>
                <br><br>
                <p class="card-text  mb-0" style="color:black; font-size:18px">Notifications</p> 
                            </v-badge>
                </div>
              </div>
              </router-link>
            </div> -->
                        <!--box5-->
            <div class="icon-row-item glide__slide--active" style="width: 150px; margin-left: 10px;">
              <router-link :to="{name:'notifications'}"> 
              <div class="card mb-4 text-center" id="box">
                <div class="card-body">
                <v-badge :content="messages" :value="messages" color="red" overlap v-model='messages'>
                  <i class="far fa-bell" id="icon"></i>
                </v-badge>
                <br><br>
                <p class="card-text  mb-0" style="color:black; font-size:18px">Notifications</p> 
                </div>
              </div>
              </router-link>
            </div>

            <!--box6-->
            <div class="icon-row-item glide__slide--active" style="width: 150px; margin-left: 20px;">
              <router-link :to="{name:''}"> 
              <div class="card mb-4 text-center" id="box">
                <div class="card-body" >
                <i class="fas fa-comment" id="icon"></i>
                <br><br>
                <p class="card-text  mb-0" style="color:black; font-size:18px">Messages</p> 
                </div>
              </div>
              </router-link>
            </div>

            <!--box7-->
            <div class="icon-row-item glide__slide--active" style="width: 150px; margin-left: 10px;">
              <router-link :to="{name:''}"> 
              <div class="card mb-4 text-center" id="box">
                <div class="card-body">
                <i class="fas fa-globe" id="icon"></i>
                <br><br>
                <p class="card-text mb-0" style="color:black; font-size:18px">Languages</p> 
                </div>
              </div>
              </router-link>
            </div>

            <!--box8-->
            <div class="icon-row-item glide__slide--active" style="width: 150px; margin-left: 20px;">
              <router-link :to="{name:''}" @click.native="logout"> 
              <div class="card mb-4 text-center" id="box">
                <div class="card-body">
                <i class="fas fa-power-off" id="icon"></i>
                <br><br>
                <p class="card-text  mb-0" style="color:black; font-size:18px">Sign Out</p> 
                </div>
              </div>
              </router-link>
            </div>
          </div>
        </div>



        <!--section products-->
          <div class="col-lg-8 part">
                <component :is="component"> </component>
          </div>
        </div>
      </div>
    </div>
    <br><br><br><br><br><br>
    </div>
    <!-- End profile -->

    
</template>

<script>
import axios from 'axios';

import account from "@/components/local/profilepage/account.vue";
import rentals from "@/components/local/profilepage/rentals.vue";
import favourite from "@/components/local/profilepage/favourite.vue";
export default {
 components:{
   account,
   rentals,
   favourite
 },
 data(){
   return{
      messages: 4,
      show: false,
     component:"favourite",
     clientname:"Mahmoud El Sayed",
     clientnumber:"+20 0101231231",
     clientimg: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
   }
 },
 methods: {
   logout() {
     alert('logging out');

     let uri = 'http://localhost:3000/logout'
          axios.get(uri,  { withCredentials: true }).then((res) => {
            alert(res.data);
            this.$router.push({ name: "home"})
            localStorage.clear();
            dispatchEvent(this.$event);

          }).catch(err => {
            console.log(err.message);
          })
   }
 },
 mounted(){
  //  this.$socket.on("productRented", () => {
  //    alert("product profile");
  //  }); 
  let uri = 'http://localhost:3000/user'
          axios.get(uri,  { withCredentials: true }).then((res) => {
            if (!localStorage.user) {

              localStorage.setItem("user", JSON.stringify(res.data));
                  var user = JSON.parse(localStorage.user);
              this.clientname = user.first_name + " " + user.last_name;
              this.clientnumber = user.phone_number;
              this.clientimg = user.image.path;
              this.messages = user.notifications.length + '';
              dispatchEvent(this.$event);
              

            }
              
            console.log(res);
          }).catch(error => {
            // console.log(err.message);
              alert(error + ', ' + error.response.data);
              localStorage.clear();
              this.$router.push({ name: "signin"});


          })
  
   window.addEventListener('localstorageChanged', () => {
    // alert("triggered event");
    console.log("triggered event");
  if (localStorage.user) {
    var user = JSON.parse(localStorage.user);
    this.clientname = user.first_name + " " + user.last_name;
    this.clientnumber = user.phone_number;
    this.clientimg = user.image.path;
    this.messages = user.notifications.length + '';
  } else{
    this.clientname = "Mahmoud El Sayed",
     this.clientnumber = "+20 0101231231",
     this.clientimg ="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
  }
  });
const x = () => {
  dispatchEvent(this.$event);

}
//declearing html elements
if (localStorage.user) {
    var user = JSON.parse(localStorage.user);
    this.clientname = user.first_name + " " + user.last_name;
    // this.clientnumber = user.phone_number;
    this.clientnumber = user.phone_number;
    this.clientimg = user.image.path;
    this.messages = user.notifications.length + '';


}



const imgDiv = document.querySelector('.profile-pic-div');
// const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

//lets work for image showing functionality when we choose an image to upload

//when we choose a foto to upload

file.addEventListener('change', function(){
    //this refers to file
    
    const choosedFile = this.files[0];
    const formData = new FormData();
    let uri = 'http://localhost:3000/profile'
    


    if (choosedFile) {

        // const reader = new FileReader(); //FileReader is a predefined function of JS

        // reader.addEventListener('load', function(){
        //     img.setAttribute('src', reader.result);
        // });

        // reader.readAsDataURL(choosedFile);
        alert("entered choosedFile");
        formData.append('image', choosedFile);
         axios.put(uri, formData,  { withCredentials: true }).then((res) => {
            alert('image changed successfully');
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            // this.clientimg = res.data.image.path;
            // alert("before calling event in profile imag echange");
            x();
          }).catch(error => {
            // alert(err.message);
            // console.log(err.message);
            alert(error + ', ' + error.response.data);

          })

    }
});

 }
};
</script>

<style scoped>
.person{
  height: 1100px;
}

.profile-pic-div{
    height: 200px;
    width: 200px;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid grey;
}

#photo{
    height: 100%;
    width: 100%;
}

#file{
    display: none;
}

#uploadBtn{
    height: 40px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    line-height: 30px;
    font-family: sans-serif;
    font-size: 15px;
    cursor: pointer;
    display: none;
}





 .fas .fa:hover {
 color:white;
}


  ul {
  margin-right: 6%;
}
  ul li{
    display: inline;
    padding-left: 7px;
  }
  .rating{
    color: gold;
  }
  #icon{
    font-size:40px
  }
  #box{
    border-radius: 8%;
  }
  #box:hover{
    background-color: rgb(72, 140, 241);
    color: aliceblue;
    transition: all .4s ease-in-out;
    color: white;

  }
  .product{
    margin-left: 2%;
  }
  .mini{
    margin-top: 2%;
  }
  #rate{
    padding-left: 15%;
  }
  .demo{
    background-color: rgb(247, 247, 247);
  }
  .product{
    border-radius: 7%;
  }
  .demo{
    background-color: rgb(252, 252, 252);
    border-radius: 4%;
  }
</style>
