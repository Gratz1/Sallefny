<template>
  <div id="app">
    <navbar />
   <loading-screen :is-loading="isLoading"></loading-screen> 
    



<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/css?family=Merriweather:400,900,900i" rel="stylesheet">

<!-- Back to top button -->
<a id="button"></a>











    
    <router-view />

    <foot />
  </div>
</template>
<script>
import navbar from "@/components/global/navbar.vue"
import foot from "@/components/global/foot.vue"
import $ from "jquery"
 import Loader from "./components/global/Loader.vue";
export default {
  name:"app",
  components:{
    navbar,
    foot,
      'loading-screen':Loader 
    

    
  },
   data() {
    return {
      
       isLoading: true 
    }
  },
  mounted : function() {
    var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

setTimeout(() => {
      this.isLoading = false
    }, 1000)
  
  },
  
  
}

</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
#button {
  display: inline-block;
  background-color: #128aaf;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 0px;
  right: 9px;
  transition: background-color .3s, 
    opacity .5s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}
#button::after {
  content: "\f077";
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  font-size: 2em;
  line-height: 50px;
  color: #fff;
}
#button:hover {
  cursor: pointer;
  background-color: #10566b;
}
#button:active {
  background-color: #10566b;
}
#button.show {
  opacity: 1;
  visibility: visible;
}

/* Styles for the content section */

.content {
  width: 77%;
  margin: 50px auto;
  font-family: 'Merriweather', serif;
  font-size: 17px;
  color: #6c767a;
  line-height: 1.9;
}
@media (min-width: 500px) {
  .content {
    width: 43%;
  }
  #button {
    margin: 30px;
  }
}
.content h1 {
  margin-bottom: -10px;
  color: #03a9f4;
  line-height: 1.5;
}
.content h3 {
  font-style: italic;
  color: #96a2a7;
}

</style>
