import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("eventDecorCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("eventDecorCart", JSON.stringify(cart));
  }, [cart]);

  // Add Product

  const addToCart = (product) => {

    const exist = cart.find(item => item.id === product.id);

    if (exist) {

      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

  };

  // Remove Product

  const removeFromCart = (id) => {

    setCart(cart.filter(item => item.id !== id));

  };

  // Increase Quantity

  const increaseQuantity = (id) => {

    setCart(
      cart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };

  // Decrease Quantity

  const decreaseQuantity = (id) => {

    setCart(
      cart
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    );

  };

  // Total Price

  const totalPrice = cart.reduce(

    (total, item) => total + item.price * item.quantity,

    0

  );

  // Total Items

  const totalItems = cart.reduce(

    (total, item) => total + item.quantity,

    0

  );

  return (

    <CartContext.Provider

      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice
      }}

    >

      {children}

    </CartContext.Provider>

  );

};

export const useCart = () => useContext(CartContext);