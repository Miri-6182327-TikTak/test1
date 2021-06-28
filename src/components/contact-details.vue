<template>
<div>

    <input name='fname' type='text' placeholder='first name'  v-model="fname"/>
    <input name='lname' type='text' placeholder='last name'  v-model="lname"/>
    <addAttr></addAttr>
   <button @click="ADD_CONTACT(fname+''+lname)" ></button>
</div>
</template>


<script>
import { mapMutations } from 'vuex';
import addAttr  from '@/components/addAttr.vue';
export default {
  name: 'contactDetails',
  data() {
    return {
      fname:'',
      lname:''
    }
  },
  methods: {
      ...mapMutations(['ADD_CONTACT'])
  },
  components: {
    addAttr
  },
}
</script>
<style>
</style>

