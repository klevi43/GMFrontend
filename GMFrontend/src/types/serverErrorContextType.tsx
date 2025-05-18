export interface ServerError {
  status?: number;
  msg?: string;
  timestamp?: Date;
}

export type ServerErrorContextType = {
  serverError: ServerError;
  //A function that can be used to update the state of a useState or useReducer hook.
  setServerError: React.Dispatch<React.SetStateAction<ServerError>>;
};
