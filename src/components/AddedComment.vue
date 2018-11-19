<template>
  <li class ="list__item">
      <img src="../assets/usuario.jpeg" class ="avatar__img"> 
    <div class ="list__item_center">
      <div class ="list__item_center_top">
        <div class="text">
          {{ comment.name }}
        </div>
          <div class="text">
            {{ comment.date.weekDay }}.
            {{ comment.date.month }}.
            {{ comment.date.year }}
            {{ comment.date.hour }}:
            {{ comment.date.minutes }}
          </div>
      </div>
      <div class="list__item_center_bottom text">
        {{ comment.comment }}
      </div>
    </div>
    <div class ="list__item_right">
      <img src="../assets/remove.png" @click="removeComment(comment.id)" class ="list__item_button">
    </div>
    <div v-bind:class="{ 'list__item__line_bottom': this.$store.state.bottomLine}"></div>
  </li>
</template>

<script>
export default {
  name: "AddedComment",
  props: ["comment"],
  methods: {
    removeComment(commentId) {
      this.$store.commit("removeComment", commentId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.avatar__img {
  width: 100px;
}

.text {
  font-family: Arial, Helvetica, sans-serif;
  color: gray;
  font-size: 80%;
}
</style>