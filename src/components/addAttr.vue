<template>
<div>
<p>יש להכניס מאפיין עם ערך  ולהוסיף למשתמש ניתן להוסיף מספר ערכים</p>
    <input name='key' type='text' placeholder='key'  v-model="attribute.key"/>
    <input name='val' type='text' placeholder='value'  v-model="attribute.val"/>
    <button v-if="index<0" @click="save()" >הוסף</button>
    <button v-if="index>=0" @click="update(index,attribute)" >עדכן</button>


</div>


</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'addAttr',
    data() {
    return {
      attribute:{ key: '',val:'' },
    }
    },
    props: { 
      index:Number
    },
     methods: {
        save(){
        this.ADD_ATTRIBUTE_NEW_CONTACT(this.attribute);
        this.attribute.key='';
        this.attribute.val='';
      },
    
      update(index,attribute){
        var attribute_update={index:index,key:attribute.key,value:attribute.val};
        this.ADD_ATTRIBUTE_OLD_CONTACT(attribute_update);
        this.attribute.key='';
        this.attribute.val='';
      },
      ...mapMutations(['ADD_ATTRIBUTE_NEW_CONTACT']),
      ...mapMutations(['ADD_ATTRIBUTE_OLD_CONTACT']),
  }
  
}
</script>

<style scoped>
</style>


