import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import user from './modules/user'
import cart from './modules/cart'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    user,
    cart
  }
})