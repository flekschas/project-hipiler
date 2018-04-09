import mediumZoom from 'medium-zoom';

import styles from './index.scss';  // eslint-disable-line

mediumZoom('.zoomable', { margin: 48 });

setTimeout(() => {
  document.getElementById('fig-teaser').play();
}, 5000);
