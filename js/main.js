// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  methods: {
    cancel() {
        this.newItemTitle = '';
        this.newItemContent = '';
      },
      addItem() {
        this.items.push({
          itemTitle: this.newItemTitle,
          itemContent: this.newItemContent,
          favorite: this.newFavorite,
          finished: false,
          editing: false
        })
        this.newItemTitle = '';
        this.newItemContent = '';
        this.newFavorite = false;
      },
      done(i) {
        i.finished = true;
      },
      editBtn(i) {
        // i.itemTitle = "";
        // i.itemContent = "";
        i.editing = true;
      },
      editStatus(i) {
        return i.editing;
      },
      finishEditBtn(i) {
        i.editing = false;
      }
  },

  data: {
    newItemTitle: '',
    newItemContent: '',
    finished: false,
    newFavorite: false,
    editing: false,
    items: [{
      itemTitle: "Watch a movie",
      itemContent: "Zootopia on Sunday 6pm ",
      favorite: true,
      finished: false,
      editing: false
    }, {
      itemTitle: "Finish STOR415 Homework",
      itemContent: "Finish your homework before you do anything else!!! ",
      favorite: false,
      finished: false,
      editing: false
    }, {
      itemTitle: "Play Overwatch",
      itemContent: "OK Let's do it",
      favorite: false,
      finished: false,
      editing: false,
    }]
  }
});
