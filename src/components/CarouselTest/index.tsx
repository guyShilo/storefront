import * as React from "react";

import "./scss/index.scss";

import image2 from "./img/Image.png"

import thumb_asset from "./img/100x50_02ca2-banner-01.jpg";

import caret_image from "./img/caret.png";

import banner_two from './img/100x50_cb52a-banner-02.jpg';

import cart_logo from './img/cart.svg';


// const SCarouselWrapper = styled.div`
//   display: flex;
// `;

// interface ICarouselSlide {
//   active?: boolean;
// }

// const SCarouselSlide = styled.div<ICarouselSlide>`
//   flex: 0 0 auto;
//   opacity: ${props => (props.active ? 1 : 0)};
//   transition: all 0.5s ease;
//   width: 100%;
// `;

// interface ICarouselProps {
//   currentSlide: number;
// }

// const SCarouselSlides = styled.div<ICarouselProps>`
//   display: flex;
//   ${props =>
//     props.currentSlide &&
//     css`
//       transform: translateX(-${props.currentSlide * 100}%);
//     `};
//   transition: all 0.5s ease;
// `;

interface IProps {
  children: JSX.Element[];
}


const CarouselTest = ({ children }: IProps) => {
  // const [currentSlide, setCurrentSlide] = React.useState(1);
  
  React.useEffect(() => {
    (function ($) {
      /* tslint:disable:no-string-literal */
      const tpj = window["jQuery"];
      tpj(document).ready(function () {
              let el : any;
              el = tpj("#rev_slider_8_1").show();
              el.revolution({
                  sliderType: "standard",
                  sliderLayout: "fullwidth",
                  dottedOverlay: "none",
                  delay: 9000,
                  navigation: {
                       keyboardNavigation: "off",
                      keyboard_direction: "horizontal",
                      mouseScrollNavigation: "off",
                      mouseScrollReverse: "default",
                      onHoverStop: "off",
                      bullets: {
                          enable: true,
                          hide_onmobile: false,
                          style: "hermes",
                          hide_onleave: false,
                          direction: "horizontal",
                          h_align: "center",
                          v_align: "bottom",
                          h_offset: 0,
                          v_offset: 50,
                          space: 10,
                          tmp: '',
                      },
                  },
                  visibilityLevels: [1240, 1024, 778, 480],
                  gridwidth: 1270,
                  gridheight: 960,
                  lazyType: "none",
                  shadow: 0,
                  spinner: "spinner3",
                  stopLoop: "off",
                  stopAfterLoops: -1,
                  stopAtSlide: -1,
                  shuffle: "off",
                  autoHeight: "off",
                  disableProgressBar: "on",
                  hideThumbsOnMobile: "off",
                  hideSliderAtLimit: 0,
                  hideCaptionAtLimit: 0,
                  hideAllCaptionAtLilmit: 0,
                  debugMode: false,
                  fallbacks: {
                      disableFocusListener: false,
                      nextSlideOnWindowFocus: "off",
                      simplifyAll: "off",
                  },
              });
      });
  })(window["jQuery"]); /* tslint:disable:no-string-literal */
  });
  return (
    <div className="SliderWrapper">
            <div id="rev_slider_8_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="car-dealer-06"
                        data-source="gallery"
                        style={{margin:'0px auto', backgroundColor:'transparent', padding:'0px', marginTop:'0px', marginBottom:'0px'}}>
                        {/* START REVOLUTION SLIDER 5.3.0.2 fullwidth mode   */}
                        <div id="rev_slider_8_1" className="rev_slider fullwidthabanner" style={{display:'none'}} data-version="5.3.0.2">
                            <ul>
                                {/* SLIDE    */}
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


                                
                                {/* SLIDE    */}
                                <li data-index="rs-13" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                                    data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300"
                                    data-thumb={banner_two} data-rotate="0" data-saveperformance="off"
                                    data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5=""
                                    data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    {/* MAIN IMAGE   */}
                                    <img src={image2} alt="" data-bgposition="center center"
                                        data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina/>
                                    {/* LAYERS   */}

                                {/* LAYER NR. 2   */}
                                <div className="tp-caption tp-resizeme main_title" data-x="165" data-y="center" data-voffset="-150" data-width="['auto']"
                                    data-height="['auto']" data-type="text" data-responsive_offset="on"
                                    data-frames='[{"delay":200,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'>
                                    Designer<br/>
                                    Shades </div>
                                
                                {/* LAYER NR. 3   */}
                                <div className="tp-caption tp-resizeme italic_line" data-x="165" data-y="center" data-voffset="-40" data-width="['auto']"
                                    data-height="['auto']" data-type="text" data-responsive_offset="on"
                                    data-frames='[{"delay":1500,"speed":1000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'>
                                    Summer Editonal </div>
                                
                                {/* LAYER NR. 5   */}
                                <div className="tp-caption link_parent" data-x="165" data-y="center" data-voffset="0" data-width="['auto']"
                                    data-height="['auto']" data-type="button" data-responsive_offset="on"
                                    data-frames='[{"delay":2800,"speed":1000,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"300","ease":"Linear.easeNone","force":true,"to":"o:1;rX:0;rY:0;rZ:0;z:0;"}]'>
                                    <a href="#" className="link"><img src={cart_logo} alt="LEARN More"/>LEARN More</a></div>
                                </li>
                            </ul>
                            <div className="tp-bannertimer tp-bottom" style={{visibility: "hidden"}}></div>
                        </div>
                    </div>
                </div>
      
  );
};

export default CarouselTest;