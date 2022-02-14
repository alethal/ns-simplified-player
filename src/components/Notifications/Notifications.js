import React, {Component} from 'react';

import {NotificationController} from "../../controllers/notifications-controller/notifications-controller";

import NotificationComponent from "./NotificationComponent/NotificationComponent";

import './Notifications.scss';

class Notifications extends Component {

  state = {
    notifications: []
  };

  subscriptions = {};

  constructor(props) {
    super(props);
    this.subscriptions.notificationsUpdated = NotificationController.notificationsUpdated.subscribe(this.onNotificationsUpdated);
  }

  componentWillUnmount() {
    for (const key in this.subscriptions) {
      this.subscriptions[key].unsubscribe();
    }
  }

  notificationMap = ({data, id}) => {
    return (
      <NotificationComponent data={data}
                             notificationId={id}
                             key={id}/>
    );
  };

  onNotificationsUpdated = (notifications) => {
    this.setState({notifications});
  };

  renderNotifications = () => {
    const {notifications} = this.state;
    return notifications.map(this.notificationMap);
  };

  render() {
    return (
      <div className="Notifications">
        {this.renderNotifications()}
      </div>
    );
  }
}

export default Notifications;
