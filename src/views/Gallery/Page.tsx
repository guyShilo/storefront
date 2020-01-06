// import "./scss/index.scss";



import * as React from "react";

import {
  ProductsList_shop,
} from "./types/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

// import noPhotoImg from "../../images/no-photo.svg";

const Page: React.FC<{
  shop: ProductsList_shop;
}> = ({ shop }) => (
  <>
    <script className="structured-data-list" type="application/ld+json">
      {structuredData(shop)}
    </script>
  </>
);

export default Page;
