
 import React from "react";

 import "./index.scss";

 import placeholder_image_4 from "./img/Placeholder4.png";

 import productImage from "./img/Product.png";

 import product_image_1 from "./img/Product1.png";
  
 import product_image_2 from "./img/Product2.png";

 


 class CollectionOfShades extends React.Component {
  componentDidMount(){
    (function($) {
     $(".owl-carousel").owlCarousel({
       loop: true,
       margin: 50,
       nav: true,
       navText: [
         "<img src='./src/img/arrow_left.svg'/>",
         "<img src='./src/img/arrow_right.svg'/>",
       ],
       autoplay: true,
       autoplayHoverPause: true,
       responsive: {
         0: {
           items: 1,
         },
         600: {
           items: 2,
         },
         1000: {
           items: 3,
         },
       },
     });
    })
    /* tslint:disable:no-string-literal */
    (window['jQuery'])
    /* tslint:enable:no-string-literal */
     }
  render() {
    return (
      <div className="CollectionOfShades">
          <div className="container">
             <div className="row">
               <div className="col-md-12">
                 <img src={placeholder_image_4} alt="" className="img-fluid left_img" />
                 <img
                   src={placeholder_image_4}
                   alt=""
                   className="img-fluid right_img"
                 />
                 <h2 className="main_title">Our Collection of Shades</h2>
                 <div className="carousel-wrap">
                   <div className="owl-carousel">
                     <div className="item">
                       <img src={productImage} className="img-fluid" alt="Product" />
                       <h4 className="product_name">Double Roller Shades</h4>
                     </div>
                     <div className="item">
                       <img src={product_image_1} className="img-fluid" alt="Product" />
                       <h4 className="product_name">Luxshade Solar</h4>
                     </div>
                     <div className="item">
                       <img src={product_image_2} className="img-fluid" alt="Product" />
                       <h4 className="product_name">Slimline Dual Roller</h4>
                     </div>
                     <div className="item">
                       <img src={productImage} className="img-fluid" alt="Product" />
                       <h4 className="product_name">Double Roller Shades</h4>
                     </div>
                     <div className="item">
                       <img src={product_image_1} className="img-fluid" alt="Product" />
                       <h4 className="product_name">Luxshade Solar</h4>
                     </div>
                     <div className="item">
                       <img src={product_image_2} className="img-fluid" alt="Product" />
                       <h4 className="product_name">Slimline Dual Roller</h4>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
       </div>
       )
   };
 }
export default CollectionOfShades;

