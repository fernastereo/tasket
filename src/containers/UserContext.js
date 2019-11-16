import { createContext } from "react";

const userContext = createContext({
  email: undefined,
});

export default userContext;
