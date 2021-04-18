// This initialization requires that this script is loaded with `defer`
const navElement = document.querySelector("#navbar");

// Navigation element modification through scrolling
function scrollFunction() {
  if (document.documentElement.scrollTop | (document.body.scrollTop > 0)) {
    navElement.classList.add("nav-scroll");
  } else {
    navElement.classList.remove("nav-scroll");
  }
}

function checkSize() {
  var windSize = window.innerWidth;
  return windSize;
}

function newsSectionStyle() {
  const isNewSection = document.location.pathname.includes("noticias");
  var isMediumSize = checkSize() <= 768;
  if (isNewSection && isMediumSize) {
    console.log('isMediumSize', isMediumSize);
    navElement.classList.remove("pos-fixed")
    navElement.classList.add("pos-initial");
  } else {
    navElement.classList.add("pos-fixed");
    navElement.classList.remove("pos-initial");
  }
}

// Init call
function loadEvent() {
  document.addEventListener("scroll", scrollFunction);
  const wrapper = document.getElementById("wrapper");
  wrapper.classList.add("show");
  newsSectionStyle();
}

window.addEventListener("load", loadEvent);
window.addEventListener('resize', newsSectionStyle);