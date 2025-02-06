import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
  id: string;
  title: string;
  description?: string;
  category?: string;
  image?: string;
  rating?: string;
  price: number;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }), // Replace with your API base URL
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: 'products',
        method: 'POST',
        body: newProduct,
      }),
    }),
  }),
});

export const { useFetchProductsQuery, useAddProductMutation } = apiSlice;
