
import { Link } from "react-router-dom";

import {
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

import styles from "./History.module.css";

import { usePayment } from "../../../context/PaymentContext";

import { formatPrice } from "../../../utils/paymentUtils";

const History = () => {
  const { payments } = usePayment();

  if (!payments.length) {
    return (
      <div className={styles.history}>

        <div className={styles.empty}>

          <FaMoneyBillWave />

          <h2>No Payment History</h2>

          <p>
            You haven't submitted any payment yet.
          </p>

          <Link to="/">
            Browse Decorations
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className={styles.history}>

      <div className={styles.container}>

        <div className={styles.header}>

          <h1>Payment History</h1>

          <p>
            View all your submitted payments and their verification status.
          </p>

        </div>

        <div className={styles.list}>

          {payments.map((payment) => (

            <div
              className={styles.card}
              key={payment.invoiceId}
            >

              <div className={styles.top}>

                <div>

                  <h3>
                    {payment.invoiceId}
                  </h3>

                  <small>
                    {new Date(
                      payment.createdAt
                    ).toLocaleString()}
                  </small>

                </div>

                <span
                  className={
                    payment.paymentStatus ===
                    "verified"
                      ? styles.verified
                      : styles.pending
                  }
                >

                  {payment.paymentStatus ===
                  "verified" ? (
                    <>
                      <FaCheckCircle />
                      Verified
                    </>
                  ) : (
                    <>
                      <FaClock />
                      Pending
                    </>
                  )}

                </span>

              </div>

              <div className={styles.customer}>

                <p>

                  <strong>Name:</strong>{" "}

                  {payment.customer.fullName}

                </p>

                <p>

                  <strong>Phone:</strong>{" "}

                  {payment.customer.phone}

                </p>

                {payment.customer.email && (

                  <p>

                    <strong>Email:</strong>{" "}

                    {payment.customer.email}

                  </p>

                )}

              </div>

              <div className={styles.products}>

                {payment.items.map((item) => (

                  <div
                    key={item.id}
                    className={styles.item}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>

                      <h4>
                        {item.name}
                      </h4>

                      <small>

                        Qty :{" "}

                        {item.quantity || 1}

                      </small>

                    </div>

                    <strong>

                      {formatPrice(item.price)}

                    </strong>

                  </div>

                ))}

              </div>

              <div className={styles.footer}>

                <span>

                  Total

                </span>

                <strong>

                  {formatPrice(payment.total)}

                </strong>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default History;