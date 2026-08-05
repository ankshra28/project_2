import React from "react";
import styles from "./Cart.module.css";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // const total = cartItems.reduce(
  //   (sum, item) => sum + Number(item.price),
  //   0
  // );

  return (
    <div className={styles.cartPage}>
      <div className={styles.heading}>
        <FaShoppingCart />
        <h1>My Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <h2>Your Cart is Empty</h2>
          <p>Add your favourite decorations to get started.</p>
        </div>
      ) : (
        <>
          <div className={styles.cartContainer}>
            {cartItems.map((item, index) => (
              <div className={styles.cartCard} key={index}>
                <img src={item.image} alt={item.name} />

                <div className={styles.info}>
                  <h2>{item.name}</h2>

                  <p>{item.description}</p>

                  <div className={styles.rating}>
                    ⭐ {item.rating} ({item.reviews} Reviews)
                  </div>

                  <h3>₹ {item.price}</h3>
                </div>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(index)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h2>Order Summary</h2>

            <div className={styles.priceRow}>
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className={styles.priceRow}>
              <span>Total Price</span>
              <span>₹ {total}</span>
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