import { createContext, useState } from "react";

const AppContext = createContext({
  isOpen: false,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  addItemToCart: () => {},
  getNumberOfItems: () => {},
});
export default function StateWrapper({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  function handleOpenCart() {
    setIsOpen(true);
  }
  function handleCloseCart() {
    setIsOpen(false);
  }

  function handleAddItemToCart(item) {
    const temp = [...items];
    const found = temp.find((product) => product.id === item.id);

    if (found) {
      found.qty++;
    } else {
      item.qty = 1;
    }

    setItems([...temp]);
  }

  function handleNumberOfItems() {
    total = items.reduce((acc, item) => acc + item.qty, 0);
    return total;
  }
  
  return <div>{children}</div>;
}
