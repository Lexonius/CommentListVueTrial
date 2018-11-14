<template>
  <div class ="appBlock_left__elem_top">
    <input class="appBlock_left__input" ref='nameInput' v-model="name" placeholder="Ваше имя">
    <input class ="appBlock_left__input" v-model="commentText" placeholder="Комментарий">
    <!-- по клику запускается addComment из methods -->
    <button @click="addComment" class="button">Add comment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      commentText: ""
    };
  },
  methods: {
    addComment() {
      const now = new Date();
      //наше пользовательское событие onInputData, по которому создается объект
      if (!this.name || !this.commentText) {
        // this.vm.$refs.nameInput;
        console.log(this.$refs.nameInput.style);
        
        
        return;
      } else {
        this.$emit("onInputData", {
          avatar: "",
          name: this.name,
          comment: this.commentText,
          date: {
            weekDay: now.getDate(),
            month: now.getMonth(),
            year: now.getFullYear(),
            hour: now.getHours(),
            minutes: now.getMinutes()
          },
          id: Date.now(),
          remove: ""
        });
        this.name = "";
        this.commentText = "";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.appBlock_left__input {
  width: 98%;
  height: 30px;
  border-radius: 5px;
  border: 3px solid #6bcbb6;
  outline: none;
  transition: 0.5s;
  text-align: center;
  margin-bottom: 2%;
}

.button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  color: #ffffff;
  background-color: #6bcbb6;
  border-radius: 5px;
  outline: none;
  transition: 0.5s;
  width: 100%;
  height: 40px;
  justify-content: flex-end;
}

.appBlock_left__elem_top {
  display: flex;
  flex-direction: column;
}
</style>
