<template>
  <div class ="appBlock_left__elem_top">
    <input class="appBlock_left__input" 
      v-bind:class="{ 'text-danger': hasErrorName }" 
      v-model="name" placeholder="Ваше имя" 
      @keydown="removeColorNameInput">
    <input class ="appBlock_left__input" 
      v-bind:class="{ 'text-danger': hasErrorComment }" 
      v-model="commentText" placeholder="Комментарий" 
      @keydown="removeColorCommentInput">
    <!-- по клику запускается addComment из methods -->
    <button @click="addComment" class="button button__text">Add comment</button>
    <div v-if="errors.length" class="appBlock_left__elem_error text">
        <p class="title_error"> Необходимо заполнить поля:</p>
        <ul class="list_error">
          <li v-for="elem in errors"> {{elem}} </li>
        </ul>
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      commentText: "",
      hasErrorName: false,
      hasErrorComment: false,
      errors: []
    };
  },
  methods: {
    addComment(e) {
      const now = new Date();
      //наше пользовательское событие onInputData, по которому создается объект
      if (this.name && this.commentText) {
        this.errors = [];
        this.$store.state.hasError = false;
        let comment = {
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
          id: Date.now()
        };
        this.name = "";
        this.commentText = "";
        this.$store.commit("addComment", comment);
        return;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Ваше имя.");
        this.hasErrorName = true;
        this.$store.state.hasError = true;
      }

      if (!this.commentText) {
        this.errors.push("Ваш комментарий.");
        this.hasErrorComment = true;
        this.$store.state.hasError = true;
      }
    },
    removeColorNameInput() {
      this.hasErrorName = false;
    },
    removeColorCommentInput() {
      this.hasErrorComment = false;
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
  font-family: Arial, Helvetica, sans-serif;
}

.appBlock_left__elem_top {
  display: flex;
  flex-direction: column;
}

.text-danger {
  width: 98%;
  height: 30px;
  border-radius: 5px;
  border: 3px solid #be4f4f;
  outline: none;
  transition: 0.5s;
  text-align: center;
  margin-bottom: 2%;
}

.button__text {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}

.appBlock_left__elem_error {
  border: 3px solid #be4f4f;
  border-radius: 5px;
  margin-top: 2%;
}

.list_error{
  list-style: none;
}

.title_error{
  text-align: center;

}
</style>
