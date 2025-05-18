import ServerErrorContext from "../contexts/ServerErrorProvider";

import { useContext } from "react";

export const useServerError = () => {
  return useContext(ServerErrorContext);
};
