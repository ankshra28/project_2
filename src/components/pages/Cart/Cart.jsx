import React from "react";
import styles from "./Cart.module.css";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    totalPrice,
    totalItems,
  } = useCart();

  return (
    <div className={styles.cartPage}>
      {/* Heading */}
      <div className={styles.heading}>
        <FaShoppingCart />
        <h1>My Cart</h1>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <h2>Your Cart is Empty</h2>
          <p>Add your favourite decorations to get started.</p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className={styles.cartContainer}>
            {cart.map((item) => (
              <div className={styles.cartCard} key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className={styles.info}>
                  <h2>{item.name}</h2>

                  <p>{item.description}</p>

                  {(item.rating || item.reviews) && (
                    <div className={styles.rating}>
                      ⭐ {item.rating ?? "N/A"} ({item.reviews ?? 0} Reviews)
                    </div>
                  )}

                  <h3>₹ {Number(item.price).toLocaleString()}</h3>

                  <p>
                    <strong>Quantity:</strong> {item.quantity}
                  </p>

                  <p>
                    <strong>Subtotal:</strong> ₹{" "}
                    {(Number(item.price) * item.quantity).toLocaleString()}
                  </p>
                </div>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                  title="Remove Item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className={styles.summary}>
            <h2>Order Summary</h2>

            <div className={styles.priceRow}>
              <span>Total Products</span>
              <span>{cart.length}</span>
            </div>

            <div className={styles.priceRow}>
              <span>Total Quantity</span>
              <span>{totalItems}</span>
            </div>

            <div className={styles.priceRow}>
              <span>Total Price</span>
              <span>₹ {Number(totalPrice).toLocaleString()}</span>
            </div>

            <button className={styles.checkoutBtn}>
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;