<template>

<input name='key' type='text' placeholder='key' v-model="key"/>
<input name='value' type='text'  placeholder='value' v-model="value"/>
<button @click="SET_ATTRIBUTE(index,key,value)" ></button>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'keyValue',
  props: {
      index{
          type:'number',
          required: true,
      }
  }
  methots:{
     ...mapMutations(['ADD_ATTRIBUTE'])
  }
  
}
</script>

<style>
</style>
