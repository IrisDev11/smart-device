import {createsMaskPhone} from './creates-mask-phone';

const modalPhone = document.querySelector('#modal-tel');
const feedbackPhone = document.querySelector('#feedback-tel');

const validateInputPhone = () => {
  createsMaskPhone(modalPhone);
  createsMaskPhone(feedbackPhone);
};

export {validateInputPhone};
