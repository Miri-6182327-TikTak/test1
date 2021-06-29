<template>
<div>

    <input name='fname' type='text' placeholder='first name'  v-model="fname"/>
    <input name='lname' type='text' placeholder='last name'  v-model="lname"/>
    <addAttr :index='-1'></addAttr>
   <button @click="save(fname+' '+lname)" >שמור</button>

   <div>
   <label>משתמש חדש</label>
   <br>
   name: {{fname}}  {{lname}}  
   <br>
   {{new_contact}}
  
   
   
   </div>
</div>
</template>


<script>
import { mapMutations, mapState } from 'vuex';
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
      save(name){
        this.ADD_CONTACT(name);
        this.fname='';
        this.lname='';
      },
      ...mapMutations(['ADD_CONTACT']),
  },
    computed: {
    ...mapState(['new_contact'])
  },
  components: {
    addAttr
  },
}
</script>
<style>
</style>

