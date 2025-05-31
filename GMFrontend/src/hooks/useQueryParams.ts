import { useContext } from "react";
import QueryParamsContext from "../contexts/QueryParamProvider";

export const useQueryParams = () => {
  return useContext(QueryParamsContext);
};
