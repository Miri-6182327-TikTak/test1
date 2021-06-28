<template>
<div>
    <input name='fname' type='text' placeholder='first name'  v-model="fname"/>
    <input name='lname' type='text' placeholder='last name'  v-model="lname"/>
    <keyValue></keyValue>
    <button @click="ADD_CONTACT(fname,lname)" ></button>
</div>
</template>


<script>
import { mapMutations } from 'vuex'
import keyValue from './keyValue.vue'

export default {
    data: function () {
    return {
      fname:'',
      lname:''
    }
  },
   name: 'contactDetails',
   methots:{
     ...mapMutations(['ADD_CONTACT'])
  },
   
  components: {keyValue}
}
</script>
<style>
</style>

