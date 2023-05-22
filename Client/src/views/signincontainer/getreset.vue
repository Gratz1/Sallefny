<template>
<div class="getreset">
<navbar />
<br><br><br><br><br>
<br>
<!-- <h1>console.log(this.$route.query.test) </h1> -->
<div class="container">
    <form v-on:submit.prevent="resetPassword">
    <div class="resetpassword">
        <h3>
          
          <mdb-icon icon="lock" style="color: #c5c5c5;font-size: 31px;margin-right: 1%;margin-top: 1%;"  /><strong style="color:#3f51b5">   Reset password <br><br></strong>
        <img src="../../assets/310.gif" alt="" style="height:50px;width:50px;">
        </h3>

  <div class="input-group">

    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon">
        <mdb-icon icon="lock" />
      </span>
            <input required type="password" class="form-control" placeholder="password" v-model="password" aria-label="password" aria-describedby="basic-addon"> <br>
  </div>

  </div>
   <div class="input-group">

    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon">
  <mdb-icon icon="lock" />
      </span>
        <input required type="password" class="form-control" placeholder="confirm password" v-model="confirm" aria-label="password" aria-describedby="basic-addon">
  </div>

  </div>

  

        <div class="resetbuttons">
                   <router-link :to="{name:'forgetpassword'}"> <mdb-btn rounded type="submit" color="info">Back</mdb-btn></router-link>
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
    name:"getreset",
         data: function(){
        return{
        password:"",
        confirm:"",


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
            axios.put('http://localhost:3000/reset/' + this.$route.query.token, {password: this.password, confirm: this.confirm}, {

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
    width: 58%;
    display: flex;
    padding-top: 24px;
    padding-bottom: 29px;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: nowrap;
    background-color: #fbfbfb;
    height: 340px;
    border-radius: 13px;
    margin-left: 20%;
    box-shadow: 5px 5px 5px 8px #f0f0f0 ;
}
.input-group{
    width: 70%;
    margin-left: 15%;
}
.input-group-prepend[data-v-2ab35b7a] {
    width: 77%;
    margin-bottom: 5%;
    margin-left: 13%;
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