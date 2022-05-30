import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  isOpen: true,
  items: [],
  openCart: () => {},
  addItemToCart: (item) => {},
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
    const found = temp.find((i) => i.id === item.id);
    if (found) {
      found.qty++;
    } else {
      item.qty = 1;
      temp.push(item);
    }
    setItems([...temp]);
    console.log({ items });
  }

  function getNumberOfItems() {
    const total = items.reduce((acc, item) => {
      return (acc += item.qty);
    }, 0);
    return total;
  }

  return (
    <AppContext.Provider
      value={{
        items,
        isOpen,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: getNumberOfItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
