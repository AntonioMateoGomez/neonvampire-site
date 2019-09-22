// Init call
function loadEvent() {

  // news newsFeature
  const newsFeature = document.getElementById('feature-content-news');
  const newsFeatureBefore = document.getElementById('feature-news');

  newsFeature.addEventListener('mouseenter', () => {
      newsFeatureBefore.style.opacity = 'unset';
  });

  newsFeature.addEventListener('mouseleave', () => {
      newsFeatureBefore.style.opacity = 0.6;
  });

  // music newsFeature
  const musicFeature = document.getElementById('feature-content-music');
  const musicFeatureBefore = document.getElementById('feature-music');

  musicFeature.addEventListener('mouseenter', () => {
      musicFeatureBefore.style.opacity = 'unset';
  });

  musicFeature.addEventListener('mouseleave', () => {
      musicFeatureBefore.style.opacity = 0.6;
  });

  // contact newsFeature
  const contactFeature = document.getElementById('feature-content-contact');
  const contactFeatureBefore = document.getElementById('feature-contact');

  contactFeature.addEventListener('mouseenter', () => {
      contactFeatureBefore.style.opacity = 'unset';
  });

  contactFeature.addEventListener('mouseleave', () => {
      contactFeatureBefore.style.opacity = 0.6;
  });

  // media newsFeature
  const mediaFeature = document.getElementById('feature-content-media');
  const mediaFeatureBefore = document.getElementById('feature-media');

  mediaFeature.addEventListener('mouseenter', () => {
      mediaFeatureBefore.style.opacity = 'unset';
  });

  mediaFeature.addEventListener('mouseleave', () => {
      mediaFeatureBefore.style.opacity = 0.6;
  });

  // document.getElementById('main-section').scrollIntoView({
  //   behavior: 'smooth'
  // });

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
