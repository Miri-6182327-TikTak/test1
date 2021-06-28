import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    contacts :[],
    new_contact:{ name: '' }
  },
  mutations: { 
    ADD_CONTACT(state,name) {
      state.new_contact.name = name;
      state.contacts.push(state.new_contact);
    },
    ADD_ATTRIBUTE_OLD_CONTACT(state,index, key, value) {
      Vue.set(state.contacts[index], key, value);
    },
    ADD_ATTRIBUTE_NEW_CONTACT(state,key, value) {
      Vue.set(state.new_contact, key, value);
    },
   
    DELETE_CONTACT(state,index) {
      Vue.delete(state.contacts, index);
    },
    SET_USERS(state, users) {
      state.contacts = users
    }
  },
  actions: {
     async getUsers({ commit }) {
       const res = await axios.get('https://jsonplaceholder.typicode.com/users')
       commit('SET_USERS', res.data)
     }
  },
  modules: {
  }
})
