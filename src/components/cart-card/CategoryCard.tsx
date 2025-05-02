import { FC } from "react";
import styles from "./CategoryCard.module.scss";
import { Button } from "../../UI";

interface CategoryCardProps {
  imagePath: string;
  imageAlt: string;
  title: string;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  imagePath,
  imageAlt,
  title,
}) => {
  return (
    <>
      <Button className={styles.cardButton}>
        <div className={styles.cardContainer}>
          <img className={styles.image} src={imagePath} alt={imageAlt} />
          <div className={styles.title}>{title}</div>
        </div>
      </Button>
    </>
  );
};
