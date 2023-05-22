<template>
  <div>
    <!----------------------------   Ahmed El Sayed  Code   --------------------->

    <!----------------------------   Navbar Section     --------------------->

    <!----------------------------   Home Video Section     --------------------->

    <video class="video-fluid z-depth-1 animated fadeIn" autoplay loop muted>
      <source src="../assets/38.mp4" type="video/mp4" />
    </video>

    <br /><br /><br />


    <!----------------------------   SALLEFNY Blog  Section     --------------------->

 





    <mdb-container>
      <hr class="my-5" />
      <mdb-row>
        <mdb-col lg="5">
          <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
            <img
              class="img-fluid"
              src="../assets/36.png"
              style="height: 100%; width: 100%"
              alt="Sample image"
         
            />
            <a>
              <mdb-mask overlay="white-slight" waves />
            </a>
          </mdb-view>
        </mdb-col>

        <mdb-col
          lg="7"
          class=""
          v-mdb-animate-on-scroll="{
            animation: 'bounceInRight',
            delay: 12,
            position: 2,
          }"
        >
          <h3 class="font-weight-bold mb-3 p-0">
            <strong>SALLEFNY </strong>
          </h3>
          <br />
          <p style="font-size: 20px">
            is the first Egyptian app that enables people to borrow and lend
            almost anything from each other lend almost<br />
            anything from each other.
          </p>
          <p>Created in 9/6/2021</p>
          <router-link :to="{ name: 'about' }" style="color: white">
          <mdb-btn color="indigo" size="md" class="waves-light">
            
              Read more
          </mdb-btn>
          </router-link>
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <!----------------------------   SALLEFNY Features Section     --------------------->

    <mdb-container>
      <hr class="my-5" />
      <section class="text-center my-5">
        <h4 class="h1-responsive font-weight-bold my-5">SALLEFNY Features</h4>
        <br /><br />
        <mdb-row>
          <mdb-col md="3">
            <i class="fas fa-dollar-sign fa-4x" style="color: #91c788"></i>
            <h5 class="font-weight-bold my-4">Save Money</h5>
            <p class="grey-text mb-md-0 mb-5">
              SALLEFNY helps you to rent one time use things which will save
              your money rather than buying it and becomes Valueless
            </p>
          </mdb-col>

          <mdb-col md="3">
            <i class="far fa-clock fa-4x" style="color: #ffb037"></i>
            <h5 class="font-weight-bold my-4">Save Time</h5>
            <p class="grey-text mb-md-0 mb-5">
              By providing shipping service to you and simply we can provide
              everything you want to rent through our application
            </p>
          </mdb-col>
          <mdb-col md="3">
            <mdb-icon icon="shield-alt" style="color: #0278a5" class="fa-4x" />
            <h5 class="font-weight-bold my-4">Insurance</h5>
            <p class="grey-text mb-md-0 mb-5">
              SALLEFNY guaranteed that your goods will be returned to you 100%
              at the place you specify, and on the date that the period expires
            </p>
          </mdb-col>

          <mdb-col md="3">
            <i class="fas fa-truck fa-4x" style="color: rgb(17 78 78)"></i>
            <h5 class="font-weight-bold my-4">Delivery</h5>
            <p class="grey-text mb-md-0 mb-5">
              SALLEFNY offer delivery service to anywhere in Egypt at an
              excellent price, and there are offers according to the goods and
              for you for the first time for free
            </p>
          </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>
    <hr class="my-5" />

    <!----------------------------   EXPLORE Categories Section     --------------------->

    <!-- Header of Explore Section --->
    <div class="container">
      <section class="my-5">
        <h4 class="h1-responsive font-weight-bold my-5 text-left" style="">
          Explore Categories
        </h4>
      </section>
    </div>

    <!----  Photos of EXPLORE Categories Section -->
    <div class="container" v-mdb-animate-on-scroll="{ animation: 'fadeInDown' }">
      <div class="row">
        <div class="col-md-4 col-xs-12">
          <div class="view zoom z-depth-1">
            <a href="#!" class="text-white">
              <img
                src="../assets/11.jpg"
                class=""
                style="width: 100%; height: 100%"
                alt="sample image"
              />
              <div class="mask rgba-stylish-strong">
                <div class="text-white text-center py-lg-5 py-0 my-0">
                  <div>
                    <h2 class="card-title font-weight-bold pt-2">
                      <strong>
                        <router-link
                          :to="{
                            name: 'categories2',
                            params: {
                              id: gaming[0],
                              type1: gaming[1],
                              type2: gaming[2],
                              type3: gaming[3],
                              type4: gaming[4],
                              type5: gaming[5],
                              type6: gaming[6],
                              type7: gaming[7],
                              type8: gaming[8],
                            },
                          }"
                          style="color: white"
                        >
                          Gaming
                        </router-link></strong
                      >
                    </h2>

                    <p class="mx-5 clearfix d-none d-md-block"></p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-md-4 col-xs-12">
          <div class="view zoom z-depth-1">
            <a href="#!" class="text-white">
              <img
                src="../assets/20.jpg"
                class=""
                style="width: 100%; height: 100%"
                alt="sample image"
              />
              <div class="mask rgba-stylish-strong">
                <div class="text-white text-center py-lg-5 py-0 my-0">
                  <div>
                    <h2 class="card-title font-weight-bold pt-2">
                      <strong>
                        <router-link :to="{ name: 'categories2', params: {
                id: Accesories[0],
                type1:Accesories[1],
                type2: Accesories[2],
                type3: Accesories[3],
                type4: Accesories[4],
                type5: Accesories[5],
                type6: Accesories[6],
                type7: Accesories[7],
                type8: Accesories[8]},}" 
                          style="color: white"
                        >
                          Mobiles
                        </router-link></strong
                      >
                    </h2>

                    <p class="mx-5 clearfix d-none d-md-block"></p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="col-md-4 col-xs-12">
          <div class="view zoom z-depth-1">
            <a href="#!" class="text-white">
              <img
                src="../assets/12.jpg"
                class=""
                style="width: 100%; height: 100%"
                alt="sample image"
              />
              <div class="mask rgba-stylish-strong">
                <div class="text-white text-center py-lg-5 py-0 my-0">
                  <div>
                    <h2 class="card-title font-weight-bold pt-2">
                      <strong
                        ><router-link
                          :to="{ name: 'categories2' , params:{
                id: Books[0],
                type1:Books[1],
                type2: Books[2],
                type3: Books[3],
                type4: Books[4],
                type5: Books[5],
                type6: Books[6],
                type7: Books[7],
                type8: Books[8]

                          } }"
                          style="color: white"
                        >
                          Books
                        </router-link></strong
                      >
                    </h2>

                    <p class="mx-5 clearfix d-none d-md-block"></p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!---- Show More of Explore Categories -->
    <div class="container animated fadeIn infinite">
      <div class="row">
        <div class="col-md-12 text-right">
          <strong>
            <router-link :to="{ name: 'categories' }">
              Show More <mdb-icon icon="angle-double-right" /> </router-link
          ></strong>
        </div>
      </div>
    </div>

    <hr class="mt-5" />

    <!----------------------------   Most Rented Items Section     --------------------->

    <!-- Header of Most Rented Items   -->
    <div class="container">
      <section class="my-5">
        <h4 class="h1-responsive font-weight-bold my-5 text-left" style="">
          Most Rented Items
        </h4>
      </section>
    </div>

    <!-- Photos of Most Rented Items -->
    <div class="container" v-mdb-animate-on-scroll="{ animation: 'fadeInDown' }">
      <div class="row">
        <div class="col-md-4 col-xs-12">
          <router-link :to="{ name: 'filter' }" style="color: white">
            <div class="view zoom z-depth-1">
              <a href="#!" class="text-white">
                <img
                  src="../assets/25.jpg"
                  class=""
                  style="width: 100%; height: 100%"
                  alt="sample image"
                />
                <div class="mask rgba-stylish-strong">
                  <div class="text-white text-center py-lg-5 py-0 my-0">
                    <div>
                      <h2 class="card-title font-weight-bold pt-2">
                        <strong> Camera </strong>
                      </h2>

                      <p class="mx-5 clearfix d-none d-md-block"></p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </router-link>
        </div>

        <div class="col-md-4 col-xs-12">
          <router-link :to="{ name: 'filter' }" style="color: white">
            <div class="view zoom z-depth-1">
              <a href="#!" class="text-white">
                <img
                  src="../assets/18.jpg"
                  class=""
                  style="width: 100%; height: 100%"
                  alt="sample image"
                />
                <div class="mask rgba-stylish-strong">
                  <div class="text-white text-center py-lg-5 py-0 my-0">
                    <div>
                      <h2 class="card-title font-weight-bold pt-2">
                        <strong> Camping </strong>
                      </h2>

                      <p class="mx-5 clearfix d-none d-md-block"></p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </router-link>
        </div>

        <div class="col-md-4 col-xs-12">
          <router-link :to="{ name: 'filter' }" style="color: white">
            <div class="view zoom z-depth-1">
              <a href="#!" class="text-white">
                <img
                  src="../assets/6.jpg"
                  class=""
                  style="width: 100%; height: 100%"
                  alt="sample image"
                />
                <div class="mask rgba-stylish-strong">
                  <div class="text-white text-center py-lg-5 py-0 my-0">
                    <div>
                      <h2 class="card-title font-weight-bold pt-2">
                        <strong> Farm Tools </strong>
                      </h2>

                      <p class="mx-5 clearfix d-none d-md-block"></p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </router-link>
        </div>
      </div>
    </div>



    <!-- Show More Of Most Rented Items  -->
    <div class="container animated fadeIn infinite">
      <div class="row">
        <div class="col-md-12 text-right">
          <strong>
            <router-link :to="{ name: 'filter' }">
              Show More <mdb-icon icon="angle-double-right" /> </router-link
          ></strong>
        </div>
      </div>
    </div>
    <br />
    <hr class="my-5" />
    <br />
    <h2 class="h1-responsive font-weight-bold mt-5 mb-3">
      Our Store in Numbers
    </h2>
    <br /><br /><br />

    <div
      class="container-fluid"
      style="background-color: #1597bb; opacity: 0.8"
    >
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <div class="counting-sec">
            <div class="col">
              <mdb-icon icon="users" style="color: white; font-size: 50px" />
              <div class="num">12,567</div>
              <p
                style="
                  font-size: 20px;
                  letter-spacing: 1px;
                  text-transform: capitalize;
                "
              >
                Satisfied Users
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="counting-sec">
            <div class="col">
              <i
                class="fas fa-briefcase"
                style="color: white; font-size: 50px"
              ></i>
              <div class="num">20,456</div>
              <p
                style="
                  font-size: 20px;
                  letter-spacing: 1px;
                  text-transform: capitalize;
                "
              >
                Rentals
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="counting-sec">
            <div class="col">
              <mdb-icon
                icon="handshake"
                style="color: white; font-size: 50px"
              />
              <div class="num">3,290</div>
              <p
                style="
                  font-size: 20px;
                  letter-spacing: 1px;
                  text-transform: capitalize;
                "
              >
                Orders Completed
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12">
          <div class="counting-sec">
            <div class="col">
              <mdb-icon icon="truck" style="color: white; font-size: 50px" />
              <div class="num">87</div>
              <p
                style="
                  font-size: 20px;
                  letter-spacing: 1px;
                  text-transform: capitalize;
                "
              >
                Cities we ship to
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br />

    <!----------------------------   People Reviews Section     --------------------->

    <mdb-container>
      <section class="team-section text-center my-5">
        <h2 class="h1-responsive font-weight-bold mt-5 mb-3">People Reviews</h2>
        <p class="dark-grey-text w-responsive mx-auto mb-5">
          some reviews of our lovely Clients. we are family here Join us :)
        </p>
        <mdb-row
          class="text-center"
          v-mdb-animate-on-scroll="{
            animation: 'slideInLeft',
          }"
        >
          <mdb-col md="4" class="mb-md-0 mb-5">
            <mdb-testimonial>
              <mdb-avatar class="mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                  class="rounded-circle z-depth-1 img-fluid"
                />
              </mdb-avatar>
              <h4 class="font-weight-bold dark-grey-text mt-4">Mariam Diaa</h4>
              <h6 class="font-weight-bold blue-text my-3">Lessor</h6>
              <p class="font-weight-normal dark-grey-text">
                <mdb-icon class="fas fa-quote-left pr-2"></mdb-icon>
                Excellent service quick response if have any problems 5 star
                service
              </p>
              <div class="orange-text">
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star-half-alt"> </mdb-icon>
              </div>
            </mdb-testimonial>
          </mdb-col>
          <mdb-col md="4" class="mb-md-0 mb-5">
            <mdb-testimonial>
              <mdb-avatar class="mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                  class="rounded-circle z-depth-1 img-fluid"
                />
              </mdb-avatar>
              <h4 class="font-weight-bold dark-grey-text mt-4">Ahmed Omar</h4>
              <h6 class="font-weight-bold blue-text my-3">Lessee</h6>
              <p class="font-weight-normal dark-grey-text">
                <mdb-icon class="fas fa-quote-left pr-2"></mdb-icon>Awesome app
                ... Love the card facilities and specially the limits offered
              </p>
              <div class="orange-text">
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star"> </mdb-icon>
              </div>
            </mdb-testimonial>
          </mdb-col>
          <mdb-col md="4">
            <mdb-testimonial>
              <mdb-avatar class="mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  class="rounded-circle z-depth-1 img-fluid"
                />
              </mdb-avatar>
              <h4 class="font-weight-bold dark-grey-text mt-4">Mai khaled</h4>
              <h6 class="font-weight-bold blue-text my-3">Lessor</h6>
              <p class="font-weight-normal dark-grey-text">
                <mdb-icon class="fas fa-quote-left pr-2"></mdb-icon>
                This app is awsum it's easy to use and has everything you might
                need for support if needed am so happy with it thank you
                SALLEFNY team
              </p>
              <div class="orange-text">
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon icon="star"> </mdb-icon>
                <mdb-icon far icon="star"> </mdb-icon>
              </div>
            </mdb-testimonial>
          </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>

    <br /><br /><br /><br />

    <!-------------------------------- Testing Purposes --------------------------------->

    <mdb-btn color="default" @click="cookies = true" class="mb-3" size="sm"
      >Test Cookies</mdb-btn
    >
    <!-- cookie modal -->
    <mdb-modal :show="cookies" removeBackdrop fullHeight position="bottom">
      <mdb-modal-body>
        <mdb-row center class="align-items-center">
          <p class="pr-2 mb-0">
            We use cookies to improve your website experience
          </p>
          <mdb-btn
            color="primary"
            @click="cookies = false"
            icon="book"
            iconClass="ml-1"
            iconRight
            >Learn more</mdb-btn
          >
          <mdb-btn outline="primary" @click="cookies = false"
            >Ok, thanks</mdb-btn
          >
        </mdb-row>
      </mdb-modal-body>
    </mdb-modal>

    <mdb-btn color="default" class="mb-3" @click="discount = true"
      >Test Offers</mdb-btn
    >
    <!-- discount modal -->
    <mdb-modal
      :show="discount"
      @close="discount = false"
      removeBackdrop
      side
      position="bottom-right"
      info
    >
      <mdb-modal-header>
        <p class="heading">
          Discount offer:
          <strong>10% off</strong>
        </p>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-row>
          <mdb-column col="3">
            <mdb-icon icon="gift" size="4x" />
          </mdb-column>
          <mdb-column col="9">
            <p>
              Sharing is caring. Therefore, from time to time we like to give
              our visitors small gifts. Today is one of those days.
            </p>
            <p>
              <strong
                >Copy the following code and use it at the checkout. It's valid
                for <u>one day</u>.</strong
              >
            </p>
            <h2>
              <mdb-badge>v52gs1</mdb-badge>
            </h2>
          </mdb-column>
        </mdb-row>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn
          color="info"
          tag="a"
          href="https://mdbootstrap.com/docs/b5/vue/pro/"
          target="_blank"
          icon="gem"
          far
          iconClass="ml-1"
          iconColor="white"
          iconRight
          >Get it</mdb-btn
        >
        <mdb-btn outline="info" @click="discount = false">No, thanks</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <!----------------------------   Footer Section     --------------------->
  </div>
</template>

<style scoped lang="scss">












.view {
  position: relative;
  overflow: hidden;
  cursor: default;
  height: 325px;
  margin-bottom: 20px;
  border-radius: 10%;
}

.card-title {
  margin-bottom: 0.75rem;
  margin-top: 56%;
}

* {
  overflow: hidden;
}

.middle {
  width: 100%;
  transform: translateY(-50%);
}
.counting-sec {
  padding: 40px 0;
  width: 100%;
}
.inner-width {
  max-width: 1200px;
  margin: auto;
  display: flex;
}
.col {
  flex: 1;
  text-align: center;
  padding: 20px;
  color: #fff;
  text-transform: uppercase;
}
.col i {
  font-size: 40px;
  color: #333;
}
.num {
  font-size: 40px;
  margin: 20px 0;
  font-weight: bold;
}

@media (max-width: 992px) {
  .counter {
    margin-bottom: 40px;
  }
}







</style>
<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbMask,
  mdbView,
  mdbAnimateOnScroll,
  mdbBtn,
  mdbIcon,
  mdbModal,
  mdbModalBody,
  mdbModalHeader,
  mdbModalFooter,
  mdbBadge,
} from "mdbvue";

export default {
  name: "home",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbMask,
    mdbBtn,
    mdbView,
    mdbIcon,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbBadge,
  },
  directives: {
    mdbAnimateOnScroll,
  },
  data: function () {
    return {
      cookies: false,
      discount: false,
      
      gaming: [
        "Gaming",
        "Action",
        "Adventure",
        "Simulation",
        "Sports",
        "Puzzle",
        "Strategy",
        "Role-Playing",
        "Mix",
      ],
      Accesories: [
        "Mobiles",
        "Anklets",
        "Belts",
        "Bangles",
        "Earrings",
        "Eyeglasses",
        "Bracelets",
        "Pins",
        "Studs",
      ],
      Books: [
        "Books",
        "Fantasy",
        "Mystery",
        "Thriller",
        "Romance",
        "Westerns",
        "Dystopian",
        "Contemporary",
        "Sci-Fi",
      ],
    };
  }
 
};
</script>
