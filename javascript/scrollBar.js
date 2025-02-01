const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

const setScrollBarWidth = () => {
  document.documentElement.style.setProperty('--scrollbar', '${scrollBarWidth}px');
};

window.addEventListener('load',setScrollBarWidth);

window.addEventListener('resize',setScrollBarWidth); 