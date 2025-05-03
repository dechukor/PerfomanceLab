import { FC, useState } from "react";
import styles from "./ProductCard.module.scss";
import { Product } from "../../types/types";
import { Button, Modal } from "../../UI";
import { PRICE_UNIT } from "../../constants/price-unit";
import noImage from "/images/plugs/noImage.png?url";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/cartSlice";
import { ProductCardDescription } from "../product-card-description/ProductCardDescription";

interface ProductCardProps {
  product: Product;
  inCart: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({ product, inCart }) => {
  const dispatch = useDispatch();
  const [openDescription, setOpenDescription] = useState(false);

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
        <div className={styles.title} onClick={() => setOpenDescription(true)}>
          {product.title}
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
      {openDescription && (
        <Modal closeModal={() => setOpenDescription(false)}>
          <ProductCardDescription
            product={product}
            inCart={inCart}
            closeCard={() => setOpenDescription(false)}
          ></ProductCardDescription>
        </Modal>
      )}
    </>
  );
};
