import { FC } from "react";
import styles from "./Home.module.scss";
import { CategoryCard } from "../../components";
import "../../assets/images/category/category-electronics.png";

export const Home: FC = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <CategoryCard
          imagePath="/images/category/category-foods.png"
          imageAlt="Категория 'Еда'"
          title="Еда"
        ></CategoryCard>
        <CategoryCard
          imagePath="/images/category/category-clothes.png"
          imageAlt="Категория 'Одежда'"
          title="Одежда"
        ></CategoryCard>
        <CategoryCard
          imagePath="/images/category/category-electronics.png"
          imageAlt="Категория 'Электроника'"
          title="Электроника"
        ></CategoryCard>
      </div>
    </>
  );
};
