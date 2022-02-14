import {Subject} from 'rxjs';

class LoadingCtrl {
  static instance;
  displayLoadingMask = new Subject();

  static getInstance() {
    if (LoadingCtrl.instance == null) {
      LoadingCtrl.instance = new LoadingCtrl();
    }

    return LoadingCtrl.instance;
  }

  removeLoadingMask() {
    const instance = LoadingCtrl.getInstance();
    instance.displayLoadingMask.next({
      displayMask: false
    });
  }

  showLoadingMask(text) {
    const instance = LoadingCtrl.getInstance();
    instance.displayLoadingMask.next({
      displayMask: true,
      text: text
    });
  }
}

export const LoadingController = LoadingCtrl.getInstance();
