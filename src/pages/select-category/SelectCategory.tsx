import { FC, useEffect } from "react";
import styles from "./SelectCategory.module.scss";
import { CategoryCard } from "../../components";
import { Link } from "react-router-dom";
import { categories } from "../../constants/categories";
import { useDispatch } from "react-redux";
import { clearCategory } from "../../store/selectedCategorySlice";

export const SelectCategory: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCategory());
  }, []);
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
                type={category.type}
              ></CategoryCard>
            </Link>
          );
        })}
      </div>
    </>
  );
};
