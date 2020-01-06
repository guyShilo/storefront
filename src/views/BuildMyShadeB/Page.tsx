// import "./scss/index.scss";

import "./scss/style.css";

import "./scss/bootstrap.css";

import * as React from "react";

import {
  ProductsList_shop,
} from "./types/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

import bedroom from "../../images/bedroom.png";

import iconSvg from "../../images/icon.svg";

import xpng from "../../images/x.svg";

import selectColor from "../../images/select-color.png";


// import noPhotoImg from "../../images/no-photo.svg";

const Page: React.FC<{
  shop: ProductsList_shop;
}> = ({ shop }) => (
  <>
    <script className="structured-data-list" type="application/ld+json">
      {structuredData(shop)}
    </script>
      <div className="build-my-shade-main w-1239">
      <div className="build-shade-left-side">
        <div className="absolute-icons">
          <i className="color_button"><img src={iconSvg}/></i>
          <i className="print_button"><img src={iconSvg}/></i>
          <i className="change_button"><img src={iconSvg}/></i>
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
                      <img src={bedroom}/>
                      <div className="single_title">
                        <p>Bedroom</p>
                      </div>
                    </li>
                    <li className="img_slider_single_item">
                      <img src={bedroom}/>
                      <div className="single_title">
                        <p>Kitchen</p>
                      </div>
                    </li>
                    <li className="img_slider_single_item">
                      <img src={bedroom}/>
                      <div className="single_title">
                      <p>Living Room</p>
                      </div>
                    </li>
                    <li className="img_slider_single_item">
                      <img src={bedroom}/>
                      <div className="single_title">
                        <p>Bedroom</p>

                      </div>
                    </li>
                  </ul>
                  <div className="down_items">
                    <a href="#"><span>CONFIRM ROOM</span></a>
                    <a href="#"><span>DEFAULT</span></a>
                  </div>
                </div>
      </div>
      <div className="build-shade-right-side">
          <div className="choose-your-shade">
          <div className="img-slider-nav"></div>
          <h3>Choose Your Shade</h3>
          <ul className="img_slider_wrraper list_none">
              <li className="img_slider_single_item">
                  <img src={bedroom}/>
                  <div className="single_title">
                      <p>Double Roller</p>
                      <span>i</span>
                  </div>
              </li>
                <li className="img_slider_single_item">
                  <img src={bedroom}/>
                  <div className="single_title">
                      <p>Double Roller</p>
                      <span>i</span>
                  </div>
              </li>
              <li className="img_slider_single_item">
                  <img src={bedroom}/>
                  <div className="single_title">
                      <p>Double Roller</p>
                      <span>i</span>
                  </div>
              </li>
          </ul>
          </div>
          <div className="choose-your-fabric-color">
              <div className="top-details">
                  <div className="button-back"><i></i><span>back</span></div>
                  <div className="choose-slider-nav">02/02</div>
              </div>
              <h3>Choose Your Fabric + Color</h3>
              <div className="selected-title">
                  <span className="light-grey">Selected Shade:</span>
                  <span className="yellow">Double Roller</span>
              </div>
              <div className="selected-fabric">
                  <div className="upper-items">
                      <img className="fabric-img" src={bedroom}/>
                      <div className="fabric-description">
                          <div className="up-details">
                              <div className="row"><span className="dark-grey">Color </span><span className="light-grey">Ivory</span></div>
                              <div className="row"><span className="dark-grey">Max Shade Width </span><span className="light-grey">96</span></div>
                              <div className="row"><span className="dark-grey">Color </span><span className="light-grey">Ivory</span></div>
                              <div className="row"><span className="dark-grey">Max Shade Width </span><span className="light-grey">96</span></div>
                          </div>
                          <div className="down-details">
                              <div className="row"><span className="dark-grey">Color </span><span className="light-grey">Ivory</span></div>
                              <div className="row"><span className="dark-grey">Max Shade Width </span><span className="light-grey">96</span></div>
                              <div className="row"><span className="dark-grey">Max Shade Width </span><span className="light-grey">96</span></div>
                          </div>
                      </div>
                      <div className="close_button"><img src={xpng}/></div>
                  </div>
                  <div className="description">
                      <span className="dark-grey">Description</span><span className="light-grey">A beautiful basic light filtering solid that will help eliminate glare, maintain natural light and provide full privacy. Translucent with a subtle texture.</span>
                  </div>
                  <div className="down_items">
                      <a className="display-swatch one" href="#"><span>SWATCH ADDED</span></a>
                      <a className="display-swatch two" href="#"><span>ORDER SWATCH</span></a>
                      <a href="#"><span>CONTINUE</span></a>
                  </div>
              </div>
              <div className="fabric-type">
                  <p className="fabric-type-title dark-grey"><b>Fabric:</b> 3000 HT 3% (98”)</p>
                  <div className="fabric-images-table">
                      <div className="fabric-images-table-single-item">
                          <img src={bedroom}/>
                          <span >Double Roller</span>
                      </div>
                      <div className="fabric-images-table-single-item">
                          <img src={bedroom}/>
                          <span >Double Roller</span>
                      </div>
                      <div className="fabric-images-table-single-item">
                          <img src={bedroom}/>
                          <span >Double Roller</span>
                      </div>
                      <div className="fabric-images-table-single-item">
                          <img src={bedroom}/>
                          <span >Double Roller</span>
                      </div>
                      <div className="fabric-images-table-single-item">
                          <img src={bedroom}/>
                          <span >Double Roller</span>
                      </div>
                      <div className="fabric-images-table-single-item">
                          <img src={bedroom}/>
                          <span >Double Roller</span>
                      </div>
                      <div className="fabric-images-table-single-item">
                        <img src={bedroom}/>
                        <span >Double Roller</span>
                      </div>
                      <div className="fabric-images-table-single-item">
                        <img src={bedroom}/>
                        <span >Double Roller</span>
                      </div>
                      <div className="fabric-images-table-single-item">
                        <img src={bedroom}/>
                        <span >Double Roller</span>
                      </div>
                  </div>
              </div>
              <div className="fabric-type">
                  <p className="fabric-type-title dark-grey"><b>Fabric:</b>Dixie (Milan)</p>
                  <div className="fabric-images-table">
                    <div className="fabric-images-table-single-item">
                      <img src={bedroom}/>
                      <span >Double Roller</span>
                    </div>
                    <div className="fabric-images-table-single-item">
                      <img src={bedroom}/>
                      <span >Double Roller</span>
                    </div>
                    <div className="fabric-images-table-single-item">
                      <img src={bedroom}/>
                      <span >Double Roller</span>
                    </div>
                    <div className="fabric-images-table-single-item">
                      <img src={bedroom}/>
                      <span >Double Roller</span>
                    </div>
                    <div className="fabric-images-table-single-item">
                      <img src={bedroom}/>
                      <span >Double Roller</span>
                    </div>
                    <div className="fabric-images-table-single-item">
                      <img src={bedroom}/>
                      <span >Double Roller</span>
                    </div>
                    <div className="fabric-images-table-single-item">
                      <img src={bedroom}/>
                      <span >Double Roller</span>
                    </div>
                    <div className="fabric-images-table-single-item">
                      <img src={bedroom}/>
                      <span >Double Roller</span>
                    </div>
                    <div className="fabric-images-table-single-item">
                      <img src={bedroom}/>
                      <span >Double Roller</span>
                    </div>
                </div>
              </div>
          </div>
      </div>
  </div>
  {/* <div className="build-my-shade-popup">
      <div className="close_button"><img src={xpng}/></div>
      <div className="popup-title-wrraper">
          <h2 className="dark-grey">Double Roller</h2>
          <span className="title-devideer"></span>
      </div>
      <div className="popup-content">
          <div className="content-block">
              <p className="title">Product Details</p>
              <p>A beautiful basic light filtering solid that will help eliminate glare, maintain natural light and provide full privacy. Translucent with a subtle texture.</p>
          </div>
          <div className="content-block">
              <p className="title">Materials</p>
              <p>An exclusive collection of 800+ materials</p>
          </div>
          <div className="content-block three-items">
              <div className="inner-items">
              <div className="first">
                  <p className="title">Min Size</p>
                  <p>12” x 12”</p>
              </div>
              <div className="second">
                  <p className="title">Max Size*</p>
                  <p>118” x 144”</p>
              </div>
              <div className="third">
                  <p className="title">Customizable</p>
                  <p>To the 1/8”</p>
              </div>
              </div>
              <span>*Depending on Fabric Width & Thickness</span>
          </div>
          <div className="content-block">
              <p className="title">Ships In</p>
              <p>Approximately 15 business days</p>
          </div>
          <div className="slider-block">
              <p className="title">Additional Details</p>
              <div className="slider-block-content">
                  <div className="slider">
                      <img src={bedroom}/>
                  </div>
                  <div className="slider-text">
                      <ul className="">
                          <li><span className="light-grey">Half wrapped bottom bar ensures a clean hang (no creases)</span></li>
                          <li><span className="light-grey dark">Crush cutting helps eliminate frayed edges</span></li>
                          <li><span className="light-grey">Hung and tested prior to leaving our workroom</span></li>
                          <li><span className="light-grey">Meets the strictest child safety standards</span></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div> */}

  </>
);

export default Page;
