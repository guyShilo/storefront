import * as React from "react";
import styled from "styled-components";

import image from "./img/Image.png"

const SContainer = styled.div`
  align-items: center;
  display: flex;
`;

const STextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
`;

const SlideOne = () => (
  <SContainer>
    <STextWrapper>
      <h1>
        Designer<br/>
        Shades      
      </h1>
      <p>
      Summer Editonal
      </p>
    </STextWrapper>
    <img src={image} />
    <button>Learn</button>
  </SContainer>
);

export default SlideOne;