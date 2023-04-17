const accordionButtonNav = document.querySelector('.accordion__button--nav');
const accordionButtonAddress = document.querySelector('.accordion__button--nav');

const deleteFocus = () => {
  let innerWidth = window.innerWidth;

  if (innerWidth >= 769) {
    accordionButtonNav.setAttribute('tabindex', '-1');
    accordionButtonAddress.setAttribute('tabindex', '-1');
  }
};

export {deleteFocus};
