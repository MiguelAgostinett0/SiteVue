import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Card from './components/Card.vue'
import Buttons from './components/Buttons.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(VueRouter)
const router = new VueRouter()
router.map({
  '/card': {
  component: Card
  },
  '/buttons': {
    component: Buttons
  }
});
router.start(App, 'App')




