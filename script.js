// sets and array for priority levels to loop through later
const levels = ["high", "mid", "low"]

// establishes class
class toDoItem {
    constructor(title, category, priority) {
      this.title = title;
      this.category = category;
      this.priority = priority;
    }
  }

// adds event listener to o buttoon
$("#todobtn").on('click', function (event) {
event.preventDefault()
const title = $("#title").val()
const category = $("#category").val()
levels.forEach(pri=> {
    if($('#' + pri).is(':checked')) {
        priority = pri
    }
})

var newItem = new toDoItem (title, category, priority)

console.log(newItem.priority)

if (newItem.priority == "high") {
$("#addhigh").before(`<tr class = "high">
<td>${newItem.title}</td>
<td>${newItem.category = newItem.category.charAt(0).toUpperCase() + newItem.category.slice(1)}</td>
<td>${newItem.priority.charAt(0).toUpperCase() + newItem.priority.slice(1)}</td>
</tr>`)
}
if (newItem.priority == "mid") {
$("#addmid").before(`<tr class = "mid">
<td>${newItem.title}</td>
<td>${newItem.category = newItem.category.charAt(0).toUpperCase() + newItem.category.slice(1)}</td>
<td>${newItem.priority.charAt(0).toUpperCase() + newItem.priority.slice(1)}</td>
</tr>`)
}
if (newItem.priority == "low") {
$("#addlow").before(`<tr class = "low">
<td>${newItem.title}</td>
<td>${newItem.category = newItem.category.charAt(0).toUpperCase() + newItem.category.slice(1)}</td>
<td>${newItem.priority.charAt(0).toUpperCase() + newItem.priority.slice(1)}</td>
</tr>`)
}
else {console.log("error")}
})