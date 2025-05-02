import { FC } from "react";
import styles from "./Cart.module.scss";

// interface CartProps {

// }

export const Cart: FC = () => {
  return (
    <>
      <div className={styles.cartContainer}>
        <h2 className={styles.title}>Корзина</h2>
      </div>
    </>
  );
};
