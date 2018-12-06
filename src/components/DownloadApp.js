import React from 'react';
import ctaAppStore from '../images/CTA-App-Store.png';
import qrCode from '../images/qr-code-lvr-ios-app-1024x1024.png';

const DownloadApp = () => (
  <div className="box-container">
      <h2 className="box-title">Download iOS App</h2>
      <p><strong>Score the best Black Friday deals by downloading our app and receiving instant updates on sales, exclusive promotions and limited time offers.</strong></p>
      <div className="text-center">
        <img src={qrCode} alt="Scan the QR code" />
      </div>
      <div className="text-center">
        <img src={ctaAppStore} alt="Download our App" />
      </div>
  </div>
);

export default DownloadApp;