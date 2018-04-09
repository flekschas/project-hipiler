import mediumZoom from 'medium-zoom';

import styles from './index.scss';  // eslint-disable-line

mediumZoom('.zoomable', { margin: 48 });

const figTeaser = document.getElementById('fig-teaser');
const demoLink = document.getElementById('demo-link');
const figTeaserClass = figTeaser.getAttribute('class');

demoLink.addEventListener('mouseenter', () => {
  figTeaser.className = `${figTeaserClass} active`;
});
demoLink.addEventListener('mouseleave', () => {
  figTeaser.className = figTeaserClass;
});

setTimeout(() => {
  figTeaser.play();
}, 5000);
