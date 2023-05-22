<template>

  <mdb-navbar color="indigo" dark class="fixed-top animated fadeIn " 
  style="padding-bottom:10px">
    <mdb-navbar-brand href="https://mdbootstrap.com/">
    <img src="../../assets/37.png" style="width:50px;height:50px">  
    <span style="font-weight:bold;letter-spacing:3px"> SALLEFNY</span>
    </mdb-navbar-brand>

    <mdb-navbar-toggler>
     
      
      <mdb-navbar-nav >
        <router-link :to="{name:'home'}">
        <mdb-nav-item  active>
            
           <i class="fas fa-home"></i> Home
        </mdb-nav-item>
        </router-link>

   <router-link :to="{name:'categories'}"> 
        <mdb-nav-item  active>
           <i class="fas fa-th" ></i>  Categories
        </mdb-nav-item>
        </router-link>

<router-link :to="{name:'postad'}">
        <mdb-nav-item  active>
            
            <i class="fas fa-plus"></i>Post Ads
        </mdb-nav-item>
        </router-link>

  <router-link :to="{name:'profile'}" active v-if="isLoggedIn">

          <mdb-nav-item  active >
          <i class="fas fa-user"></i>Profile
        </mdb-nav-item>
       </router-link>

         <router-link :to="{name:'signin'}" active v-else>
        <mdb-nav-item >
          <i class="fas fa-user"></i>Sign In
        </mdb-nav-item>

       </router-link>
       
      </mdb-navbar-nav>

          <form v-on:submit.prevent="search">
  
      <mdb-input style="margin-right:120px; width:100%" type="text" class="text-white " placeholder="Search" aria-label="Search" label navInput waves waves-fixed v-model="searchQuery"/>
      </form>
    </mdb-navbar-toggler>
  </mdb-navbar>


</template>

<style scoped lang="scss" >



.navbar-nav {
    margin-left: 60px;
}
.navbar-nav li{
   margin-right: 20px;
}
a{
    color: white;
}

.fa-phone-alt:before {
    content: "\f879";
    margin-right: 4px;
}
.fa-user {
  margin-right: 4px;
}










// DEMO STYLES
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

html {
    font-size: 16px;
}

html, body, #app {
    width: 100%;
    height: 100%;
}

body {
    margin: 0;
    font-family: "Source Sans Pro";
}

h1 {
    font-weight: 400;
    transition: color .5s ease;
}

.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbInput,  } from 'mdbvue';
  export default {
    name: 'navbar',
    data: function(){
        return{
        isLoggedIn: false,
        searchQuery: '',
        // getToken() {
        //   alert("gettoken");
        //           if (localStorage.user) {
        //   return true
        // } else {
        //   return false;
        // }
        // },
        


    };
    },
    methods: {
      checkIfUserLoggedIn() {
  
      },
      search() {
        // alert("you searched");
        this.$router.push({ name: "filter", params: {querySearch: this.searchQuery }});

        // alert(this.searchQuery);
        this.searchQuery = '';
      }
    },
    mounted() {
      
  window.addEventListener('localstorageChanged', () => {
    // alert("triggered event");
    console.log("triggered event");
          if (localStorage.user) {
          this.isLoggedIn =  true
        } else {
          this.isLoggedIn =  false;
        }
  });
},
    
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput,
    },

  }
   
  
</script>