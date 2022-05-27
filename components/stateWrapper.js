import { createContext } from "react";

const AppContext = createContext({
  isOpen: true,
  items: [],
  openCart: () => {},
  addItemToCart: () => {},
  getNumberOfItems: () => {},
});
export default function StateWrapper({ children }) {
  return <div>{children}</div>;
}
