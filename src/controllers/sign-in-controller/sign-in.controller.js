import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import {ModalController} from "../modal-controller/modal.controller";

class SignInCtrl {
  static instance;

  signInDialogId;

  static getInstance() {
    if (SignInCtrl.instance == null) {
      SignInCtrl.instance = new SignInCtrl();
    }

    return SignInCtrl.instance;
  }

  closeSignInDialog = () => {
    const instance = SignInCtrl.getInstance();
    if (instance.signInDialogId) {
      ModalController.removeModal(instance.signInDialogId);
      instance.signInDialogId = undefined;
    }
  };

  isSignInDisplayed = () => {
    const instance = SignInCtrl.getInstance();
    return !!instance.signInDialogId;
  };

  showSignInDialog = (isMobile) => {
    const instance = SignInCtrl.getInstance();
    if (isMobile && instance.signInDialogId) {
      ModalController.removeModal(instance.signInDialogId);
      instance.signInDialogId = undefined;
    } else if (!instance.signInDialogId) {
      const modal = (
        <SignIn/>
      );
      instance.signInDialogId = ModalController.showModal(modal);
    }
  };
}

export const SignInController = SignInCtrl.getInstance();
