<template>
    <button @click="saveComment" class="styleButton">
      Сохранить изменения
    </button>
</template>

<script>
export default {
  name: 'addButtonComment',
  props:['addedComments', 'removed-comments'],
  methods: {
    saveComment(){
      console.log(addedComments);
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    
</style>