
 import React from "react";

 import "./index.scss";

 import iconSvg from "../../images/icon.svg";

 import xpng from "../../images/x.svg";

 import ShadeExample from "../../images/ShadeExample.png";

 import selectColor from "../../images/select-color.png";

 import Brush from "./img/BrushLogo.png";

 import Edit from "./img/EditLogo.png";

 import Print from "./img/PrintLogo.png";




 const BuildMyShadeLeftSide = () => {
  return (
        <div className="build-shade-left-side">
          <div className="absolute-icons">
            <button className="color_button"><img src={Brush}/></button>
            <button className="print_button"><img src={Print}/></button>
            <button className="change_button"><img src={Edit}/></button>
          </div>
          <div className="change_wall_color">
            <div className="upper_items">
              <div className="close_button"><img src={xpng}/></div>
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
                          <span>White</span>
                            </a>
                    </li>
                    <li className="single_color">
                      <a href="#">
                        <div className="color_img"></div>
                          <span>White</span>
                      </a>
                    </li>
                    <li className="single_color">
                    <a href="#">
                      <div className="color_img"></div>
                        <span>White</span>
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
              <div className="select-color-wrraper">
                <div className="close_button"><img src={xpng}/></div>
                  <p><b>Selected RGB:</b> #FFFFFF</p>
                  <div className="select-color-box"><img src={selectColor}/></div>
                </div>
                <div className="change-setting">
                  <div className="close_button"><img src={xpng}/></div>
                    <h4>Change Setting</h4>
                    <ul className="change-setting-img-slider list_none">
                      <li className="img_slider_single_item">
                        <img src={ShadeExample}/>
                        <div className="single_title">
                          <p>ShadeExample</p>
                        </div>
                      </li>
                      <li className="img_slider_single_item">
                        <img src={ShadeExample}/>
                        <div className="single_title">
                          <p>Kitchen</p>
                        </div>
                      </li>
                      <li className="img_slider_single_item">
                        <img src={ShadeExample}/>
                        <div className="single_title">
                        <p>Living Room</p>
                        </div>
                      </li>
                      <li className="img_slider_single_item">
                        <img src={ShadeExample}/>
                        <div className="single_title">
                          <p>ShadeExample</p>

                        </div>
                      </li>
                    </ul>
                    <div className="down_items">
                      <a href="#"><span>CONFIRM ROOM</span></a>
                      <a href="#"><span>DEFAULT</span></a>
                    </div>
                  </div>
        </div>
       );
  }
export default BuildMyShadeLeftSide;
