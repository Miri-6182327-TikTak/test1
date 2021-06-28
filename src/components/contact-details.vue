<template>
<div>
    <input name='fname' type='text' placeholder='first name'  v-model="fname"/>
    <input name='lname' type='text' placeholder='last name'  v-model="lname"/>
   
</div>
</template>


<script>
import { mapMutations } from 'vuex'


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
   

}
</script>
<style>
</style>

