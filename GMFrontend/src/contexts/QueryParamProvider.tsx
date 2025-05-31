import { createContext, useState } from "react";
import type { QueryParamsContextType } from "../types/queryParamContextType";
import type { QueryParams } from "../types/queryParamsType";

const QueryParamsContext = createContext<QueryParamsContextType | undefined>(
  undefined
);
interface Props {
  children: React.ReactNode;
}

export const QueryParamsProvider = ({ children }: Props) => {
  const [queryParams, setQueryParamsState] = useState<QueryParams>({});

  const setQueryParams = (params: Partial<QueryParams>) => {
    setQueryParamsState((prev) => ({ ...prev, ...params }));
  };

  const clearQueryParams = () => {
    setQueryParamsState({});
  };

  return (
    <QueryParamsContext.Provider
      value={{ queryParams, setQueryParams, clearQueryParams }}
    >
      {children}
    </QueryParamsContext.Provider>
  );
};

export default QueryParamsContext;
