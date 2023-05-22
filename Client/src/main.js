import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vuelidate from 'vuelidate'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios';

import io from 'socket.io-client';
let socket = null;
Vue.prototype.$event = new Event('localstorageChanged');
Vue.config.productionTip = false



socket = io('http://localhost:3000', {
  withCredentials: true,
});

// notf = io('http://localhost:3000/notf', {
  //     withCredentials: true,
  // });
  // notf.on('notify', () => {
    //   alert("got notification");
    // })
    socket.on("connect", () => {
      console.log("connected to server");
    });
    socket.on("productRented", (userID) =>{
        console.log('rent');
        // alert("product got rented");
        // dispatchEvent(new Event('localstorageChanged'));
        if (localStorage.user) {
          // alert("there is a user");
          // alert(userID);
          var user = JSON.parse(localStorage.user);
          // console.log(user._id);
          if (userID == user._id) {
            let uri = 'http://localhost:3000/userPopulate'
            axios.get(uri,  { withCredentials: true }).then((res) => {
              localStorage.setItem("user", JSON.stringify(res.data));
              console.log(res.data);
              // console.log(res.data.notifications.length);
              dispatchEvent(new Event('localstorageChanged'));

            }).catch(err => {
              console.log(err.message);
              localStorage.clear();
            })
          }

        }
      
      });
      // socket.on("test",function() {
        //   // console.log('rent');
        //   // alert("product got rented");
        //   dispatchEvent(new Event('localstorageChanged'));
        
        // });
        Vue.use(Vuelidate)
        new Vue({
          router,
          store,
          vuetify,
          render: h => h(App)
        }).$mount('#app')
        
        
        // const event = new Event('localstorageChanged');
        Vue.prototype.$socket = socket;
        