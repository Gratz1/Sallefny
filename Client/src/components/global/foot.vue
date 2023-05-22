<template>
  <!-- Footer -->
  <mdb-footer color="unique-color-dark" class="page-footer font-small pt-0 animated fadeIn">
    <div style="backgroundColor: #6351ce">
      <mdb-container class="text-left">
        <mdb-row class="py-4 d-flex align-items-center">
          <mdb-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0 white-text">Get connected with us on social networks!</h6>
          </mdb-col>
          <mdb-col md="6" lg="7" class="text-center text-md-right">
            <router-link :to="{name:'home'}"  class="fb-ic ml-0"><i class="fab fa-facebook white-text mr-lg-4"> </i></router-link>
            <router-link :to="{name:'home'}"  class="tw-ic"><i class="fab fa-twitter white-text mr-lg-4"> </i></router-link>
            <router-link :to="{name:'home'}"  class="gplus-ic"><i class="fab fa-google-plus white-text mr-lg-4"> </i></router-link>
            <router-link :to="{name:'home'}"  class="li-ic"><i class="fab fa-linkedin-in white-text mr-lg-4"> </i></router-link>
            <router-link :to="{name:'home'}"  class="ins-ic"><i class="fab fa-instagram white-text mr-lg-4"> </i></router-link>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>

    <mdb-container class="mt-5 mb-4 text-center text-md-left">
      <mdb-row class="mt-3">
        <mdb-col md="3" lg="4" xl="3" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong style="font-size:30px">SALLEFNY </strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p>The First Rental Application in Egypt that enables people to borrow and lend almost anything
            
          </p>
        </mdb-col>
        <mdb-col md="2" lg="2" xl="2" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Services</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><router-link :to="{name:'faq'}"  href="#!">Privacy Policy</router-link></p>
          <p><router-link :to="{name:'faq'}"  href="#!">Terms of use</router-link></p>
          <p><router-link :to="{name:'faq'}"  href="#!">Payment Methods</router-link></p>
         </mdb-col>
        <mdb-col md="3" lg="2" xl="2" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><router-link :to="{name:'profile'}" href="#!">Your Account</router-link></p>
          <p><router-link :to="{name:'categories'}"  href="#!">Categories</router-link></p>
          <p><router-link :to="{name:'faq'}"  href="#!">FAQ</router-link></p>
          <p><router-link :to="{name:'about'}"  href="#!">About us</router-link></p>
        </mdb-col>
        <mdb-col md="4" lg="3" xl="3" class="mb-4">
          <h6 class="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
          <p><i class="fas fa-home mr-3"></i> Shibin-El-Kom</p>
          <p><i class="fas fa-envelope mr-3"></i> sallefny@gmail.com</p>
          <p><i class="fas fa-phone mr-3"></i> +2 010 234 567 88</p>
          <p><i class="fas fa-print mr-3"></i> +2 010 234 567 89</p>
           <div class="page-content page-container" id="page-content"> </div><br>
           

           <div class="flex social-btns" st>
  <router-link :to="{name:'home'}"  class="app-btn blu flex vert" href="http:apple.com">
    <i class="fab fa-apple"></i>
    <p>Available on the <br/> <span class="big-txt">App Store</span></p>
  </router-link>

  <router-link :to="{name:'home'}" class="app-btn blu flex vert" href="http:google.com">
    <i class="fab fa-google-play"></i>
    <p>Get it on <br/> <span class="big-txt">Google Play</span></p>
  </router-link>
	</div>




        </mdb-col>  
      </mdb-row>

    </mdb-container>
    
    
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="#"> SALLEFNY-Team.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->

  
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'foot',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>
<style scoped>
.fa-google-play{
  font-size: 25px;
}
.fa-apple{
  
  font-size: 25px;

}

</style>
