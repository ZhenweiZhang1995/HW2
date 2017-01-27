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
          favorite: this.newFavorite
        })
        this.newItemTitle = '';
        this.newItemContent = '';
        this.newFavorite = false;
      },
      editBtn() {
        alert("Still under constrection");
      },
      done(i) {
        i.finished = true;
      }
  },

  data: {
    newItemTitle: '',
    newItemContent: '',
    finished: false,
    newFavorite: false,
    editingItem: null,
    items: [{
      itemTitle: "Watch a movie",
      itemContent: "Zootopia on Sunday 6pm ",
      favorite: true,
      finished: false
    }, {
      itemTitle: "Finish STOR415 Homework",
      itemContent: "Finish your homework before you do anything else!!! ",
      favorite: false,
      finished: false
    }, {
      itemTitle: "Play Overwatch",
      itemContent: "OK Let's do it",
      favorite: false,
      finished: false
    }]
  }
  // methods: {
  //   cancel() {
  //     this.itemTitle = '';
  //     this.itemContent = '';
  //   }
  //
  //   editBtn() {
  //     alert("Still under constrection");
  //   }
  //   done() {
  //     alert("Still under constrection");
  //   }
  // }
});
