import type { QueryParams } from "./queryParamsType";

export interface QueryParamsContextType {
  queryParams: QueryParams;
  setQueryParams: (params: Partial<QueryParams>) => void;
  clearQueryParams: () => void;
}
