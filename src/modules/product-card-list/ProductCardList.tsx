import { FC } from "react";
import styles from "./ProductCardList.module.scss";
import { Product, Products } from "../../types/types";
import { ProductCard } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ProductCardListProps {
  products: Products;
}

export const ProductCardList: FC<ProductCardListProps> = ({ products }) => {
  const cart = useSelector((state: RootState) => state.cart);
  const cartIds = new Set(cart.map((product) => product.id));

  return (
    <>
      <div className={styles.listContainer}>
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart={cartIds.has(product.id)}
          />
        ))}
      </div>
    </>
  );
};
