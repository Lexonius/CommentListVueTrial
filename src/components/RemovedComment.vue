<template>
<li class ="list__item">
    <div class ="list__item_center">
      <div class ="list__item_center_top text">
        <div>
          {{ removeComment.name }}
        </div>
          <div>
            {{ removeComment.date.weekDay }}.
            {{ removeComment.date.month }}.
            {{ removeComment.date.year }}
            {{ removeComment.date.hour }}:
            {{ removeComment.date.minutes }}
          </div>
      </div>
      <div class="list__item_center_bottom text">
        {{ removeComment.comment }}
      </div>
    </div>
    <div class ="list__item_right">
      <img src="../assets/add.png" @click="addReverseComment(removeComment.id)" class ="list__item_button">
    </div>
    <!-- <div v-bind:class="{ 'list__item__line_bottom': this.$store.state.bottomLine}">  -->
    <!-- </div>  -->
</li>    
</template>

<script>
export default {
  name: "RemovedComment",
  props: ["removeComment"],
  methods: {
    addReverseComment(removeCommentId) {
      this.$store.commit("addReverseComment", removeCommentId);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.list__item_center_top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.list__item_center {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
}

.list__item_right {
  display: flex;
  align-items: center;
}

.list__item_button {
  height: 20px;
}

.list__item {
  display: flex;
  justify-content: space-between;
  padding: 1%;
  height: 15%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #6bcbb6;
}
</style>