// Init call
function loadEvent() {

  const pointToFeature = document.getElementById('point-to-feature');

  pointToFeature.addEventListener('click', () => {
    console.log('in');
    document.querySelector('#main-section').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Attach the functions to each event they are interested in
window.addEventListener("load", loadEvent);