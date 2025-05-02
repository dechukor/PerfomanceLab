import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CategoryType } from "../types/types";
import { URL } from "../constants/URL";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (args: {
        category: CategoryType;
        page: number;
        perPage: number;
        sort: string;
        order: "asc" | "desc" | "";
      }) => {
        let query = `${args.category}?_page=${args.page}&_per_page=${args.perPage}`;
        if (args.sort) {
          if (args.order === "desc") {
            query += `&_sort=-${args.sort}`;
          } else {
            query += `&_sort=${args.sort}`;
          }
        }

        return query;
      },
    }),
  }),
});

export const { useGetProductsByCategoryQuery } = productsApi;
