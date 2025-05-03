import { FC } from "react";
import styles from "./ProductCard.module.scss";
import { Product } from "../../types/types";
import { Button } from "../../UI";
import { PRICE_UNIT } from "../../constants/price-unit";
import noImage from "/images/plugs/noImage.png?url";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/cartSlice";

interface ProductCardProps {
  product: Product;
  inCart: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({ product, inCart }) => {
  const handleError = (event: Event | undefined) => {
    const image = event?.target as HTMLImageElement;
    image.src = noImage;
  };
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={product.imageUrl}
            alt={product.title}
            onError={() => handleError(event)}
          />
        </div>
        <div className={styles.price}>
          {product.price} {PRICE_UNIT}
        </div>
        <div className={styles.title}>{product.title}</div>
        {inCart ? (
          <div className={styles.removeBox}>
            <div className={styles.statusInCart}>В корзине</div>
            <Button
              title="Удалить из корзины"
              className={styles.buttonRemoveFromCart}
              onClick={() => dispatch(removeProduct({ id: product.id }))}
            >
              &#128465;
            </Button>
          </div>
        ) : (
          <Button
            title="Добавить в корзину"
            className={styles.buttonAddInCart}
            onClick={() => dispatch(addProduct({ ...product }))}
          >
            Добавить в корзину
          </Button>
        )}
      </div>
    </>
  );
};
