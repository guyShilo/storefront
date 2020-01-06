/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Something
// ====================================================

export interface Something_category_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface Something_category_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: Something_category_products_edges_node;
}

export interface Something_category_products {
  __typename: "ProductCountableConnection";
  edges: Something_category_products_edges[];
}

export interface Something_category {
  __typename: "Category";
  /**
   * List of products in the category.
   */
  products: Something_category_products | null;
}

export interface Something {
  /**
   * Look up a category by ID.
   */
  category: Something_category | null;
}

export interface SomethingVariables {
  id: number;
}
