<template>
<div>
<p>יש להכניס מאפיין עם ערך  ולהוסיף למשתמש ניתן להוסיף מספר ערכים</p>
    <input name='key' type='text' placeholder='key'  v-model="attribute.key"/>
    <input name='val' type='text' placeholder='value'  v-model="attribute.val"/>
    <button @click="ADD_ATTRIBUTE_NEW_CONTACT(attribute)" >הוסף</button>

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
     methods: {
      ...mapMutations(['ADD_ATTRIBUTE_NEW_CONTACT']),
  }
  
}
</script>

<style scoped>
</style>


