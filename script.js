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

 // This array is for the latitude and longitude of the desired display location
var coordsArray = [];
// get loongitude, latitude and altitude form user
navigator.geolocation.getCurrentPosition(function (position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let alt = position.coords.altitude;
  // put these data points as text on the page
  $("#lat").text(`latitude: ${lat.toFixed(2)}`)
  $("#long").text(`longitude: ${long.toFixed(2)}`)
  $("#alt").text(`altitude: ${alt}`)
  // push the lat and long to the array for the map
  coordsArray.push(lat, long)
  //Creates the map object with the intended coordinates and sets zoom level to 14
  if (coordsArray) {
  console.log(coordsArray)
  var map = L.map('map').setView(coordsArray, 14);
  }

  //Creates the required WebGL metadata and chains it to the map object
  var gl = L.mapboxGL({
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
      accessToken: 'not-needed',
      style: 'https://api.maptiler.com/maps/streets/style.json?key=qZjWTwtNTmBxDi3ZpTB5'
  }).addTo(map);
  //Creates the marker for the intended coordinates and chains it to the map object 
  var marker = L.marker(coordsArray).addTo(map);
});

// create the url and api key variables
var apiKey = "ucAPRqoFLqGb3Z3lOTqlwi4XB1ZXbznsT6gSVdim"
var queryURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey

$.ajax({
  // tell ajax to get the url info then place the data into a reponse variable
  url: queryURL,
  method: "GET",
}).then(function (response) {
  // set the title, image src attribute, and image caption into the html
  $("#title").text(response.title)
  $("#pic").attr("src", response.hdurl)
  $("#caption").text(response.explanation)
})

// start off with hidden not true
let hidden = false

// add a show hide function to the square
$("#hide").on("click", function () {
  // if it is already hidden, show the square, change the button text to find and set hidden to false
  if (hidden) {
  $("#square").show()
  $("#hide").text("Hide")
  hidden = false
  }
  // do the opposite if hidden is false
  else {
    $("#square").hide()
    $("#hide").text("Find")
    hidden = true
  }
})

$("#fly").on("click", function () {
    // animate the plane to fly to the right and fade out in 2 seconds
    $("#plane").animate({ 
      right: "-=600px",
    }, "fast" );
    $("#plane").css({'opacity' : `0`, 'transition-duration' : '2s'})
    // after 2 seconds return it back to its original spot and opacity
    setTimeout(
      function() 
      {
        $("#plane").css({'opacity' : `1`, 'right' : '0', 'transition-duration' : ''})
      }, 2000);
})

// set a starting number of rotations to multiply 360 by later
let rotations = 1

$("#spin").on("click", function () {
  // add a css rotation and transitioon speed fo 1 second
  $("#spiral").css({'transform' : `rotate(${360*rotations}deg)`, 'transition-duration' : '1s'});
  // then add one to the rotation so it can rotate multiple times
  rotations++
})