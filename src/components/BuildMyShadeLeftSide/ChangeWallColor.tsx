import React from "react";

// import bedroom from "./img/ShadeExample.png";

import iconSvg from "../../images/icon.svg";

import xpng from "../../images/x.svg";


// import {
//     VariantsData_variants
//   } from "../../views/BuildShadePage/types/VariantsData";




const ChangeWallColor: React.FC<{
    closeOnClick: any;
        }> = ({ closeOnClick }) => {
    const closeAction = () => (
        closeOnClick()
    )
   return (  
    <div className="change_wall_color" style={{ zIndex: 1 }}>
    <div className="upper_items">
      <div className="close_button" onClick={closeAction}><img src={xpng}/></div>
        <h4>Change Wall Color</h4>
          <ul className="list_none">
            <li className="single_color">
              <a href="#">
                <div className="color_img"></div>
                  <span>White</span>
              </a>
            </li>
            <li className="single_color">
              <a href="#">
                <div className="color_img"></div>
                  <span>Black</span>
                    </a>
            </li>
            <li className="single_color">
              <a href="#">
                <div className="color_img"></div>
                  <span>Off White</span>
              </a>
            </li>
            <li className="single_color">
            <a href="#">
              <div className="color_img"></div>
                <span>Beige</span>
                  </a>
            </li>
            <li className="single_color">
            <a href="#">
              <div className="color_img"></div>
                <span>Natural</span>
                  </a>
            </li>
            <li className="single_color">
            <a href="#">
              <div className="color_img"></div>
                <span>Gray</span>
                  </a>
            </li>
            <li className="single_color choose_other">
              <a href="#">
                <div className="color_img">
                  <img src={iconSvg}/>
                </div>
                <span>Other</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="down_items">
          <a href="#"><span>SELECT COLOR</span></a>
          <a href="#"><span>DEFAULT</span></a>
        </div>
      </div>
        );
   }
 export default ChangeWallColor;