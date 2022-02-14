import {Subject} from 'rxjs';
import nextId from "react-id-generator";

class ModalCtrl {
  static instance;
  data = [];
  modalAdded = new Subject();

  static getInstance() {
    if (ModalCtrl.instance == null) {
      ModalCtrl.instance = new ModalCtrl();
    }

    return ModalCtrl.instance;
  }

  cleanupKeysListener = () => {
    const instance = ModalCtrl.getInstance();
    document.removeEventListener("keydown", instance.handleKeyEvent, false);
  };

  handleKeyEvent = (event) => {
    if (event.keyCode === 27 && this.data.length) { // Close modal on ESC
      const instance = ModalCtrl.getInstance();
      instance.removeModal();
    }
  };

  matchById = (modalId, {id}) => {
    return modalId === id;
  };

  removeModal(modalId) {
    const instance = ModalCtrl.getInstance();
    if (modalId) {
      const index = instance.data.findIndex(instance.matchById.bind(instance, modalId));
      if (index !== -1) {
        instance.data.splice(index, 1);
      }
    } else {
      instance.data.pop();
    }
    instance.modalAdded.next(instance.data);
  }

  setupKeysListener = () => {
    const instance = ModalCtrl.getInstance();
    document.addEventListener("keydown", instance.handleKeyEvent, false);
  };

  showModal(data) {
    const instance = ModalCtrl.getInstance();
    const id = nextId('modal-');
    instance.data.push({data, id});
    instance.modalAdded.next(instance.data);
    return id;
  }
}

export const ModalController = ModalCtrl.getInstance();
