import {Subject} from 'rxjs';
import nextId from "react-id-generator";

class NotificationCtrl {
  static instance;
  data = [];
  notificationsUpdated = new Subject();

  static getInstance() {
    if (NotificationCtrl.instance == null) {
      NotificationCtrl.instance = new NotificationCtrl();
    }

    return NotificationCtrl.instance;
  }

  closeNotification(notificationId) {
    const instance = NotificationCtrl.getInstance();
    if (notificationId) {
      const index = instance.data.findIndex(instance.matchById.bind(instance, notificationId));
      if (index !== -1) {
        instance.data.splice(index, 1);
      }
    } else {
      instance.data.pop();
    }
    instance.notificationsUpdated.next(instance.data);
  }

  matchById = (notificationId, {id}) => {
    return notificationId === id;
  };

  showNotification(data) {
    const instance = NotificationCtrl.getInstance();
    const id = nextId('notification-');
    instance.data.push({data, id});
    instance.notificationsUpdated.next(instance.data);
    return id;
  }
}

export const NotificationController = NotificationCtrl.getInstance();
