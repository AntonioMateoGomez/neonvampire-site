// const pointToFeature = document.getElementById("point-to-feature");
// // const arrowEl = document.getElementById("arrow-element");

// // Init call
// function loadEvent() {
//   // Controls the point to scroll to
//   pointToFeature.addEventListener("click", () => {
//     // const isUp = arrowEl.classList.contains("turn");

//     const id = "main-section";
//     const yOffset = -85;
//     const element = document.getElementById(id);
//     const y = isUp
//       ? 0
//       : element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });

//     arrowEl.classList.toggle("turn");
//   });
// }

// // Controls the arrow position
// function scrollEvent() {
//   const docHeight = document.body.offsetHeight;
//   const sectionHeight = document.getElementById("main-section").clientHeight;
//   const footerHeight = document.getElementById("footer").clientHeight;
//   const isUp = arrowEl.classList.contains("turn");
//   const isTop =
//     document.body.clientHeight == window.pageYOffset + window.innerHeight;
//   const isBottom =
//     window.innerHeight + window.scrollY >=
//     docHeight + sectionHeight + footerHeight;

//   if (isUp && isTop) {
//     arrowEl.classList.toggle("turn");
//   } else if (!isUp && isBottom) {
//     arrowEl.classList.toggle("turn");
//   }
// }

// // Attach the functions to each event they are interested in
// window.addEventListener("load", loadEvent);
// window.addEventListener("scroll", scrollEvent);
