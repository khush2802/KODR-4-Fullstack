import { createContext, useState } from "react";

export const CartContext = createContext();

const ContextCart = ({ children }) => {
  const [cart, setCart] = useState([]);
  let count = 0
  return (
     <CartContext.Provider value={{ cart, setCart, count }}>
          {children}
     </CartContext.Provider>
  );
}

export default ContextCart;