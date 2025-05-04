import { FC } from "react";
import styles from "./ProductCardDescription.module.scss";
import { Product } from "../../types/types";
import { Button } from "../../UI";
import { PRICE_UNIT } from "../../constants/price-unit";
import noImage from "/images/plugs/noImage.png?url";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/cartSlice";

interface ProductCardDescriptionProps {
  product: Product;
  inCart: boolean;
  closeCard: () => void;
}

export const ProductCardDescription: FC<ProductCardDescriptionProps> = ({
  product,
  inCart,
  closeCard,
}) => {
  const handleError = (event: Event | undefined) => {
    const image = event?.target as HTMLImageElement;
    image.src = noImage;
  };
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.cardContainer}>
        <Button
          title="Закрыть описание"
          className={styles.buttonClose}
          onClick={closeCard}
        >
          &#10005;
        </Button>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={product.imageUrl}
            alt={product.title}
            onError={() => handleError(event)}
          />
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.description}>{product.description}</div>
          <div className={styles.price}>
            {product.price} {PRICE_UNIT}
          </div>

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
      </div>
    </>
  );
};
