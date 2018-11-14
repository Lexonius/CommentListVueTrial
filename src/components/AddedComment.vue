<template>
  <li class ="list__item">
      <img src="../assets/usuario.jpeg" class ="avatar__img"> 
    <div class ="list__item_center">
      <div class ="list__item_center_top">
        <div >
          {{ comment.name }}
        </div>
          <div>
            {{ comment.date.weekDay }}.
            {{ comment.date.month }}.
            {{ comment.date.year }}
            {{ comment.date.hour }}:
            {{ comment.date.minutes }}
          </div>
      </div>
      <div class="list__item_center_bottom">
        {{ comment.comment }}
      </div>
    </div>
    <div class ="list__item_right">
      <img src="../assets/remove.png" @click="removeComment(comment.id)" class ="list__item_button">
    </div>
  </li>
</template>

<script>
export default {
  name: "AddedComment",
  props: ["comment", "added-comments"],
  methods: {
    removeComment(commentId) {
      this.$emit("onRemoveComment", commentId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.avatar__img {
  width: 100px;
}
</style>