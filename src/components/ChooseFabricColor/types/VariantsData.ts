/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: VariantsData
// ====================================================

export interface VariantsData_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
}

export interface VariantsData {
  __typename: "Product";
  /**
   * List of variants for the product.
   */
  variants: (VariantsData_variants | null)[] | null;
}
