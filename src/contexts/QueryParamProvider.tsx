import { createContext, useCallback, useState } from "react";
import type {
  QueryParamsContextType,
  QueryParamsType,
} from "../types/queryParamContextType";

const QueryParamsContext = createContext<QueryParamsContextType | undefined>(
  undefined
);
interface Props {
  children: React.ReactNode;
}

export const QueryParamsProvider = ({ children }: Props) => {
  const [queryParams, setQueryParamsState] = useState<QueryParamsType>({});

  const setQueryParams = (params: Partial<QueryParamsType>) => {
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
