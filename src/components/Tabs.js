import React, { Component } from 'react';
import icoNotification from '../images/ico-notification.svg';
import icoMail from '../images/ico-mail.svg';
import Newsletter from './Newsletter';
import WebPushNotification from './WebPushNotification';
import tabsCss from '../styles/tabs.css';

class Tabs extends Component {

  render() {
    return (
      <div className="tabs">
        <div className="tab">
          <input type="radio" id="tab-one" name="tab-group" defaultChecked />
          <label htmlFor="tab-one">
            <img src={icoMail} alt="Icon Mail" />
          </label>
          <div className="content">
            <Newsletter />
          </div>
        </div>
        <div className="tab">
          <input type="radio" id="tab-two" name="tab-group" />
          <label htmlFor="tab-two">
            <img src={icoNotification} alt="Icon Notification" />
          </label>
          <div className="content">
            <WebPushNotification />
          </div>
        </div>
      </div>
    );
  }

}

export default Tabs;
