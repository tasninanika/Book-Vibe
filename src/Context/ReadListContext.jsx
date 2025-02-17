import { createContext } from "react";

export const ReadList = createContext();
const ReadListContext = ({ children }) => {
  const Temp = 12;
  return <ReadList.Provider value={Temp}>{children}</ReadList.Provider>;
};

export default ReadListContext;
