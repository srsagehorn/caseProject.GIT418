const level = ["high", "mid", "low"]
let high = []
let mid = []
let low = []

class toDoItem {
    constructor(title, category, priority) {
      this.title = title;
      this.category = category;
      this.priority = priority;
    }
  }

// var hello = new Rectangle (7, 10)

$("#todobtn").on('click', function (event) {
event.preventDefault()
level.forEach( e => {if ($("#" + e).checked) {
console.log(e)
}
})
const title = $("#title").val
const category = $("#category").val()
const priority = $("#")

var newItem = new toDoItem (title, category, priority)
console.log(newItem)
})