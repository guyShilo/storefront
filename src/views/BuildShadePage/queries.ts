import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";


import { ProductsListNew } from "./types/ProductsListNew";




export const fabricsQuery = gql`
query ProductsListNew {
  categories(first: 10) {
    edges {
      node {
        id
        name
        backgroundImage {
          url
        }
        ...ProductsData
      }
    }
  }
}
fragment ProductsData on Category{
  products(first: 10){
    edges{
      node{
        images{
          url
        }
        id
        name
        ...VariantsData
        ...AttributesData
      }
    }
  }
}
fragment VariantsData on Product{
    variants{
      id
      name
      sku
      images{
        url
      }
    }
}
fragment AttributesData on Product{
  attributes{
          attribute{
            id
            name
            values{
              id
              name
            }
          }
        }
}
`;

export const ChooseFabricQuery = TypedQuery<ProductsListNew, {}>(fabricsQuery);
