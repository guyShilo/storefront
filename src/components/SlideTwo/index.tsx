import * as React from "react";

import image2 from "./img/Image.png"

import thumb_asset from "./img/100x50_02ca2-banner-01.jpg";

import caret_image from "./img/caret.png";

const SlideTwo = () => (
  <li data-index="rs-12" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
  data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300"
  data-thumb={thumb_asset} data-rotate="0" data-saveperformance="off"
  data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5=""
  data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
  {/* MAIN IMAGE   */}
  <img src={image2} alt="" data-bgposition="center center"
      data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/>
  {/* LAYERS   */}

  {/* LAYER NR. 2   */}
  <div className="tp-caption tp-resizeme main_title" data-x="165" data-y="center"
      data-voffset="-150" data-width="['auto']" data-height="['auto']" data-type="text"
      data-responsive_offset="on"
      data-frames='[{"delay":200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
      >
      Designer<br/>
      Shades </div>

  {/* LAYER NR. 3   */}
  <div className="tp-caption tp-resizeme italic_line" data-x="165" data-y="center"
      data-voffset="-40" data-width="['auto']" data-height="['auto']" data-type="text"
      data-responsive_offset="on"
      data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
      >
  Summer Editonal </div>

  {/* LAYER NR. 5   */}
  <div className="tp-caption link_parent" data-x="165" data-y="center" data-voffset="0"
      data-width="['auto']" data-height="['auto']" data-type="button" data-responsive_offset="on"
      data-frames='[{"delay":2800,"speed":1000,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","force":true,"to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'
  >
      <a href="#" className="link"><img src={caret_image} alt="LEARN More"/>LEARN More</a></div>
</li> 
);

export default SlideTwo;