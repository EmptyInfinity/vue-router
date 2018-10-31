import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

let Main = require('./Main.vue');
let Contacts = require('./Contacts.vue');
let Team = require('./Team.vue');
let Blog = require('./Blog.vue');
let Post = require('./Post.vue');

const router = new VueRouter({
  routes: [
    {
      path: '/main',
      components: Main
    },
    {
      path: '/contacts',
      components: Contacts
    },
    {
      path: '/team',
      components: Team
    },
    {
      path: '/blog',
      components: Blog
    },
    {
      path: '/post/:id',
      name: 'post',
      components: Post
    }
  ]
})

new Vue({
  el: '#app',
  router: router
}).$mount('#app')
