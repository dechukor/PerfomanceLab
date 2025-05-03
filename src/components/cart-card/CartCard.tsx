import { FC } from "react";
import styles from "./CartCard.module.scss";
import { Product } from "../../types/types";
import { Button } from "../../UI";
import { PRICE_UNIT } from "../../constants/price-unit";
import noImage from "/images/plugs/noImage.png?url";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/cartSlice";

interface CartCardProps {
  product: Product;
}

export const CartCard: FC<CartCardProps> = ({ product }) => {
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

        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {product.price} {PRICE_UNIT}
        </div>
        <Button
          className={styles.buttonRemoveInCart}
          onClick={() => dispatch(removeProduct({ id: product.id }))}
        >
          &#10005;
        </Button>
      </div>
    </>
  );
};
