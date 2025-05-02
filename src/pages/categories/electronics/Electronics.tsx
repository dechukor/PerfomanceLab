import { FC } from "react";
import styles from "./Electronics.module.scss";
import { ProductCardList } from "../../../modules";
import { useGetProductsByCategoryQuery } from "../../../services/productsApi";
import { CategoryType } from "../../../types/types";

export const Electronics: FC = () => {
  const category: CategoryType = "electronics";
  const { data = [], isLoading } = useGetProductsByCategoryQuery(category);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <div className={styles.electronicsContainer}>
        <ProductCardList products={data} />{" "}
      </div>
    </>
  );
};
