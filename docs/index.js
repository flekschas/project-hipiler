!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=3)}([,function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i=["IMG"],r=[27,81],d=function(e){return-1<i.indexOf(e.tagName)},a=function(e){return e.naturalWidth!==e.width},l=function(e){return e&&1===e.nodeType},c=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=t.margin,c=void 0===o?0:o,m=t.background,s=void 0===m?"#fff":m,u=t.scrollOffset,f=void 0===u?48:u,p=t.metaClick,v=t.container,g=t.template,h=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{bubbles:!1,cancelable:!1,detail:void 0};if("function"==typeof window.CustomEvent)return new CustomEvent(e,t);var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o},y=function(){if(T.original){if(T.original.dispatchEvent(h("show")),N=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,B=!0,T.zoomed=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+l+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d}(T.original),document.body.appendChild(A),O.template){var e=l(O.template)?O.template:document.querySelector(O.template);T.template=document.createElement("div"),T.template.appendChild(e.content.cloneNode(!0)),document.body.appendChild(T.template)}if(document.body.appendChild(T.zoomed),requestAnimationFrame(function(){document.body.classList.add("medium-zoom--open")}),T.original.style.visibility="hidden",T.zoomed.classList.add("medium-zoom-image--open"),T.zoomed.addEventListener("click",b),T.zoomed.addEventListener("transitionend",w),T.original.getAttribute("data-zoom-target")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.src=T.zoomed.getAttribute("data-zoom-target"),T.zoomedHd.onerror=function(){clearInterval(t),console.error("Unable to reach the zoom image target "+T.zoomedHd.src),T.zoomedHd=null,H()};var t=setInterval(function(){T.zoomedHd.naturalWidth&&(clearInterval(t),T.zoomedHd.classList.add("medium-zoom-image--open"),T.zoomedHd.addEventListener("click",b),document.body.appendChild(T.zoomedHd),H())},10)}else H()}},b=function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,o=function(){B||!T.original||(T.original.dispatchEvent(h("hide")),B=!0,document.body.classList.remove("medium-zoom--open"),T.zoomed.style.transform="",T.zoomedHd&&(T.zoomedHd.style.transform="",T.zoomedHd.removeEventListener("click",e)),T.template&&(T.template.style.transition="opacity 150ms",T.template.style.opacity=0),T.zoomed.removeEventListener("click",e),T.zoomed.addEventListener("transitionend",L))};0<t?setTimeout(o,t):o()},z=function(e){e&&e.target?(T.original=e.target,y()):T.original?b():(T.original=x[0],y())},E=function(e){return(e.metaKey||e.ctrlKey)&&O.metaClick?window.open(e.target.getAttribute("data-original")||e.target.parentNode.href||e.target.src,"_blank"):(e.preventDefault(),void z(e))},w=function e(){B=!1,T.zoomed.removeEventListener("transitionend",e),T.original.dispatchEvent(h("shown"))},L=function e(){T.original&&(T.original.style.visibility="",document.body.removeChild(T.zoomed),T.zoomedHd&&document.body.removeChild(T.zoomedHd),document.body.removeChild(A),T.zoomed.classList.remove("medium-zoom-image--open"),T.template&&document.body.removeChild(T.template),B=!1,T.zoomed.removeEventListener("transitionend",e),T.original.dispatchEvent(h("hidden")),T.original=null,T.zoomed=null,T.zoomedHd=null,T.template=null)},C=function(){if(!B&&T.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(N-e)>O.scrollOffset&&b(150)}},k=function(e){-1<r.indexOf(e.keyCode||e.which)&&b()},H=function(){var e=Math.min;if(T.original){var t,o,i={width:window.innerWidth,height:window.innerHeight,left:0,top:0,right:0,bottom:0};if(O.container)if(O.container instanceof Object)n(i,O.container),t=i.width-i.left-i.right-2*O.margin,o=i.height-i.top-i.bottom-2*O.margin;else{var r=(l(O.container)?O.container:document.querySelector(O.container)).getBoundingClientRect(),d=r.width,a=r.height,c=r.left,m=r.top;n(i,{width:d,height:a,left:c,top:m})}t=t||i.width-2*O.margin,o=o||i.height-2*O.margin;var s=T.zoomedHd||T.original,u=s.naturalWidth,f=void 0===u?t:u,p=s.naturalHeight,v=void 0===p?o:p,g=s.getBoundingClientRect(),h=g.top,y=g.left,b=g.width,z=g.height,E=e(e(f,t)/b,e(v,o)/z)||1,w="scale("+E+") translate3d("+((t-b)/2-y+O.margin+i.left)/E+"px, "+((o-z)/2-h+O.margin+i.top)/E+"px, 0)";T.zoomed.style.transform=w,T.zoomedHd&&(T.zoomedHd.style.transform=w)}},O={margin:c,background:s,scrollOffset:f,metaClick:void 0===p||p,container:v,template:g};e instanceof Object&&n(O,e);var x=function(e){try{return Array.isArray(e)?e.filter(d):function(e){return NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e)}(e)?Array.apply(null,e).filter(d):l(e)?[e].filter(d):"string"==typeof e?Array.apply(null,document.querySelectorAll(e)).filter(d):Array.apply(null,document.querySelectorAll(i.map(function(e){return e.toLowerCase()}).join(","))).filter(a)}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList, an HTMLCollection or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}}(e),A=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.backgroundColor=e,t}(O.background),T={original:null,zoomed:null,zoomedHd:null,template:null},N=0,B=!1;return x.forEach(function(e){e.classList.add("medium-zoom-image"),e.addEventListener("click",E)}),A.addEventListener("click",b),document.addEventListener("scroll",C),document.addEventListener("keyup",k),window.addEventListener("resize",b),{show:z,hide:b,toggle:z,update:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e.background&&(A.style.backgroundColor=e.background),e.container&&e.container instanceof Object&&(e.container=n({},O.container,e.container)),n(O,e)},addEventListeners:function(e,t){x.forEach(function(o){o.addEventListener(e,t)})},detach:function(){T.zoomed&&b();var e=h("detach");x.forEach(function(t){t.classList.remove("medium-zoom-image"),t.removeEventListener("click",E),t.dispatchEvent(e)}),x.splice(0,x.length),A.removeEventListener("click",b),document.removeEventListener("scroll",C),document.removeEventListener("keyup",k),window.removeEventListener("resize",b)},images:x,options:O}},m=Object.freeze({default:c});!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--open .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s}.medium-zoom-image--open{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var s=m&&c||m;t.default=s},function(e,t,o){"use strict";var n=i(o(2));i(o(1));function i(e){return e&&e.__esModule?e:{default:e}}(0,n.default)(".zoomable",{margin:48});var r=document.getElementById("fig-teaser"),d=document.getElementById("demo-link"),a=document.getElementById("presentations"),l=document.getElementById("presentation-vis"),c=document.getElementById("presentation-bio"),m=document.getElementById("youtube"),s=document.getElementById("youtube-play"),u=r.getAttribute("class");d.addEventListener("mouseenter",function(){r.className=u+" active"}),d.addEventListener("mouseleave",function(){r.className=u});var f=0,p=!1,v=!1;function g(e,t,o){var n=document.createElement("iframe");n.src=t,n.className=o,n.setAttribute("allowfullscreen",""),n.setAttribute("scrolling","no"),n.setAttribute("frameborder","0"),e.appendChild(n)}window.addEventListener("scroll",function(){f=window.scrollY,p||(window.requestAnimationFrame(function(){f+(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)>=a.offsetTop-128&&!v&&(v=!0,g(l,"//speakerdeck.com/player/5dea5d1a5e8b459baf97bfb8a585fe56","presentation"),g(c,"//speakerdeck.com/player/d2ec2d11f6da4dee8ab07b5275f7e067","presentation")),p=!1}),p=!0)}),s.addEventListener("click",function(){g(m,"//www.youtube.com/embed/qoLqje5OYKg?rel=0&showinfo=0&autoplay=1"),m.removeChild(s)}),setTimeout(function(){r.play()},4e3)}]);