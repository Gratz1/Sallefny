import Vue from 'vue'
import Router from 'vue-router'
import notfound from './views/notfound.vue'
import home from './views/home.vue'
import signin from './views/signincontainer/signin.vue'
import forgetpassword from './views/signincontainer/forgetpassword.vue'
import getreset from './views/signincontainer/getreset.vue'
import categories from './views/categories.vue'
import productpage from './views/productpage.vue'
import postad from './views/postad.vue'
import signup from './views/signup.vue'
import categories2 from './views/categories2.vue'
import filter from './views/filter.vue'
import profile from './views/profile.vue'
import faq from './views/faq.vue'
import about from './views/about.vue'
import confirmEmail from './views/signincontainer/confirmEmail.vue'
import notifications from './views/notifications.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',   
      component: home
    },
    {
      path:"/profile/signin",
      name:"signin",
      component: signin
    },
    {
      path:"/categories",
      name:"categories",
      component: categories
    },
    {
      path:"/categories/productpage/:productId",
      name:"productpage",
      component: productpage
    },
    {
      path:"/profile/signin/forgetpassword",
      name:"forgetpassword",
      component: forgetpassword
    },
    {
      path:"/profile/signin/getreset",
      name:"getreset",
      component: getreset
    },
    {
      path:"/postad",
      name:"postad",
      component: postad
    },
    {
      path:"/profile/signup",
      name:"signup",
      component: signup
    },
  
    {
      path:"/categories/:id:type1:type2:type3:type4:type5:type6:type7:type8",
      name:"categories2",
      component: categories2,
      props: true
    },
    {
      path:"/categories/filter",
      name:"filter",
      component: filter
    },
    {
      path:"/profile",
      name:"profile",
      component: profile
    },
    {
      path:"/faq",
      name:"faq",
      component: faq
    },
    {
      path:"/about",
      name:"about",
      component: about
    },

    {
      path:"/confirmEmail",
      name:"confirmEmail",
      component: confirmEmail,
    },

    {
      path:"/notifications",
      name:"notifications",
      component: notifications,
    },


    
    {
      path:'*',
      name:"notfound",
      component: notfound
    }
  ]
})
