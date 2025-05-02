import { FC } from "react";
import styles from "./Clothes.module.scss";
import { ProductCardList } from "../../../modules";
import { useGetProductsByCategoryQuery } from "../../../services/productsApi";
import { CategoryType } from "../../../types/types";

export const Clothes: FC = () => {
  const category: CategoryType = "clothes";
  const { data = [], isLoading } = useGetProductsByCategoryQuery(category);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <div className={styles.foodsContainer}>
        <ProductCardList products={data} />
      </div>
    </>
  );
};
