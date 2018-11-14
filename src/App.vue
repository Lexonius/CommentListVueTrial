<template>
  <div id="app">
    <div class="wrapper">
      <div class="appBlock appBlock_left">
        <!-- кастомное событие на инпуты -->
        <form-inputs @onInputData="addCommentHandler" />
        <removed-comments :removed-comments="removedComments" @addReverseCommentHandler="addReverseCommentHandler"/>
      </div>
      <div class="appBlock appBlock_rigth">
        <!-- прокидываем в наш компонент added-comments наш массив addedComments -->
        <added-comments :added-comments="addedComments" @removeCommentHandler="removeCommentHandler"/>
        <button @click="saveComment" class="button">save comment</button>
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
    return {
      //массив с добавленными комментариями
      addedComments: [],
      //массив с удаленными комментариями
      removedComments: []
    };
  },
  methods: {
    addCommentHandler(comment) {
      this.addedComments.push(comment);
    },

    removeCommentHandler(id) {
      const nowRemove = new Date();
      const commentIndex = this.addedComments.findIndex(
        a => a.id === Number(id)
      );
      let removeComment = this.addedComments.splice(commentIndex, 1);
      this.removedComments.push(removeComment[0]);
    },

    addReverseCommentHandler(id) {
      const nowRemove = new Date();
      const commentIndex = this.removedComments.findIndex(
        a => a.id === Number(id)
      );
      let addReverseComment = this.removedComments.splice(commentIndex, 1);
      this.addedComments.push(addReverseComment[0]);
    },

    saveComment() {
      localStorage.setItem(
        "store",
        JSON.stringify({
          commList: this.addedComments,
          commRemovedList: this.removedComments
        })
      );
      alert("OK");
    }
  },
  
  created() {
    if (localStorage.getItem("store")) {
      let commentParse = JSON.parse(localStorage.getItem("store"));
      this.addedComments = commentParse.commList;
      this.removedComments = commentParse.commRemovedList;
      console.log();
      
    }
  }
};
</script>

<style>
#app {
  padding: 10%;
}
.wrapper {
  display: flex;
  width: 100%;
}
.appBlock_left {
  width: 25%;
}
.appBlock_rigth {
  width: 75%;
  margin-left: 1%;
}
</style>
