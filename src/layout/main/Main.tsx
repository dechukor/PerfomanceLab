import { FC } from "react";
import styles from "./Main.module.scss";

import { Routes, Route } from "react-router-dom";
import { SelectCategory } from "../../pages";
import { CategoryPage } from "../../pages/category-page/CategoryPage";
import { categories } from "../../constants/categories";
import { Category } from "../../types/types";

export const Main: FC = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <Routes>
          <Route path="/" element={<SelectCategory />} />
          {categories.map((category: Category) => {
            return (
              <Route
                path={`/${category.type}`}
                element={
                  <CategoryPage
                    category={category.type}
                    title={category.title}
                  />
                }
              />
            );
          })}
          <Route path="*" element={<SelectCategory />} />
        </Routes>
      </main>
    </>
  );
};
