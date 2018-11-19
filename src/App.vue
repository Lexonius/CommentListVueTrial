<template>
  <div id="app">
    <div class="wrapper">
      <div class="appBlock appBlock_left">
        <!-- кастомное событие на инпуты -->
        <form-inputs/>
        <removed-comments/>
      </div>
      <div class="appBlock appBlock_rigth">
        <!-- прокидываем в наш компонент added-comments наш массив addedComments -->
        <added-comments/>
        <button @click="saveComment" class="button button__text">Save comments</button>
      </div>      
    </div>
  </div>
</template>

<script>
import FormInputs from "./components/FormInputs.vue";
import RemovedComments from "./components/RemovedComments.vue";
import AddedComments from "./components/AddedComments.vue";

export default {
  name: "app",
  components: {
    "form-inputs": FormInputs,
    "added-comments": AddedComments,
    "removed-comments": RemovedComments
  },
  data() {
    return {};
  },
  methods: {
    saveComment() {
      this.$store.commit("saveComment");
    }
  }
};
</script>

<style>
#app {
    display: flex;
    justify-content: center;
    margin-top: 7%;
}

.wrapper {
  display: flex;
  width: 80%;
  height: 750px;
}

.appBlock_left {
  width: 25%;
  display: flex;
  flex-direction: column;
}

.appBlock_rigth {
  width: 75%;
  margin-left: 1%;
}

</style>
