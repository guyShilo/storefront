import React from "react";
import "./productSection.scss";

import placeholder_image_6 from "./img/Placeholder6.png";

import product_image_3 from "./img/product3.png";

import caret_image from "./img/caret.png";

import placeholder_image_8 from "./img/Placeholder8.png";

import fabric_image from "./img/Fabric.png";

const ProductSection = () => (
  <div className="ProductSection">
    <div className="container">
      <div className="product product1">
        <img
          src={placeholder_image_6}
          className="product_backimg1 img-fluid"
          alt=""
          />
        <div className="row">
          <div className="col-md-6">
            <img
              src={product_image_3}
              alt="product3"
              className="img-fluid d-block ml-auto mr-50"
             />
          </div>
          <div className="col-md-5">
            <div className="product1_content">
              <h2 className="main_title">Build My Shade</h2>
              <p className="content">
                Nullam quis risus eget urna mollis ornare vel eu leo. Nulla
                vitae elit libero, a pharetra augue.
              </p>
              <a href="#" className="link"
              ><img src={caret_image} alt="build now" /> BUILD NOW</a
              >
            </div>
          </div>
        </div>
      </div>
      <div className="product product2">
        <img
          src={placeholder_image_8}
          className="product_backimg2  img-fluid"
          alt=""
        />
        <div className="row">
          <div className="col-md-6 order-last">
            <img
            src={fabric_image}
            alt="Fabric"
            className="img-fluid d-block ml-auto mr-50"
            />
          </div>
          <div className="col-md-6 order-first">
            <div className="product2_content">
              <h2 className="main_title">Fabric Spotlight</h2>
              <p className="content">
                Around-the-world trip remains the world’s greatest journey.
                For two out o people, this is the ultimate travel experience,
                according to recent research.
              </p>
              <a href="#" className="link"
              >
              <img src={caret_image}/>
                SHOP NOW
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
        );
export default ProductSection;


