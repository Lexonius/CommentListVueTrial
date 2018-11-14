<template>
  <div class ="appBlock_right__wrap">
      <ul v-if="addedComments.length" class ="appBlock__list">
        <added-comment v-for="item in addedComments" 
          :key="item.id" :comment="item"
          @onRemoveComment="removeComment"
          :added-comments="addedComments"/>
      </ul>
      <div v-else>Комментарии отсутствуют</div>
  </div>
</template>

<script>
import AddedComment from "./AddedComment.vue";

export default {
  name: "addedComments",
  props: ["added-comments"],
  components: {
    AddedComment
  },
  methods: {
    removeComment(id) {
      this.$emit("removeCommentHandler", id);
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
</style>