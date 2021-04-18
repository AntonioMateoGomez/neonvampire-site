// This initialization requires that this script is loaded with `defer`
const navElement = document.querySelector('#navbar');

// Navigation element modification through scrolling
function scrollFunction() {
  if (document.documentElement.scrollTop | document.body.scrollTop > 0) {
    navElement.classList.add("nav-scroll");
  } else {
    navElement.classList.remove("nav-scroll");
  }
}

// Init call
function loadEvent() {
  document.addEventListener("scroll", scrollFunction);
  const wrapper = document.getElementById("wrapper");
  wrapper.classList.add("show");
}

window.addEventListener("load", loadEvent);