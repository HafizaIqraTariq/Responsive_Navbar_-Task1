let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});

function changeBg(){
  var navBar = document.getElementById('navscroll')
  var scrollValue = window.scrollY;
  if(scrollValue<450){
    navBar.classList.remove('blue')
  } else{
    navBar.classList.add('blue');
  }
  
}

window.addEventListener('scroll', changeBg)
