<template>
<div>
  <div v-for="(contact,index) in contacts" :key="index"  >
  
  {{contact.name}}<br>
  {{contact.email}}<br>
  {{contact.phone}}

  <button @click="DELETE_CONTACT(index)" >X</button>
  <button @click="add(index,'edit',true) "> add attribute</button>
  
  <addAttr  v-if="contact.edit" :index='index'></addAttr>
  </div>

</div>
</template>


<script>
import { mapActions, mapState,mapMutations } from 'vuex';
import addAttr  from '@/components/addAttr.vue';

export default {
  name: 'listContact',
  data() {
    return {
      fname:'',
      lname:''
    }
  },
 mounted(){
    this.getUsers()
 },
 
 computed: {
    ...mapState(['contacts'])
  },
 methods: {
add(index,key,val){
  var attribute={index:index,key:key,value:val};
  this.ADD_ATTRIBUTE_OLD_CONTACT(attribute)
},

    ...mapActions(['getUsers']),
    ...mapMutations(['DELETE_CONTACT']),
     ...mapMutations(['ADD_ATTRIBUTE_OLD_CONTACT']),
  },
   components: {
    addAttr
  }

}
</script>
<style>
</style>

