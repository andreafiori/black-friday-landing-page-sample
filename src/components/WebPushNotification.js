import React from 'react';

const WebPushNotification = () => (
  <form action="" method="post">
    <h2 className="box-title">Web Push Notifications</h2>

    <div className="box-content">
      <p><strong>Be the first to know about special deals.</strong></p>
      <ul>
        <li>Real time instant notification</li>
        <li>No need to fill or download anything</li>
        <li>Turn off notifications anytime from your browser settings</li>
      </ul>
    </div>

    <div className="box-button-container">
      <button type="submit" name="notifications-accept">Keep me updated</button>
    </div>
  </form>
);

export default WebPushNotification;