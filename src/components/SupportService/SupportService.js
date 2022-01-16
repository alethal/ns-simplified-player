import React, {Component} from 'react';

import CallIcon from '../../images/call.svg';
import ChatIcon from '../../images/chat.svg';
import EmailIcon from '../../images/email.svg';
//import ChatActiveIcon from '../../images/chat-activated-blk.svg';

import './SupportService.scss';
//import {UsersController} from "../../controllers/users-controller/users.controller";
//import {isUserLoggedIn} from "../../services/token-service/token.service";

class SupportService extends Component {
  callerService = {
    international: '980.505.8324',
    localPhoneNumber: '888.207.4534'
  };

  emailService = {
    epoch: 'epoch.com/billing_support',
    support: 'support@adultpaysitesupport.com'
  };
/* epoch.com/billing_support */
  subscriptions = {};

  //constructor(props) {
   // super(props);
    //this.subscriptions.userStateChange = UsersController.userStateChange.subscribe(this.onUserStateChange);
  //}

  //componentWillUnmount() {
    //for (const key in this.subscriptions) {
     // this.subscriptions[key].unsubscribe();
    //}
 // }

  renderInfoElement = ({icon, text, info}) => {
    return (
      <div className="InfoElement Column">
        <div className="Row AlignCenter">
          <div className="IconCircle">
            {icon}
          </div>
          <div className="InfoName Column JustifyEnd">
            {text}
          </div>
        </div>
        {info}
      </div>
    );
  };

  renderCallInfo = () => {
    const data = {
      icon: (<img src={CallIcon} className="CallIcon" alt="call"/>),
      text: 'Call',
      info: (
        <div className="Column AlignEnd MainInfo">
          <div className="Column AlignEnd">
            <div className="Designator">U.S. (TOLL FREE)</div>
            <div className="DesignatorValue">{this.callerService.localPhoneNumber}</div>
            <div className="Designator">INTERNATIONAL</div>
            <div className="DesignatorValue">{this.callerService.international}</div>
          </div>
        </div>
      )
    };
    return this.renderInfoElement(data);
  };

  renderChatInfo = () => {
    const data = {
      icon: (<img src={ChatIcon} id="ChatBtnChange" className="ChatIcon" alt="chat"/>),
      text: 'Chat',
      info: (
       <div className="Column AlignEnd MainInfo">
         <div className="Column AlignEnd">
           <div className="Designator">
             <button id="chatButton" className="LiveChatButton">
             </button>
           </div>
           <div className="DesignatorValue">10AM-8PM EST | MON-FRI</div>
           <div className="Row JustifyEnd">
             <div className="Column AlignEnd">
               <div className="Designator">SATURDAY</div>
               <div className="DesignatorValue">CLOSED</div>
             </div>
             <div className="Separator"/>
             <div className="Column AlignEnd">
               <div className="Designator">SUNDAY</div>
               <div className="DesignatorValue">CLOSED</div>
             </div>
           </div>
         </div>
      </div>
      )
    };
    return this.renderInfoElement(data);
  };

  renderEmailInfo = () => {
    const data = {
      icon: (<img src={EmailIcon} className="EmailIcon" alt="email"/>),
      text: 'Email',
      info: (
        <div className="Column AlignEnd MainInfo Email">
          <div className="Column AlignEnd">
            <div className="Designator">NAKEDSWORD</div>
            <a href="mailto:support@adultpaysitesupport.com" className="DesignatorValue">{this.emailService.support}</a>
            <div className="Designator">or visit EPOCH</div>
            <a href={`https://${this.emailService.epoch}`} rel="noreferrer" target="_blank" className="DesignatorValue">{this.emailService.epoch}</a>
          </div>
        </div>
      )
    };
    return this.renderInfoElement(data);
  };

 // onUserStateChange = () => {
  //  this.setState({
   //   userUpdated: new Date().getTime()
  //  });
 // };

  render() {
    const classes = ['SupportService'];
   // if (isUserLoggedIn()) {
     // classes.push('UserLoggedIn');
   // }
    return (
      <div className={classes.join(' ')}>
        {this.renderCallInfo()}
        {this.renderChatInfo()}
        {this.renderEmailInfo()}
      </div>
    );
  }
}

export default SupportService;