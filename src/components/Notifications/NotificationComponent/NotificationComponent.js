import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {NotificationController} from "../../../controllers/notifications-controller/notifications-controller";

import {NOTIFICATION_TYPES} from "../notifications-types";

import './NotificationComponent.scss';

class NotificationComponent extends Component {

  isUnMounted = false;

  state = {
    closing: false,
    isMounted: false
  };

  componentDidMount() {
    this.setState({
      isMounted: true
    });
    this.setCloseTimeoutIfNeeded();
  }

  componentWillUnmount() {
    this.isUnMounted = true;
  }

  closeNotification = () => {
    const {notificationId} = this.props;
    NotificationController.closeNotification(notificationId);
  };

  getClasses = () => {
    const classes = ['NotificationComponent'];
    const {closing, isMounted} = this.state;
    if (isMounted) {
      classes.push('Mounted');
    }
    if (closing) {
      classes.push('Closing');
    }

    return classes;
  };

  onCloseNotification = () => {
    if (!this.isUnMounted) {
      this.setState({
        closing: true
      }, this.setCloseNotificationTimeout);
    }
  };

  renderClose = () => {
    return (
      <i className="fas fa-times" onClick={this.onCloseNotification}/>
    );
  };

  renderIcon = (className) => {
    return (
      <i className={className}/>
    );
  };

  renderMessage = () => {
    const {message} = this.props.data;
    return (
      <div className="Message"
           dangerouslySetInnerHTML={{
             __html: message
           }}/>
    );
  };

  renderTitle = () => {
    const {title} = this.props.data;
    return title ? (
      <div className="Title">{title}</div>
    ) : null;
  };

  renderTypeIcon = () => {
    let typeIcon;
    const {type} = this.props.data;
    switch (type) {
      case NOTIFICATION_TYPES.info:
        typeIcon = this.renderIcon('fas  fa-info-circle');
        break;
      case NOTIFICATION_TYPES.success:
        typeIcon = this.renderIcon('far fa-check-circle');
        break;
      case NOTIFICATION_TYPES.error:
        typeIcon = this.renderIcon('far fa-times-circle');
        break;
      default:
        typeIcon = null;
        break;
    }

    return typeIcon;
  };

  setCloseNotificationTimeout = () => {
    setTimeout(this.closeNotification, 240);
  };

  setCloseTimeoutIfNeeded = () => {
    const {duration} = this.props.data;
    if (duration) {
      setTimeout(this.onCloseNotification, duration * 1000); // duration is in seconds so multiple by a 1000 to get milliseconds
    }
  };

  render() {
    const classes = this.getClasses()
    return (
      <div className={classes.join(' ')}>
        <div className="Column TypeIcon">
          {this.renderTypeIcon()}
        </div>
        <div className="Column Fill">
          {this.renderTitle()}
          {this.renderMessage()}
        </div>
        <div className="Column">
          {this.renderClose()}
        </div>
      </div>
    );
  }
}

NotificationComponent.propTypes = {
  data: PropTypes.object.isRequired,
  notificationId: PropTypes.string.isRequired
};

export default NotificationComponent;
