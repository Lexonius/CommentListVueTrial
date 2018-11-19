<template>
    <div class ="appBlock_left__elem_bottom" 
    v-bind:class="{ 'block-danger': this.$store.state.hasError}">
        <ul v-if="removedComments.length" class ="appBlock__list">
            <removed-comment v-for="elem in removedComments" 
            :key="elem.id" :removeComment="elem"
            />
        </ul>
    <div v-else class="text placeholder">Изменений нет</div>
    </div>
</template>

<script>
import RemovedComment from "./RemovedComment.vue";

export default {
  name: "RemovedComments",
  components: {
    RemovedComment
  },
  methods: {},
  computed: {
    removedComments: function() {
      return this.$store.state.removedComments;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.appBlock_left__elem_bottom {
  border: 3px solid rgb(107, 203, 182);
  margin-top: 2%;
  border-radius: 5px;
  overflow: auto;
  height: 100%;
}

.appBlock__list {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.block-danger {
  border: 3px solid rgb(107, 203, 182);
  margin-top: 2%;
  border-radius: 5px;
  overflow: auto;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-thumb {
  border-width: 1px 1px 1px 2px;
  border-color: #6bcbb6;
  background-color: #6bcbb6;
}

.appBlock__list :last-child {
  border-bottom-style: none;
}
</style>