import { FC } from "react";
import styles from "./CartCardList.module.scss";
import { Products } from "../../types/types";
import { CartCard } from "../../components";

interface CartCardListProps {
  products: Products;
}

export const CartCardList: FC<CartCardListProps> = ({ products }) => {
  return (
    <>
      <div className={styles.listContainer}>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
