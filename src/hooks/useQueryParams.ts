import { useContext } from "react";
import QueryParamsContext from "../contexts/QueryParamProvider";

export const useQueryParams = () => {
  const context = useContext(QueryParamsContext);
  if (!context) throw new Error("QueryParams context not set");
  return context;
};
