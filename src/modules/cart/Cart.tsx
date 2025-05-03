import { FC } from "react";
import styles from "./Cart.module.scss";
import { CartCardList } from "../cart-card-list/CartCardList";
import { Products } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Button } from "../../UI";
import { clearCart } from "../../store/cartSlice";

export const Cart: FC = () => {
  const dispatch = useDispatch();
  const products: Products = useSelector((state: RootState) => state.cart);
  return (
    <>
      <div className={styles.cartContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Корзина</h2>
          <Button onClick={() => dispatch(clearCart())}>
            Очистить корзину
          </Button>
        </div>
        <CartCardList products={products}></CartCardList>
      </div>
    </>
  );
};
