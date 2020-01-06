import React from "react";

// import "./index.scss";




const NewsLetterSubscriptionMain = () => (
  <div className="NewsLetterSubscriptionMain">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="main_title">
            Sign Up for Our Newsletter<br />
            Be the First to Receive Exclusive Offers
          </h2>
          <div className="email_subscription">
            <input type="email" placeholder="Your Email Address" />
              <button className="btn_subscription" type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewsLetterSubscriptionMain;