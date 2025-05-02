import { FC } from "react";
import styles from "./Main.module.scss";

import { Routes, Route } from "react-router-dom";
import { SelectCategory } from "../categories";
import { CategoryPage } from "../category-page/CategoryPage";
import { categories } from "../../constants/categories";
import { Category } from "../../types/types";

export const Main: FC = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <Routes>
          <Route path="/" element={<SelectCategory />} />
          {/* <Route path="/foods" element={<CategoryPage category="foods" />} />
          <Route
            path="/clothes"
            element={<CategoryPage category="clothes" />}
          />
          <Route
            path="/electronics"
            element={<CategoryPage category="electronics" />}
          /> */}
          {categories.map((category: Category) => {
            return (
              <Route
                path={`/${category.type}`}
                element={<CategoryPage category={category.type} />}
              />
            );
          })}
          <Route path="*" element={<SelectCategory />} />
        </Routes>
      </main>
    </>
  );
};
