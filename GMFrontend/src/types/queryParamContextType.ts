export interface QueryParamsContextType {
  queryParams: QueryParamsType;
  setQueryParams: (params: Partial<QueryParamsType>) => void;
  clearQueryParams: () => void;
}
export interface QueryParamsType {
  workoutId?: number;
  exerciseId?: number;
  setId?: number;
}
