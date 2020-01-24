/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductsData
// ====================================================

export interface ProductsData_products_edges_node_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
}

export interface ProductsData_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of variants for the product.
   */
  variants: (ProductsData_products_edges_node_variants | null)[] | null;
}

export interface ProductsData_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductsData_products_edges_node;
}

export interface ProductsData_products {
  __typename: "ProductCountableConnection";
  edges: ProductsData_products_edges[];
}

export interface ProductsData {
  __typename: "Category";
  /**
   * List of products in the category.
   */
  products: ProductsData_products | null;
}
