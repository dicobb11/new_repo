import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "hadithApi",
  baseQuery: baseQuery,
  tagTypes: ["hadith"],
  endpoints: () => ({}),
});
