import React from 'react';
import MediaQuery from 'react-responsive';
import WebPushNotification from './WebPushNotification';
import Newsletter from './Newsletter';
import Tabs from './Tabs';

const Header = () => (
  <div className="row">
    <div className="column" style={{'display': 'table'}}>
      <div style={{ 'display': 'table-cell', 'vertical-align': 'middle' }}>
        <h1>Black Friday</h1>
        <p>Don't miss out on Black Friday deals, just in time for Christmas shopping! Up to 70% on all you favorite men's, women's, and kids brands like Alberta Ferretti, Casadei, Marni, Dsquared2, Versace, and Maison Margiela. Join on this fun Amerian tradition and keep an eye out for the best offers on clothing, bags, accessories, and shoes the day after Thanksgiving. Subscribe to our newsletter and to our web push notifications to receive updates on sales and special deals.</p>
      </div>
    </div>

    <MediaQuery query="(min-device-width: 1224px)">
      <div className="column-two">
        <div className="box-container">
          <Newsletter />
        </div>
      </div>
      <div className="column-two">
        <div className="box-container">
          <WebPushNotification />
        </div>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 1224px)">
      <div className="column-two">
        <Tabs />
      </div>
    </MediaQuery>
    
  </div>
);

export default Header;