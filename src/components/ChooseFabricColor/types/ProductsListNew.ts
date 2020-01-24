/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductsListNew
// ====================================================

export interface ProductsListNew_categories_edges_node_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsListNew_categories_edges_node_products_edges_node_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
}

export interface ProductsListNew_categories_edges_node_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of variants for the product.
   */
  variants: (ProductsListNew_categories_edges_node_products_edges_node_variants | null)[] | null;
}

export interface ProductsListNew_categories_edges_node_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductsListNew_categories_edges_node_products_edges_node;
}

export interface ProductsListNew_categories_edges_node_products {
  __typename: "ProductCountableConnection";
  edges: ProductsListNew_categories_edges_node_products_edges[];
}

export interface ProductsListNew_categories_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  backgroundImage: ProductsListNew_categories_edges_node_backgroundImage | null;
  /**
   * List of products in the category.
   */
  products: ProductsListNew_categories_edges_node_products | null;
}

export interface ProductsListNew_categories_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductsListNew_categories_edges_node;
}

export interface ProductsListNew_categories {
  __typename: "CategoryCountableConnection";
  edges: ProductsListNew_categories_edges[];
}

export interface ProductsListNew {
  /**
   * List of the shop's categories.
   */
  categories: ProductsListNew_categories | null;
}
