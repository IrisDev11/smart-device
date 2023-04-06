import {initPhoneInput} from './init-tel-input';

const modalPhone = document.querySelector('.js-modal-phone');
const feedbackPhone = document.querySelector('.js-feedback-phone');

const validateInputPhone = () => {
  initPhoneInput(modalPhone);
  initPhoneInput(feedbackPhone);
};

export {validateInputPhone};
