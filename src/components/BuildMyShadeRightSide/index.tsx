
 import React from "react";

 import "./index.scss";

//  add here to right CSS files

 import ChooseYourShade from "../../components/ChooseYourShade";

 import ChooseFabricColor from "../../components/ChooseFabricColor";




 
 const BuildMyShadeRightSide = () => {
  return (
    <div className="build-shade-right-side">
      <ChooseYourShade />
      <ChooseFabricColor />
    </div>
       );
  }
export default BuildMyShadeRightSide;
