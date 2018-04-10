import mediumZoom from 'medium-zoom';

import styles from './index.scss';  // eslint-disable-line

mediumZoom('.zoomable', { margin: 48 });

const figTeaser = document.getElementById('fig-teaser');
const demoLink = document.getElementById('demo-link');
const presentations = document.getElementById('presentations');
const presentationVis = document.getElementById('presentation-vis');
const presentationBio = document.getElementById('presentation-bio');
const youtube = document.getElementById('youtube');
const youtubePlay = document.getElementById('youtube-play');
const figTeaserClass = figTeaser.getAttribute('class');

demoLink.addEventListener('mouseenter', () => {
  figTeaser.className = `${figTeaserClass} active`;
});
demoLink.addEventListener('mouseleave', () => {
  figTeaser.className = figTeaserClass;
});

let lastKnownScrollPos = 0;
let ticking = false;
let presentationsAdded = false;

function injectIframe(el, src, className) {
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.className = className;
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('frameborder', '0');
  el.appendChild(iframe);
}

function addPresentations(scrollPos) {
  const winHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  if (
    scrollPos + winHeight >= presentations.offsetTop - 128 &&
    !presentationsAdded
  ) {
    presentationsAdded = true;
    injectIframe(
      presentationVis,
      '//speakerdeck.com/player/5dea5d1a5e8b459baf97bfb8a585fe56',
      'presentation',
    );
    injectIframe(
      presentationBio,
      '//speakerdeck.com/player/d2ec2d11f6da4dee8ab07b5275f7e067',
      'presentation',
    );
  }
}

window.addEventListener('scroll', () => {
  lastKnownScrollPos = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      addPresentations(lastKnownScrollPos);
      ticking = false;
    });
    ticking = true;
  }
});

youtubePlay.addEventListener('click', () => {
  injectIframe(
    youtube,
    '//www.youtube.com/embed/qoLqje5OYKg?rel=0&showinfo=0&autoplay=1',
  );
  youtube.removeChild(youtubePlay);
});

setTimeout(() => {
  figTeaser.play();
}, 4000);
