import { createContext } from "react";

type AppContextType = {
  active: string;
  setActive: (username: string) => void;
  isLoading?: boolean;
};
export const AppContext = createContext<AppContextType>({
  active: "",
  setActive: () => {},
  isLoading: false,
});
