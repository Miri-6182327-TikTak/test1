<template>

<input name='key' type='text' placeholder='key' v-model="key"/>
<input name='value' type='text'  placeholder='value' v-model="value"/>
<button @click="addAttribute" ></button>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'keyValue',
   data: function () {
    return {
      key,value
    }
  },
  methots:{
      ...mapMutations(['ADD_ATTRIBUTE_NEW_CONTACT'])

    addAttribute: function():{
        ADD_ATTRIBUTE_NEW_CONTACT(this.key,this.value)
        this.key='';
        this.value='';
    }

  }
  
}
</script>

<style>
</style>
