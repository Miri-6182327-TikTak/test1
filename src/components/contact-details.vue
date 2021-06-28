<template>
    <input name='fname' type='text' placeholder='first name'  v-model="fname"/>
    <input name='lname' type='text' placeholder='last name'  v-model="lname"/>
    
    <button @click="ADD_CONTACT(fname,lname)" ></button>

</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
    data: function () {
    return {
      fname,lname
    }
  },
    name: 'contactDetails',
    props: {
    msg: String
  }
   methots:{
     ...mapMutations(['ADD_CONTACT'])
  }
}
</script>
<style>
</style>

