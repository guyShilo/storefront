import "./scss/index.scss";

// import selectColor from "../../images/select-color.png";

import "./scss/ustyle.css";

// import "./scss/style.css";

import BuildMyShadeLeftSide from "../../components/BuildMyShadeLeftSide";

import BuildMyShadeRightSide from "../../components/BuildMyShadeRightSide";

import BuildShadePopUp from "./BuildShadePopUp";


import React from "react";
import {
  ProductsListNew_categories,
} from "./types/ProductsListNew";






const Page: React.FC<{
categories: ProductsListNew_categories;
}> = ({ categories }) => {
    return(
    <div className="container">
        <div className="build-my-shade-main w-1239">
            <BuildMyShadeLeftSide />
            <BuildMyShadeRightSide products={categories} children={React.Children} />
        </div>
        < BuildShadePopUp />
    </div>
    )
    };

export default Page;
