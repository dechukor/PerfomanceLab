import { FC } from "react";
import styles from "./CategoryCard.module.scss";
import { Button } from "../../UI";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../store/selectedCategorySlice";
import { CategoryType } from "../../types/types";

interface CategoryCardProps {
  imagePath: string;
  imageAlt: string;
  title: string;
  type: CategoryType;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  imagePath,
  imageAlt,
  title,
  type,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        className={styles.cardButton}
        onClick={() => dispatch(selectCategory(type))}
      >
        <div className={styles.cardContainer}>
          <img className={styles.image} src={imagePath} alt={imageAlt} />
          <div className={styles.title}>{title}</div>
        </div>
      </Button>
    </>
  );
};
