function navigateToPage() {
    var select = document.getElementById("Categories");
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

function inputuser(){
  var username = document.getElementById("username").value
  alert("Welcome " + username + "!")
  window.location.href = "pages/home/homepage.html";
}

// a function when user hover to the image, the image will be expand
function expandFunc(img){
  var image = document.getElementById(img)
  // image.style.width="500px"
  image.style.height="300px"
  image.style.border="green solid 4px"
}

function normalFunc(img){
  var image = document.getElementById(img)
  image.style.width="100%"
  image.style.height="231.8px"
  image.style.border=""
}


function toggleSlideMenu() {
  var sideMenu = document.getElementById("sideMenu");
  if (sideMenu.style.left === "0px") {
      sideMenu.style.left = "-100%";
  
  } else {
      sideMenu.style.left = "0px";
  }
}


// a function to add a review
// using createElement()
function addReviews() {
  // Create review elements
  const reviewContainer = document.createElement("div");
  const reviewName = document.createElement("h2");
  const rating = document.createElement("p");
  const review = document.createElement("p");

  // Get the reviewer's name, review text, and rating from input fields
  const nameOfReviewer = document.getElementById("reviewName").value;
  const aboutReview = document.getElementById("review").value;
  const ratingValue = document.getElementById("rating").value;

  // Set attributes for the review container
  reviewContainer.setAttribute("class", "box");
  reviewContainer.setAttribute("id", "details");

  // Append the review container to an existing container on the page
  const container = document.getElementById("review-container");
  container.appendChild(reviewContainer);

  // Set attributes for the reviewer name
  reviewName.setAttribute("class", "reviewNameTitle");
  // Append the reviewer name to the review container
  reviewName.textContent = nameOfReviewer;
  reviewContainer.appendChild(reviewName);

    // Set attributes for the review
    review.setAttribute("class","reviewStyle")
    // Append the review text to the review container
    review.textContent = `"${aboutReview}"`;
    reviewContainer.appendChild(review);

  // Set attributes for the rating
  rating.setAttribute("class","ratingStyle")

  // Append the reviewer rating to the review container
  rating.textContent = `Rating: ${ratingValue}`;
  reviewContainer.appendChild(rating);



  alert("Thank You For Your Review!");

  // Set the form elements to be disabled
  const reviewBorder = document.getElementById("review-border");
  reviewBorder.setAttribute("class", "hero");

  document.getElementById("reviewName").setAttribute("disabled", true);
  document.getElementById("rating").setAttribute("disabled", true);
  document.getElementById("review").setAttribute("disabled", true);
  document.getElementById("reviewSubmit").setAttribute("disabled", true);
}


function textActive(textId) {
  activeText = document.getElementById(textId)
  activeText.style.color = "#E23F3F";
}

function textDeactive(textId) {
  activeText = document.getElementById(textId)
  activeText.style.color = "rgb(66, 66, 66)";
}
