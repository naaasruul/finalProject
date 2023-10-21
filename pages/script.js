function navigateToPage() {
    var select = document.getElementById("attractions");
    var selectedOption = select.options[select.selectedIndex].value;
  
    if (selectedOption) {
      window.location.href = selectedOption;
    }
  }

var today = new Date();
var hh = today.getHours();
var mm = today.getMinutes();
var ss = today.getSeconds();
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();

document.getElementById("hour").innerHTML = hh;
document.getElementById("minute").innerHTML = mm;

document.getElementById("day").innerHTML = day
document.getElementById("month").innerHTML = month+1 //cause it start from 0
document.getElementById("year").innerHTML = year


// a function when user hover to the image, the image will be expand
function expandFunc(img){
  var image = document.getElementById(img)
  image.style.width="500px"
  image.style.height="300px"
  image.style.border="green solid 4px"
}

function normalFunc(img){
  var image = document.getElementById(img)
  image.style.width="100%"
  image.style.height="231.8px"
  image.style.border=""
}

function slideMenu(){
  var sideMenu = document.getElementById("sideMenu");
  sideMenu.style.left = "0";
}

function toggleSlideMenu() {
  var sideMenu = document.getElementById("sideMenu");
  if (sideMenu.style.left === "0px") {
      sideMenu.style.left = "-100%";
  
  } else {
      sideMenu.style.left = "0px";
  }
}



