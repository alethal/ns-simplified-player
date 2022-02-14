import {cloneDeep} from "lodash";

class CachingCtrl {
  static instance;
  data = {};
  triggeredAction = 'PUSH';

  static getInstance() {
    if (CachingCtrl.instance == null) {
      CachingCtrl.instance = new CachingCtrl();
    }

    return CachingCtrl.instance;
  }

  cacheData = (route, data) => {
    const instance = CachingCtrl.getInstance();
    if (!instance.data[route]) {
      instance.data[route] = [];
    }
    instance.data[route].push(data);
  };

  getLastRouteData = () => {
    let data;
    const instance = CachingCtrl.getInstance();
    if(instance.data.length) {
      data = cloneDeep(instance.data.slice(-1));
    }

    return data;
  };

  getRouteData = (route) => {
    let data;
    const instance = CachingCtrl.getInstance();
    if (instance.data[route]) {
      data = instance.data[route].pop();
    }

    return data;
  };

  getTriggeredAction = () => {
    const instance = CachingCtrl.getInstance();
    return instance.triggeredAction;
  };

  setTriggeredAction = (action) => {
    const instance = CachingCtrl.getInstance();
    instance.triggeredAction = action;
  };
}

export const CachingController = CachingCtrl.getInstance();
