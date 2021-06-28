<template>
  <div id="app"> 
      <contactDetails></contactDetails>
  </div>
</template>
<script>

import contactDetails from './components/contact-details.vue'

export default {
  name: 'App',
  components: {contactDetails
    
  },
  computed: {
    //...mapGetters(['todos_len']),
   // ...mapState(['hours','scm'])
  },
  methods: {
    //...mapActions(['getTodos'])
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
