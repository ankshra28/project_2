// import React from "react";
// import styles from "./Cart.module.css";
// import { FaTrash, FaShoppingCart } from "react-icons/fa";
// import { useCart } from "../../../context/CartContext";

// const Cart = () => {
//   const {
//     cart,
//     removeFromCart,
//     totalPrice,
//     totalItems,
//   } = useCart();

//   return (
//     <div className={styles.cartPage}>
//       {/* Heading */}
//       <div className={styles.heading}>
//         <FaShoppingCart />
//         <h1>My Cart</h1>
//       </div>

//       {/* Empty Cart */}
//       {cart.length === 0 ? (
//         <div className={styles.emptyCart}>
//           <h2>Your Cart is Empty</h2>
//           <p>Add your favourite decorations to get started.</p>
//         </div>
//       ) : (
//         <>
//           {/* Cart Items */}
//           <div className={styles.cartContainer}>
//             {cart.map((item) => (
//               <div className={styles.cartCard} key={item.id}>
//                 <img src={item.image} alt={item.name} />

//                 <div className={styles.info}>
//                   <h2>{item.name}</h2>

//                   <p>{item.description}</p>

//                   {(item.rating || item.reviews) && (
//                     <div className={styles.rating}>
//                       ⭐ {item.rating ?? "N/A"} ({item.reviews ?? 0} Reviews)
//                     </div>
//                   )}

//                   <h3>₹ {Number(item.price).toLocaleString()}</h3>

//                   <p>
//                     <strong>Quantity:</strong> {item.quantity}
//                   </p>

//                   <p>
//                     <strong>Subtotal:</strong> ₹{" "}
//                     {(Number(item.price) * item.quantity).toLocaleString()}
//                   </p>
//                 </div>

//                 <button
//                   className={styles.removeBtn}
//                   onClick={() => removeFromCart(item.id)}
//                   title="Remove Item"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Order Summary */}
//           <div className={styles.summary}>
//             <h2>Order Summary</h2>

//             <div className={styles.priceRow}>
//               <span>Total Products</span>
//               <span>{cart.length}</span>
//             </div>

//             <div className={styles.priceRow}>
//               <span>Total Quantity</span>
//               <span>{totalItems}</span>
//             </div>

//             <div className={styles.priceRow}>
//               <span>Total Price</span>
//               <span>₹ {Number(totalPrice).toLocaleString()}</span>
//             </div>

//             <button className={styles.checkoutBtn}>
//               Proceed To Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Cart.module.css";

import {
  FaTrash,
  FaShoppingCart,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";

import { toast } from "react-toastify";

import { useCart } from "../../../context/CartContext";
import { usePayment } from "../../../context/PaymentContext";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    totalPrice,
    totalItems,
  } = useCart();

  const {
    startSingleCheckout,
    startCartCheckout,
  } = usePayment();

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

          <p>
            Add your favourite decorations to get started.
          </p>

        </div>

      ) : (

        <>

          {/* Cart Items */}

          <div className={styles.cartContainer}>

            {cart.map((item) => (

              <div
                className={styles.cartCard}
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className={styles.info}>

                  <h2>{item.name}</h2>

                  <p>{item.description}</p>

                  {(item.rating || item.reviews) && (

                    <div className={styles.rating}>

                      ⭐ {item.rating ?? "N/A"}

                      {" "}({item.reviews ?? 0} Reviews)

                    </div>

                  )}

                  <h3>

                    ₹ {Number(item.price).toLocaleString()}

                  </h3>

                  <p>

                    <strong>Quantity:</strong>

                    {" "}

                    {item.quantity}

                  </p>

                  <p>

                    <strong>Subtotal:</strong>

                    {" "}

                    ₹{" "}

                    {(
                      Number(item.price) *
                      item.quantity
                    ).toLocaleString()}

                  </p>

                  {/* Product Actions */}

                  <div className={styles.actions}>

                    <button
                      className={styles.removeBtn}
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >

                      <FaTrash />

                      Remove

                    </button>

                    <button
                      className={styles.bookBtn}
                      onClick={() =>
                        navigate(
                          "/get-in-touch",
                          {
                            state: {
                              product: item,
                            },
                          }
                        )
                      }
                    >

                      <FaCalendarAlt />

                      Book Now

                    </button>

                    <button
                      className={styles.payBtn}
                      onClick={() => {

                        startSingleCheckout(item);

                        navigate("/payment");

                      }}
                    >

                      <FaMoneyBillWave />

                      Pay Now

                    </button>

                  </div>

                </div>

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
              <span>
                ₹ {Number(totalPrice).toLocaleString()}
              </span>
            </div>

            <button
              className={styles.checkoutBtn}
              onClick={() => {

                if (!cart.length) {

                  toast.error("Cart is empty.");

                  return;

                }

                startCartCheckout(cart);

                navigate("/payment");

              }}
            >

              <FaMoneyBillWave />

              Pay For All Products

            </button>

          </div>

        </>

      )}

    </div>
  );
};

export default Cart;