import Negotiator from './negotiator';
import Modal from './modal';
import TicketsList from './ticketsList';
import AddBtn from './btn';

const modalEl = document.querySelector('.modal');
const modalFormEl = modalEl.querySelector('.modal__form');
const modalHeaderEl = modalEl.querySelector('.modal__header');
const modalFormControlsEl = modalEl.querySelector('.form__controls');
const modalFormDescriptionEl = modalEl.querySelector('.form__description');
const cancelBtnEl = modalEl.querySelector('.modal__button-cancel');
const ticketsListEl = document.querySelector('.tickets__list');

const addBtnEl = document.querySelector('.add-button');

const addBtn = new AddBtn(
  addBtnEl,
  modalEl,
  modalHeaderEl,
  modalFormControlsEl,
);

addBtn.assignHandler();

const negotiator = new Negotiator('https://help-desk-backend-2021.herokuapp.com/');

const modal = new Modal(
  modalEl,
  modalFormEl,
  modalHeaderEl,
  modalFormControlsEl,
  modalFormDescriptionEl,
  cancelBtnEl,
  ticketsListEl,
  negotiator,
);

modal.assignCommonHandler();
modal.assignCancelBtnHandler();

const ticketsList = new TicketsList(
  ticketsListEl,
  modalEl,
  modalFormEl,
  modalHeaderEl,
  modalFormControlsEl,
  modalFormDescriptionEl,
  negotiator,
);

ticketsList.assignHandler();
ticketsList.downloadTickets();
