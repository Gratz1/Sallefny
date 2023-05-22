<template>
<div class="forgetpassword">
<navbar />
<br><br><br><br><br>
<br>
<div class="container">
    <form v-on:submit.prevent="resetPassword">
    <div class="resetpassword">
        <h3><strong style="color:#3f51b5">
          Forget Password <br><br><mdb-icon icon="lock" style="font-size:40px;color:grey" /></strong></h3>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon">
        <mdb-icon icon="envelope" />
      </span>
    </div>
    
    <input required type="email" class="form-control" placeholder="E-mail" v-model="email" aria-label="Email" aria-describedby="basic-addon">
  </div>

        <div class="resetbuttons">
                   <router-link :to="{name:'signin'}"> <mdb-btn rounded type="submit" color="info">Back</mdb-btn></router-link>
                    <mdb-btn type="submit" color="primary">Submit</mdb-btn>
        </div>
    </div>
    </form>
</div>



<br><br><br><br><br>

<foot />
  </div>
</template>

<script>
import axios from 'axios';

import navbar from "@/components/global/navbar.vue";
import foot from "@/components/global/foot.vue";

  import {mdbBtn,mdbIcon  } from "mdbvue";

export default {
    name:"forgetpassword",
         data: function(){
        return{
        email:"",


    };
    },
    components:{
        navbar,
        foot,
        mdbBtn,
        mdbIcon

    },
    methods: {
      resetPassword: function() {
            axios.put('http://localhost:3000/forgot-password', {username: this.email}, {

            }, { withCredentials: true })
            .then(function (response) {
              // alert(response.data);
              // console.log(response.data);
              // console.log(response);
              alert(response.data);
              
            })
            .catch(function (error) {
              // alert(error);
              // console.log(error);
            alert(error + ', ' + error.response.data);

            });
      }

    }


}
</script>

<style scoped>
.resetpassword {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: nowrap;
    background-color: #fbfbfb;
    height: 305px;
    border-radius: 13px;
    margin-left: 20%;
    box-shadow: 5px 5px 5px 8px #f0f0f0 ;
}
.input-group{
    width: 70%;
    margin-left: 15%;
}
.form-control{
    height: 45px;
}
.resetbuttons{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: nowrap;
}
</style>