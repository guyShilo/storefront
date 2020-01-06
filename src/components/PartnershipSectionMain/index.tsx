import React from "react";

// import "./index.scss";


import free_shipping_logo from "./img/freeshipping.svg";

import online_service_logo from "./img/online-service.svg";

import quick_turnaround_logo from "./img/quick-turn-around.svg";

const PartnershipSectionMain = () => (
  <div className="PartnershipSectionMain">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="main_title">Interested in Partnering With Us?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img
          src={free_shipping_logo}
          alt="freeshipping"
          className="img-fluid d-block mx-auto"
          width="32"
          />
          <h3>Free Shipping</h3>
          <p className="content">On orders over $200</p>
        </div>
        <div className="col-md-4">
          <img
          src={online_service_logo}
          alt="freeshipping"
          className="img-fluid d-block mx-auto"
          width="32"
          />
          <h3>Online Service</h3>
          <p className="content">24/7 support</p>
        </div>
        <div className="col-md-4">
          <img
          src={quick_turnaround_logo}
          alt="freeshipping"
          className="img-fluid d-block mx-auto"
          width="32"
          />
          <h3>Quick Turn-around</h3>
          <p className="content">Orders ship within 2 weeks</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <a href="#" className="btn_subscription">sign up now</a>
        </div>
      </div>
    </div>
  </div>
    );
export default PartnershipSectionMain;


