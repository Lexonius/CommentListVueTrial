<template>
  <div class ="appBlock_right__wrap">
      <ul v-if="addedComments.length" class ="appBlock__list">
        <added-comment v-for="item in addedComments" 
          :key="item.id" :comment="item"
          />
      </ul>
      <div v-else class="text placeholder">Комментарии отсутствуют</div>
  </div>
</template>

<script>
import AddedComment from "./AddedComment.vue";

export default {
  name: "addedComments",
  components: {
    AddedComment
  },

  computed: {
    addedComments: function() {
      return this.$store.state.addedComments;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.appBlock_right__wrap {
  border: 3px solid #6bcbb6;
  border-radius: 5px;
  height: 630px;
  margin-bottom: 1%;
  overflow: auto;
}

.placeholder {
  text-align: center;
  padding-top: 1%;
}
</style>