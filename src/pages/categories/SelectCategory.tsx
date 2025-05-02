import { FC } from "react";
import styles from "./SelectCategory.module.scss";
import { CategoryCard } from "../../components";
// import { categories } from "../../constants/categories";
import { Link } from "react-router-dom";
import { categories } from "../../constants/categories";

export const SelectCategory: FC = () => {
  return (
    <>
      <div className={styles.selectCategoryContainer}>
        {categories.map((category) => {
          return (
            <Link key={category.type} to={`/${category.type}`}>
              <CategoryCard
                imagePath={category.imagePath}
                imageAlt={category.title}
                title={category.title}
              ></CategoryCard>
            </Link>
          );
        })}
      </div>
    </>
  );
};
