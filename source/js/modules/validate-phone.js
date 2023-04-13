import {createsMaskPhone} from './creates-mask-phone';

const modalPhone = document.querySelector('#modal-tel');
const feedbackPhone = document.querySelector('#feedback-tel');

const validatePhone = () => {
  createsMaskPhone(modalPhone);
  createsMaskPhone(feedbackPhone);

  const validateInputValue = (input) => {
    input.addEventListener('change', () => {
      let phoneValue = input.value.length;
      if (phoneValue !== 16) {
        input.setCustomValidity('Введите номер телефона полностью.');
      } else {
        input.setCustomValidity('');
      }
      input.reportValidity();
    });
  };

  validateInputValue(modalPhone);
  validateInputValue(feedbackPhone);
};

export {validatePhone};
