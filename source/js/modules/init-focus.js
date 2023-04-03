const userName = document.querySelector('#modal-user-name');
const toogleModal = document.querySelector('.header__button');

const initFocus = () => {
  toogleModal.addEventListener('click', function () {
    const addFocus = () => {
      userName.focus();
    };

    setTimeout(addFocus, 500);
  });
};

export {initFocus};
