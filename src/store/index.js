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
      state.new_contact={};
    },
    ADD_ATTRIBUTE_OLD_CONTACT(state,obj) {
      Vue.set(state.contacts[obj.index], obj.key, obj.value);
    },
    ADD_ATTRIBUTE_NEW_CONTACT(state,obj) {
      Vue.set(state.new_contact, obj.key, obj.val);
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
