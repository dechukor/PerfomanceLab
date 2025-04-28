import { FC } from "react";
import styles from "./ProductCard.module.scss";
import { Product } from "../../types/types";
import { Button } from "../../UI";
import { PRICE_UNIT } from "../../constants/price-unit";
import noImage from "../../../public/images/plugs/noImage.jpg";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const handleError = (event: Event | undefined) => {
    const image = event?.target as HTMLImageElement;
    image.src = noImage;
  };
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
        <Button className={styles.buttonAddInCart}>В корзину</Button>
      </div>
    </>
  );
};
