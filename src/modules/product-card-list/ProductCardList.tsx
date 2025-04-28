import { FC } from "react";
import styles from "./ProductCardList.module.scss";
import { Products } from "../../types/types";
import { ProductCard } from "../../components";

interface ProductCardListProps {
  products: Products;
}

export const ProductCardList: FC<ProductCardListProps> = ({ products }) => {
  return (
    <>
      <div className={styles.listContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
