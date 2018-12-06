import React from 'react';

const Newsletter = () => (
  <form action="" method="post">
    <h2 className="box-title">Newsletter</h2>

    <div className="box-content">
      <p><strong>Receive updates on sales and offers directly to your in-box.</strong></p>

      <label className="box-label-email" htmlFor="email-newsletter">E-mail</label>
      <div>
        <input id="email-newsletter" name="email" placeholder="luca.rossi@gmail.com" type="email" required="required" />
      </div>

      <div className="column-checkbox">
        <input type="checkbox" className="regular-checkbox" name="privacy" value="ok" />
      </div>

      <div className="box-privacy-text">
        I have read the Privacy Policy, and I agree to the processing of my personal data in order to receive commercial communications and promotions by newsletter from LUISAVIAROMA.COM
      </div>
    </div>

    <div className="box-button-container">
      <button type="submit" name="newsletter-submit">Subscribe</button>
    </div>
  </form>
);

export default Newsletter;