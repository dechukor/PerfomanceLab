import { FC } from "react";
import styles from "./Foods.module.scss";
import { ProductCardList } from "../../../modules";
import { useGetProductsByCategoryQuery } from "../../../services/productsApi";
import { CategoryType } from "../../../types/types";

export const Foods: FC = () => {
  const category: CategoryType = "foods";
  const limit: number = 20;
  const { data = [], isLoading } = useGetProductsByCategoryQuery({
    category,
    limit,
  });

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <div className={styles.foodsContainer}>
        <ProductCardList products={data} />{" "}
      </div>
    </>
  );
};
