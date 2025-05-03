import { FC, useEffect, useRef } from "react";
import styles from "./Cart.module.scss";
import { CartCardList } from "../cart-card-list/CartCardList";
import { Products } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Button } from "../../UI";
import { clearCart } from "../../store/cartSlice";
import { PRICE_UNIT } from "../../constants/price-unit";

interface CartProps {
  closeCart: () => void;
}

export const Cart: FC<CartProps> = ({ closeCart }) => {
  const cartRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const products: Products = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    setTimeout(() => {
      if (cartRef.current) {
        cartRef.current.classList.add(styles.open);
      }
    }, 0);

    return () => closeCart();
  }, []);
  return (
    <>
      <div ref={cartRef} className={styles.cartContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Корзина</h2>
          <div className={styles.buttonBox}>
            <Button
              title="Очистить корзину"
              onClick={() => dispatch(clearCart())}
            >
              &#128465;
            </Button>
            <Button title="Закрыть корзину" onClick={() => closeCart()}>
              &#10005;
            </Button>
          </div>
        </div>
        <CartCardList products={products}></CartCardList>
        <div className={styles.footer}>
          <div>Товаров в корзине: {products.length}</div>
          <div>
            Общая стоимость:
            <span className={styles.totalPrice}>
              {` ${products.reduce(
                (acc, product) => acc + product.price,
                0
              )} ${PRICE_UNIT}`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
