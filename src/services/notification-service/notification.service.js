import {NotificationController} from "../../controllers/notifications-controller/notifications-controller";
import {NOTIFICATION_TYPES} from "../../components/Notifications/notifications-types";

export const displayErrorNotification = (data) => {
  data.type = NOTIFICATION_TYPES.error;
  NotificationController.showNotification(data);
};

export const displayInfoNotification = (data) => {
  data.type = NOTIFICATION_TYPES.info;
  NotificationController.showNotification(data);
};

export const displaySuccessNotification = (data) => {
  data.type = NOTIFICATION_TYPES.success;
  NotificationController.showNotification(data);
};
