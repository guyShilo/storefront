
 import React from "react";

 import "./index.scss";

 import ShadeExample from "./img/ShadeExample.png";


 const ChooseYourShade = () => {
     
  return (
    <div className="choose-your-shade">
      <div className="img-slider-nav"></div>
      <h3>Choose Your Shade</h3>
      <ul className="img_slider_wrraper list_none">
          <li className="img_slider_single_item">
              <img src={ShadeExample}/>
              <div className="single_title">
                  <p>Double Roller</p>
                  <span>i</span>
              </div>
          </li>
          <li className="img_slider_single_item">
              <img src={ShadeExample}/>
              <div className="single_title">
                  <p>Double Roller</p>
                  <span>i</span>
              </div>
          </li>
          <li className="img_slider_single_item">
              <img src={ShadeExample}/>
              <div className="single_title">
                  <p>Double Roller</p>
                  <span>i</span>
              </div>
          </li>

      </ul>
      </div>
       );
  }
export default ChooseYourShade;
