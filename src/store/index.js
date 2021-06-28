import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    contacts =[],
    new_contact={ fname: '', lname: '' }
  },
  mutations: {
    ADD_ATTRIBUTE_OLD_CONTACT(state,index, key, value) {
      Vue.set(state.contacts[index], key, value);
    },
    ADD_ATTRIBUTE_NEW_CONTACT(state,key, value) {
      Vue.set(state.new_contact, key, value);
    },
    ADD_CONTACT(state,fname, lname) {
      this.new_contact.fname = fname;
      this.new_contact.lname = lname;
      this.contacts.push(state.new_contact);
    },
    DELETE_CONTACT(state,index) {
      Vue.delete(state.this.contacts, index);
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
