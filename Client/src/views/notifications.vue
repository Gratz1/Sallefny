<template>
  <div class="notification">
    <br /><br /><br /><br />
    <div
      class="col-md-12 h-100 d-flex justify-content-center align-items-center"
    >
      <div class="col-md-8 rounded  text-left">
        <h2 class="text-left font-bold pt-0 pb-0 mb-4"><b>Notifications</b></h2>
        <div class="card col-md-12 mt-2"  v-for="category in categories" :key="category.id">
          <section class="my-2">
            <!-- Card header -->
            <div
              class="card-header border-0 font-weight-bold d-flex justify-content-between mb-4"
            >
              <p class="mr-4 mb-0">About the person:</p>
              <ul class="list-unstyled list-inline mb-0">
                <li class="list-inline-item">
                  <router-link :to="{ name: 'chat' }" class="text-default mr-3"
                    ><i class="fas fa-envelope mr-1"></i>Send
                    message</router-link
                  >
                </li>
                <li class="list-inline-item">
                  <router-link
                    :to="{ name: 'profile' }"
                    href=""
                    class="text-default mr-3"
                    ><i class="fas fa-user mr-1"></i>See profile</router-link
                  >
                </li>
              </ul>
            </div>

            <div
              class="media mt-4 px-2"
            >
              <img
                class="card-img-100 rounded-circle d-flex z-depth-1 mr-3"
                :src="category.image"
                alt="image"
              />
              <div class="media-body">
                <h5 class="font-weight-bold mt-0">
                  <router-link :to="{ name: 'profile' }" class="text-default" href="">{{ category.owner }}</router-link>
                </h5>
                {{category.message}}
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button class="btn btn-primary" type="button" @click="accept(category.id)">Accept</button>
                  <button class="btn btn-light" type="button" @click="refuse(category.id)">Refuse</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "notifications",
  components: {},
  data() {
    return {
      image: "",
      owner: "",
      temp: [],
      categories: [
        // {
        //   id: 1,
        //   owner: "Mahmoud Ali kareem",
        //   image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg",
        //   message: "hello",
        // },
  
      ],
    };
  },
  methods: {
    accept:function(notfid){
      // alert('accepted');
      // alert(user);
      alert(notfid);
      let uri = 'http://localhost:3000/posts/acceptRefuseRentPost'
        axios.post(uri, {notfid: notfid, choice: "accept"}, { withCredentials: true }).then((res) => {
        console.log(res.data);
        alert(res.data);
              
        }).catch(error => {
          alert(error + ', ' + error.response.data);
        })

    },
     refuse:function(notfid){
      // alert('refused')
       alert(notfid);
      let uri = 'http://localhost:3000/posts/acceptRefuseRentPost'
        axios.post(uri, {notfid: notfid, choice: "refuse"}, { withCredentials: true }).then((res) => {
        console.log(res.data);
        alert(res.data);
              
        }).catch(error => {
          alert(error + ', ' + error.response.data);
        })
    }
  },
  mounted() {

    if (localStorage.user) {
      var user = JSON.parse(localStorage.user);
      user.notifications.forEach(notf => {
        this.categories.push({id: notf._id, owner: notf.theBuyer.username, image: notf.theBuyer.image.path, message: notf.theMessage});
      });

    }


       window.addEventListener('localstorageChanged', () => {
         this.temp = [];
    // alert("triggered event");
    console.log("triggered event");
  if (localStorage.user) {
    var user = JSON.parse(localStorage.user);
    user.notifications.forEach(notf => {
        this.temp.push({id: notf._id, owner: notf.theBuyer.username, image: notf.theBuyer.image.path, message: notf.theMessage});
      });
      this.categories = this.temp;
  } 
  });


  },
};
</script>

<style scoped></style>
