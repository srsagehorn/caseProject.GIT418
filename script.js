// sets and array for priority levels to loop through later
const levels = ["high", "mid", "low"]

// establishes class
class ToDoItem {
    constructor(title, category, priority) {
      this.title = title;
      this.category = category;
      this.priority = priority;
    }
  }

// adds event listener to o buttoon
$("#todobtn").on('click', function (event) {
event.preventDefault()
// setting variable from the input values (both selected and typed in) for the constructor
const title = $("#title").val()
const category = $("#category").val()
levels.forEach(pri=> {
    if($('#' + pri).is(':checked')) {
        priority = pri
    }
})
// create a new class instance
var newItem = new ToDoItem (title, category, priority)

// adds the new class content underneath the respective priority section
levels.forEach(lev => {
    if (newItem.priority == lev) {
        $("#add"+ lev).before(`<tr class = ${lev}>
        <td>${newItem.title}</td>
        <td>${newItem.category = newItem.category.charAt(0).toUpperCase() + newItem.category.slice(1)}</td>
        <td>${newItem.priority.charAt(0).toUpperCase() + newItem.priority.slice(1)}</td>
        </tr>`)
        }
})
})