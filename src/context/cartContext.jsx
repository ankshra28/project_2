import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("eventDecorCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("eventDecorCart", JSON.stringify(cart));
  }, [cart]);

  // ==========================
  // Add Product
  // ==========================
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      // Product already exists
      if (existing) {
        toast.success(`🛒 ${product.name} quantity updated`, {
          autoClose: 2000,
        });

        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      // New product -> add at TOP
      toast.success(`✅ ${product.name} added to cart`, {
        autoClose: 2000,
      });

      return [
        {
          ...product,
          quantity: 1,
        },
        ...prev,
      ];
    });
  };

  // ==========================
  // Remove Product
  // ==========================
  const removeFromCart = (id) => {
    const product = cart.find((item) => item.id === id);

    setCart((prev) => prev.filter((item) => item.id !== id));

    if (product) {
      toast.error(`❌ ${product.name} removed from cart`, {
        autoClose: 2000,
      });
    }
  };

  // ==========================
  // Increase Quantity
  // ==========================
  const increaseQuantity = (id) => {
    const product = cart.find((item) => item.id === id);

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

    if (product) {
      toast.info(`➕ ${product.name} quantity increased`, {
        autoClose: 1500,
      });
    }
  };

  // ==========================
  // Decrease Quantity
  // ==========================
  const decreaseQuantity = (id) => {
    const product = cart.find((item) => item.id === id);

    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    if (product) {
      toast.info(`➖ ${product.name} quantity decreased`, {
        autoClose: 1500,
      });
    }
  };

  // ==========================
  // Totals
  // ==========================
  const totalPrice = cart.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

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
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);