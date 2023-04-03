const toggle = document.querySelector('.about-company__button');
const textMobileHidden = document.querySelector('.about-company__text-mobile-hidden');
const textHidden = document.querySelector('.about-company__text-hidden');

const switchesHiddenText = () => {

  toggle.addEventListener('click', () => {
    textMobileHidden.classList.toggle('about-company__text-mobile-hidden--opened');
    textHidden.classList.toggle('about-company__text-hidden--opened');

    if (toggle.innerText.toLowerCase() === 'подробнее') {
      toggle.innerText = 'Свернуть';
    } else {
      toggle.innerText = 'Подробнее';
    }
  });
};

export {switchesHiddenText};
