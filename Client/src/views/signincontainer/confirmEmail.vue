<template>
<div class="confirmEmail">
<navbar />
<br><br><br><br><br>
<br>
<!-- <h1>console.log(this.$route.query.test) </h1> -->
<div class="container">
  </div>

</div>
</template>

<script>
import axios from 'axios';


export default {
    name:"confirmEmail",
         data: function(){
        return{
        confirm:"",


    };
    },
    components:{
  
        

    },
    methods: {
      confirmEmail: function() {
            axios.put('http://localhost:3000/confirm/' + this.$route.query.token, {

            }, { withCredentials: true })
            .then( (response)  => {

              alert(response.data);
              this.$router.push({ name: "profile"});

              
            })
            .catch(function (error) {
              // alert(error);
              // console.log(error);
            alert(error + ', ' + error.response.data);

            });
      }

    },
    mounted() {
        this.confirmEmail();
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