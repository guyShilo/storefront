
import React from "react";

import "./index.scss";

//  add here to right CSS files
import bedroom from "../../images/bedroom.png";

import xpng from "../../images/CloseLogo.svg";

import { TypedHomePageQuery } from "./queries";

// import { getGraphqlIdFromDBId } from "../../core/utils";

// const variables = {
//     id: getGraphqlIdFromDBId( 'UHJvZHVjdDoyNDk=' , "Category"),
//     type: it,
//   };

// client: {
//     service: {
//       name: "saleor",
//       url: "http://localhost:8000/graphql/"
//     }
//   }

//  import { TypedCategoryProductsQuery } from "./queries";

//  import { useQuery } from '@apollo/react-hooks';


//  export const Toggle = () => {
//     const [show, toggleShow] = React.useState(true);
  
//     return (
//       <div>
//         <button
//           onClick={() => toggleShow(!show)}
//         >
//           toggle: {show ? 'show' : 'hide'}
//         </button>    
//         {show && <div>Hi there</div>}
//       </div>
//     )
//   }


const ChooseFabricColor: React.FC= () => {
    const [show, toggleShow] = React.useState(true);
    
        return (
                <div className="choose-your-fabric-color">
                    <div className="top-details">
                        <button
                        className="button-back"
                        onClick={() => toggleShow(!show)}
                        >
                        back
                        {/* toggle: {show ? 'show' : 'hide'} */}
                        </button>    
                        {show &&
                        <div className="choose-slider-nav">01/02</div>
                        }
                        <div className="choose-slider-nav">02/02</div>
                        {/* <div ><a href="#">back</a></div> */}
                    </div>
                    <br />
                    <h3 >Choose Your Fabric + Color</h3>
                    <div className="selected-title">
                        <span className="light-grey">Selected Shade:</span>
                        <span className="yellow">Double Roller</span>
                    </div>
                    <br />
                    <TypedHomePageQuery>
                        {({data}) => {
                            return data.categories.edges.map((item) => (
                                <div className="fabric-type" key={item.node.id}>
                                    <p className="fabric-type-title dark-grey"><b>Fabric:</b>{item.node.name} || 3000 HT 3% (98”)</p>
                                    <div className="fabric-images-table">
                                        <div className="fabric-images-table-single-item">
                                            <img src={bedroom}/>
                                            <span >Double Roller</span>
                                        </div>
                                    </div>
                                </div>
                            ));
                        }}
                    </TypedHomePageQuery>
                    <div className="selected-fabric">
                        <div className="upper-items">
                            <img className="fabric-img" src={bedroom} />
                            <div className="fabric-description">
                                <div className="up-details">
                                    <div className="row"><span className="dark-grey">Color: </span><span className="light-grey"> Ivory</span></div>
                                    <div className="row"><span className="dark-grey">Max Shade Width: </span><span className="light-grey"> 96</span></div>
                                    <div className="row"><span className="dark-grey">Fabric Width: </span><span className="light-grey"></span></div>
                                    <div className="row"><span className="dark-grey">Content: </span><span className="light-grey"></span></div>
                                    <div className="row"><span className="dark-grey">Fabric Number: </span><span className="light-grey"></span></div>
                                </div>
                                <div className="down-details">
                                    <div className="row"><span className="dark-grey">Dimout Factor: </span><span className="light-grey"> Ivory</span></div>
                                    <div className="row"><span className="dark-grey">Energy Savings: </span><span className="light-grey"> 96</span></div>
                                    <div className="row"><span className="dark-grey">UV Blocking: </span><span className="light-grey"> 96</span></div>
                                </div>
                            </div>
                            <div> <img src={xpng}/></div>
                        </div>
                        <div className="description">
                            <span className="dark-grey">Description:</span><span className="light-grey"> A beautiful basic light filtering solid that will help eliminate glare, maintain natural light and provide full privacy. Translucent with a subtle texture.</span>
                        </div>
                        <div className="down_items">
                            <a className="display-swatch one" href="#"><span>SWATCH ADDED</span></a>
                            <a className="display-swatch two" href="#"><span>ORDER SWATCH</span></a>
                            <a href="#"><span>CONTINUE</span></a>
                        </div>
                    </div>
            </div>
    );
  }
export default ChooseFabricColor;
