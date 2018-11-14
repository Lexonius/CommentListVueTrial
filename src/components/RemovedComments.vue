<template>
    <div class ="appBlock_left__elem_bottom">
        <ul v-if="removedComments.length" class ="appBlock__list">
            <removed-comment v-for="elem in removedComments" 
            :key="elem.id" :removeComment="elem"
            @onAddReversesComment="addReverseComment"
            :removed-comments='removedComments'
            />
        </ul>
    <div v-else>Изменений нет</div>
    </div>
</template>

<script>
import RemovedComment from "./RemovedComment.vue";

export default {
  name: "RemovedComments",
  props: ["removed-comments"],
  components: {
    RemovedComment
  },
  methods: {
    addReverseComment(id) {
      this.$emit("addReverseCommentHandler", id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.appBlock_left__elem_bottom {
  border: 3px solid rgb(107, 203, 182);
  margin-top: 2%;
  height: 545px;
  border-radius: 5px;
  overflow: auto;
}

.appBlock__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  border-width: 1px 1px 1px 2px;
  border-color: #6bcbb6;
  background-color: #6bcbb6;
}
</style>