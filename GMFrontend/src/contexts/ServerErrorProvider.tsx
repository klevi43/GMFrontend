import { Children, createContext, useState } from "react";

import type {
  ServerError,
  ServerErrorContextType,
} from "../types/serverErrorContextType";
import { useAsyncError } from "react-router";

interface Props {
  children: React.ReactNode;
}

const serverErrorObj: ServerError = {
  status: undefined,
  msg: undefined,
  timestamp: undefined,
};

const ServerErrorContext = createContext<ServerErrorContextType>({
  serverError: serverErrorObj,
  setServerError: () => {},
});

export const ServerErrorProvider = ({ children }: Props) => {
  const [serverError, setServerError] = useState<ServerError>(serverErrorObj);
  return (
    <ServerErrorContext.Provider value={{ serverError, setServerError }}>
      {children}
    </ServerErrorContext.Provider>
  );
};

export default ServerErrorContext;
