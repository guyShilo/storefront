import React, { useState } from "react";


import "./index.scss";

import brush from "./img/BrushLogo.png";

import brush_black from "../../images/change_color_black.svg";

import edit from "./img/EditLogo.png";

import edit_black from "../../images/change_setting_black.svg";


import print from "./img/PrintLogo.png";

import ChangeWallColor from "./ChangeWallColor"

import ChangeSettingType from "./ChangeSettingType"





const BuildMyShadeLeftSide= () => {
  const [isColorHidden, setIsColorHidden] = useState(true)
  const [isSettingHidden, setIsSettingHidden] = useState(true)
  const [changeColorActive, setChangeColorActive] = useState("absolute-icons")
  const [backgroundUrl, setBackgroundUrl] = useState("url(../../images/ShadeExample.png);")
  const [blackButtonChangeColor, setBlackButtonBackground] = useState(brush)
  const [blackButtonChangeSetting, setBlackButtonBackgroundSetting] = useState(edit)



  const clickColorChange = () => {
    setBlackButtonBackgroundSetting(edit)
    setBlackButtonBackground(brush_black)
    setIsColorHidden(false)
    setIsSettingHidden(true)
    setChangeColorActive("absolute-icons change-color-onclick")
  }  
  const clickChangeSetting= () => {
    setBlackButtonBackground(brush)
    setBlackButtonBackgroundSetting(edit_black)
    setIsColorHidden(true)
    setIsSettingHidden(false)
    setChangeColorActive("absolute-icons change-setting-onclick")

  }
  const CloseAllAction = () => {
    setIsColorHidden(true)
    setIsSettingHidden(true)
    setChangeColorActive("absolute-icons")
    setBlackButtonBackgroundSetting(edit)
    setBlackButtonBackground(brush)
  }


  return (  
        <div className="build-shade-left-side" style={ {
          width: "800px",
          maxWidth: "800px",
          position: "relative",
          background: `url(${ backgroundUrl })`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          height: "980px",
          } }
        >
          <div className={changeColorActive} style={{ zIndex: 2 }} >
            <button className={"color_button"} onClick={clickColorChange} ><img src={blackButtonChangeColor}/></button>
            <button className={"change_button"} onClick={clickChangeSetting}><img src={blackButtonChangeSetting}/></button>
            <button className="print_button"><img src={print} /></button>
          </div>
          {isColorHidden === false && isSettingHidden === true ?
          <ChangeWallColor closeOnClick={CloseAllAction} />
          :
          <div></div>}
          {isColorHidden === true && isSettingHidden === false ?
          <ChangeSettingType closeOnClick={CloseAllAction} ChangeBackground={setBackgroundUrl} />
          :
          <div></div>
          }
        </div>
       );
  }
export default BuildMyShadeLeftSide;
