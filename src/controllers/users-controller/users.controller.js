import {Subject} from 'rxjs';
import {LoadingController} from "../loading-controller/loading.controller";
import {authLogout} from "../../services/auth-service/auth.service";
import {removeUserLocalData} from "../../services/users-service/users.service";
import {cleanupToken} from "../../services/token-service/token.service";
import {logError} from "../../services/log/log.service";

class UsersCtrl {
  static instance;
  userStateChange = new Subject();

  static getInstance() {
    if (UsersCtrl.instance == null) {
      UsersCtrl.instance = new UsersCtrl();
    }

    return UsersCtrl.instance;
  }

  notifyUserStateChange = () => {
    const instance = UsersCtrl.getInstance();
    instance.userStateChange.next(new Date().getTime());
  };

  onLogoutSuccess = () => {
    const instance = UsersCtrl.getInstance();
    LoadingController.removeLoadingMask();
    removeUserLocalData();
    cleanupToken();
    instance.notifyUserStateChange();
  };

  onRequestFailure = (error) => {
    logError(error);
    LoadingController.removeLoadingMask();
  };

  signOutUser = (message) => {
    const instance = UsersCtrl.getInstance();
    LoadingController.showLoadingMask(message);
    authLogout()
      .then(instance.onLogoutSuccess)
      .catch(instance.onRequestFailure);
  };
}

export const UsersController = UsersCtrl.getInstance();
