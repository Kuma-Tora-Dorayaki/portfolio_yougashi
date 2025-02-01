const navList = document.querySelector('.nav-list');
const navListItem = document.querySelectorAll('.nav-list-item');
const hamLineUpper = document.querySelector('.ham-line-upper');
const hamLineCenter = document.querySelector('.ham-line-center');
const hamLineBottom = document.querySelector('.ham-line-bottom');
const header = document.querySelector('header');
const shopName = document.querySelector('.shop-name');
const hamMenu = document.querySelector('#ham-menu');
const body = document.body;
const headerHeight = header.offsetHeight;

const menuOpenTime = 480;
const menuCloseTime = 480;

const menuOptionsOpen = {
  duration: menuOpenTime,
  easing: 'ease-out',
  fill: 'forwards',
};

const menuOptionsClose = {
  duration: menuCloseTime,
  easing: 'ease-in',
  fill: 'forwards',
  direction: 'reverse'
};

const menuAnimation = (menuOption) => {
  header.animate({
    height: ['40px', '100vh'],
    backgroundColor: ['#c97a2a','white'],
    zIndex: ['10', '100']
  }, menuOption);

  navList.animate({
    opacity: [0, 1],
    visibility: ['hidden', 'visible']
  }, menuOption);

  shopName.animate({
    color: ['#1E1C1C','#808080']
  }, menuOption);

  hamLineUpper.animate({
    rotate: ['0deg', '45deg'],
    translate: ['0 0','0px 8.6px'],
    backgroundColor: ['#1E1C1C','#808080']
  }, menuOption);

  hamLineCenter.animate({
    opacity: [1, 0]
  }, menuOption);

  hamLineBottom.animate({
    rotate: ['0deg', '-45deg'],
    translate: ['0 0','0px -8.6px'],
    backgroundColor: ['#1E1C1C','#808080']
  }, menuOption);

  body.animate({
    overflow: ['visible', 'hidden']
  }, menuOption);
};

// btn click =================================================
hamMenu.addEventListener('click', () => {
  if(hamMenu.classList.contains('menu-open')) {
    menuAnimation(menuOptionsOpen);
    hamMenu.classList.toggle('menu-open');
    shopName.classList.toggle('menu-open');
    navListItem.forEach((els) => {
      els.classList.remove('menu-close');
    });
  } else {
    menuAnimation(menuOptionsClose);
    hamMenu.classList.toggle('menu-open');
    shopName.classList.toggle('menu-open');
    navListItem.forEach((els) => {
      els.classList.add('menu-close');
    });
  }
});

//  smooth scroll function =================================
const smoothSc = (targetEle, Scdelay) => {
  setTimeout(() => {
    window.scrollTo({
      top: targetEle.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  }, Scdelay);
}

//  nav click ===============================================
navListItem.forEach((els) => {
  els.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = els.getAttribute('href').substring(1);
    const targetEle = document.getElementById(targetId);

    if(!els.classList.contains('menu-close')) {
      menuAnimation(menuOptionsClose);
      hamMenu.classList.toggle('menu-open');
      shopName.classList.toggle('menu-open');
      els.classList.add('menu-close');

      smoothSc(targetEle, menuCloseTime + 100);
    } else {
      smoothSc(targetEle, menuCloseTime / 2);
    }
  });
});

//  shop-name click ===============================================
shopName.addEventListener('click', (event) => {
  event.preventDefault();
  const targetEle = document.querySelector('#main-visual');

  if(!shopName.classList.contains('menu-open')) {
    menuAnimation(menuOptionsClose);
    hamMenu.classList.toggle('menu-open');
    shopName.classList.toggle('menu-open');
    
    smoothSc(targetEle, menuCloseTime);
  } else {
    smoothSc(targetEle, menuCloseTime);
  }
});

