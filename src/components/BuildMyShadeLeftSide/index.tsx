import React, { useState } from "react";

import "./index.scss";

import brush from "./img/BrushLogo.png";

import edit from "./img/EditLogo.png";

import print from "./img/PrintLogo.png";

import ChangeWallColor from "./ChangeWallColor"

import ChangeSettingType from "./ChangeSettingType"





const BuildMyShadeLeftSide= () => {
   const [isColorHidden, setIsColorHidden] = useState(true)
  const [isSettingHidden, setIsSettingHidden] = useState(true)
  const [changeColorActive, setChangeColorActive] = useState("absolute-icons")



  const clickColorChange = () => {
    setIsColorHidden(false)
    setIsSettingHidden(true)
    setChangeColorActive("absolute-icons change-color-onclick")
    // setBlackButtonBackground("color_button Clicked")
  }  
  const clickChangeSetting= () => {  
    setIsColorHidden(true)
    setIsSettingHidden(false)
    setChangeColorActive("absolute-icons change-setting-onclick")
    // setBlackButtonBackgroundSetting("change_button Clicked")
  }
  const CloseAllAction = () => {
    setIsColorHidden(true)
    setIsSettingHidden(true)
    setChangeColorActive("absolute-icons")
  }

  return (  
        <div className="build-shade-left-side" >
          <div className={changeColorActive} style={{ zIndex: 2 }} >
            <button className={"color_button"} onClick={clickColorChange} ><img src={brush}/></button>
            <button className={"change_button"} onClick={clickChangeSetting}><img src={edit}/></button>
            <button className="print_button"><img src={print} /></button>
          </div>
          {isColorHidden === false && isSettingHidden === true ?
          <ChangeWallColor closeOnClick={CloseAllAction} />
          :
          <div></div>}
          {isColorHidden === true && isSettingHidden === false ?
          <ChangeSettingType closeOnClick={CloseAllAction} />
          :
          <div></div>
          }
        </div>
       );
  }
export default BuildMyShadeLeftSide;
