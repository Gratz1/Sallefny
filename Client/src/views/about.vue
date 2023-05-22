<template>
  <div class="about  animated:fadeIn" style="background-color: rgb(253, 253, 253);">
  <br><br><br><br><br>
  <div class="container"  >
       <h1 class="text-center font-bold pt-0 pb-0 mb-5" style="color: rgb(3, 90, 141);font-family:Apple Chancery  "><b>About SALLEFNY</b></h1>
             
            <!-- alert -->
             <div class="alert alert-2-success">
              <h3 class="alert-title">Hello Dear!</h3><br>
              <p class="alert-content"><b>This FAQ Provides Answers to Basic Questions About Sallefny Application.</b></p>
             </div>
    <br><br>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="indigo lighten-2"
      fill-dot
      right
    >
      <v-card >
        <v-card-title class="indigo lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-magnify
          </v-icon>
          <h3 class="text-h4 white--text font-weight-light">
            SALLEFNY 
          </h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="10"
            >
is the first Egyptian app that enables people to borrow and lend almost anything from each other lend almost
anything from each other.
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64">
                mdi-calendar-text
              </v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="indigo darken-1
"
      fill-dot
      left
      small
    >
      <v-card >
        
        <v-card-title  class="indigo darken-1

 justify-end">

<i class="fas fa-dollar-sign fa-2x " style="color:white"></i>
          <h2 style="margin-left:20px;color:white" class="text-h4 mr-4 white--text font-weight-light">
            Earn Money
          </h2>
         
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="8"
            >
SALLEFNY helps you to rent one time use things which will save your money rather than buying it and becomes Valueless            </v-col>
            <v-col
              cols="12"
              md="4"
            >
           Get in Touch With us by Downloading <a href="#"> Application </a>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="cyan lighten-1">
          <i class="fas fa-shield-alt fa-2x" style="color:white"></i>
          <h2 class="text-h4 white--text font-weight-light" style="margin-left:10px">
            Insurance
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col 
              v-for="n in 3"
              :key="n"
              cols="12"
              md="4"
            >
              Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>






    <v-timeline-item
      color="light-blue darken-3

"
      fill-dot
      left
      small
    >
      <v-card >
        
        <v-card-title  class="light-blue darken-3

 justify-end">

 <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>          <h2 style="margin-left:20px;color:white" class="text-h4 mr-4 white--text font-weight-light">
            Users
          </h2>
         
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="8"
            >
We have a large number of users inside all governorates of Egypt, up to 400,000 users who rent their things        </v-col>
            <v-col
              cols="12"
              md="4"
            >
           Over 2,000 Rental process every day

            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>



<v-timeline-item
      color="blue
"
      fill-dot
      right
    >
      <v-card >
        <v-card-title class="blue">
            <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-phone-in-talk
          </v-icon>
          <h3 class="text-h4 white--text font-weight-light">
          Support 
          </h3>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="10"
            >

You can report any problem that happens to you, such as mistreatment by users or damage to your goods
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64">
                mdi-calendar-text
              </v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>








      </v-timeline>
  </div>
  </div>
</template>

<script>

export default {
  name: "about",
  components: {
    
  },
  
};
</script>

<style scoped>
.alert {
  width: 100%;
  padding: 16px;
  height: 120px;
  border-left: 7px solid rgb(2, 74, 116);
  background-color: rgb(247, 247, 247);
  
}

.alert-title {
  text-align: left;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
}

.alert-content {
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  color: #09c1f0;
  float:left;
  margin-bottom: 30px;
}

</style>