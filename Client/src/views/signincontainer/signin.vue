

<template>
<div class="signin">

<!-------------------------------   Ahmed El Sayed Code     --------------------------->






















<!----------------------------   Navbar Section     --------------------->





<br><br><br><br><br>

















<!--------------------------------   Signin Section     ----------------------------------->







<div class="container animated bounceIn">
<div class="row" style="padding:1px">






<!---------   Photo Container Section     ------------->
     <div class="col-md-6 col-xs-12">
         
             <img src="../../assets/1.jpg" style="width:100%;height:100%" alt="">
         
     </div>







<!---------   Inputs Container Section     ------------->

     <div class="col-md-6 col-xs-12">
         <div class="signininfo">
           <form v-on:submit.prevent="check">
             <h1 >Sign in</h1>
             <p>Welcome to SALLEFNY</p><br>
              <mdb-input  class="signininput" label="Your email"  @change="checkvalidation" type="email"  v-model="username" />
            <span v-show="wrongEmail" style="color:red">Incorrect email address</span>
            <mdb-input   class="signininput" label="Your password" type="password"   v-model="password" />
         
             <div class="custom-control custom-checkbox row " style="margin-left:15%">
                 
            <input type="checkbox" class="custom-control-input mr-auto" id="defaultChecked2" >
              <label class="custom-control-label"  for="defaultChecked2">Remember me</label>
                <router-link :to="{name:'forgetpassword'}" style="margin-left:15%;font-size:12px;font-weight:400" >Forget Password ?</router-link>
                  </div>
           
            
            <br> 
          <div class="text-center mb-3">
              <mdb-btn type="submit" name="submit" gradient="blue"  class="btn-block z-depth-1a">Sign in</mdb-btn>
            </div>
            <router-link :to="{name:'signup'}" style="font-weight:500;font-size:15px">Dont't have account ? Click here</router-link>
            <br><br>

             <div class="row" style="justify-content:center;padding-bottom:2%">
                 <div class="col-xs-12 ">
               
          <a href="http://localhost:3000/auth/facebook" target="_blank" style="border-radius:10px "  ><mdb-icon class="blue-text fa-3x " fab icon="facebook" /></a>
              
           <a href="http://localhost:3000/google" ><mdb-icon style="border-radius:10px"  fab icon="google-plus" class="red-text  fa-3x "/></a> 
           
            </div>
            </div>
            </form>
            <!--
                   <button v-on:click="getUser"><mdb-icon style="border-radius:5px"   class="blue-text  fa-3x"/></button>  -->
              
          
         </div>
     </div>
</div>
</div>





<br><br><br><br><br>











<!--------------------------------   Footer Section     ----------------------------------->

  


  
  </div>
</template>

<script>
import axios from 'axios';
import  {  mdbInput,mdbIcon, mdbBtn} from "mdbvue";


export default {
    name:"signin",
     data: function(){
        return{
        username:"",
        password:null,
        wrongEmail:false,
        emailRe : /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    };
    },

    components:{
      mdbInput,
      mdbBtn,
      mdbIcon,
        
    },  
     methods: {
      checkvalidation : function(){
     
        if(this.emailRe.test(this.username)){
          this.wrongEmail = false;
          
        }
        else{
          this.wrongEmail = true;
        }
      },
          check() {
            
          axios.post('http://localhost:3000/login', {
              username: this.username,
              password: this.password
            }, { withCredentials: true })
            .then((res) => {
              alert('welcome' + ', '+ res.data.username);
              // var user = res.data;
              // console.log(user);
              // localStorage.setItem('user', users);
              
              // // alert(localStorage.user);
              // alert(localStorage.getItem('user')[0].username);
              // console.log(localStorage.user);

              localStorage.setItem("user", JSON.stringify(res.data));
              // var user = JSON.parse(localStorage.user);
              // alert(user.username);
              // console.log(user);
              // localStorage.clear();
              // if (localStorage.user) {
              //   alert("theere is a user");
              // }

              // window.dispatchEvent(new CustomEvent('localstorage-changed', {
              //     detail: {
              //       storage: JSON.parse(localStorage.user)
              //     }
              //   }));
              // dispatchEvent(event);
              
              dispatchEvent(this.$event);
              this.$router.push({ name: "profile"});
            let uri = 'http://localhost:3000/userPopulate'
            axios.get(uri,  { withCredentials: true }).then((res) => {
              localStorage.setItem("user", JSON.stringify(res.data));
              console.log(res.data);
            }).catch(err => {
              console.log(err.message);
              alert(err.message);
              localStorage.clear();
            })

              
            })
            .catch( (error) => {
              alert(error + ', ' + error.response.data);
              console.log(error);
              console.log(error.response.data);
            });
          
        },
        getUser() {
          alert('you clicked login Facebook');
          axios.get(/*'http://localhost:3000/auth/facebook'*/"https://salefnyapiv4.herokuapp.com/user",  { withCredentials: true })
            .then( (response) => {
              console.log(response.data)
              alert(response.data);
              // if (response.data.user){
              //   localStorage.user = response.data.user;

                
              // }
            })
            .catch(function (error) {
              alert(error + ', ' + error.response.data);

              console.log(error);
            });

        }
  
}

}
</script>

<style scoped>
.container {
    background-color:white;
    height:auto;
    width:71%;
    overflow:hidden;
    box-shadow:7px 7px 10px grey;
    border-radius:20px
}
.btn.blue-gradient{
    width: 67%;
    margin-left:16%;
    border-radius: 10px;
}
h1{
    color: #3f51b5;
    font-weight: 550;
    margin-top: 5%;
}
.blue-text {
    color: #2196f3 !important;
    margin-left: 40px;
}
.red-text {
    color: red !important;
    margin-left: 40px;
}
p{
    opacity: .7;
    margin-top: 3%;
    color: grey;
}
hr {
        width: 85%;
    height: 0px;
    opacity: .6;
    background-color: grey;
}
.signininput{
    width: 75%;
    margin-left: 10%;
    padding-bottom: 1%;

}

@media (max-width: 895px){
    .container{
        height: auto;
    }
}

</style>