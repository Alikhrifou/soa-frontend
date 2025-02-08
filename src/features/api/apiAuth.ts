import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the Facture interface based on your backend variables.
interface IAuth {
  username:string,
  password:string    
}


export const apiAuth = createApi({
  reducerPath: 'apiLogin',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8083/' }), // Replace with your actual base URL
  endpoints: (builder) => ({
    // Endpoint to fetch a list of factures.
    fetchFactures: builder.query<IAuth[], void>({
      query: () => 'factures',
    }),
    // Endpoint to add a new facture.
    login: builder.mutation({
      query: ({username,password}:IAuth) => ({
        url: 'auth/authenticate',
        method: 'POST',
        body: {username,password},
      }),
    }),
  }),
});

// Export hooks for usage in functional components.
export const { useFetchFacturesQuery, useLoginMutation } = apiAuth;