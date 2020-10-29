// sets and array for priority levels and times to loop through later
const levels = ["high", "mid", "low"]
const times = ["morning", "mid-Day", "evening", "night", "no-Deadline"]

// establishes class
class ToDoItem {
    constructor(title, time, category, priority) {
      this.title = title;
      this.time = time;
      this.category = category;
      this.priority = priority;
    }
  }

// adds event listener to o button
$("#todobtn").on('click', function (event) {
event.preventDefault()
// setting variable from the input values (both selected and typed in) for the constructor
const title = $("#title").val()
const category = $("#category").val()
let time = []
// console.log(category)

// stops it from running if there is no title or category and alerts use\er
if (!title) {
alert("Please enter the name of your to do list item")
return
}

if (category == "default") {
  alert("Please select a category for your to do list item")
  return
}

// goes through each priority and sees if they are checked
levels.forEach(pri=> {
  if($('#' + pri).is(':checked')) {
      priority = pri
  }
})

// 
times.forEach(era=> {
    if($('#' + era).is(':checked')) {
        time.push(era.charAt(0).toUpperCase() + era.slice(1))
    }
})

// create a new class instance
var newItem = new ToDoItem (title, time, category, priority)

console.log(newItem)
// adds the new class content underneath the respective priority section
levels.forEach(lev => {
    if (newItem.priority == lev) {
        $("#add"+ lev).before(`<tr class = ${lev}>
        <td>${newItem.title}</td>
        <td>${newItem.time.toString().replace(",", " to ")}</td>
        <td>${newItem.category = newItem.category.charAt(0).toUpperCase() + newItem.category.slice(1)}</td>
        <td>${newItem.priority.charAt(0).toUpperCase() + newItem.priority.slice(1)}</td>
        </tr>`)
        }
})
})