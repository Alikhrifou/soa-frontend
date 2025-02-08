import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
  id: string;
  type: string;
  description?: string;
  reference?: string;
  imageUrl?: string;
  prix: number;
  clientId?: number;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9090/' }), // Replace with your API base URL
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => 'api/produits/all',
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: 'api/produits/create',
        method: 'POST',
        body: newProduct,
      }),
      
    }),
  }),
});

export const { useFetchProductsQuery, useAddProductMutation } = apiSlice;
