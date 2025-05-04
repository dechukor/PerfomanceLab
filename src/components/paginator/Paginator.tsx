import { FC } from "react";
import styles from "./Paginator.module.scss";
import { Button } from "../../UI";

interface PaginatorProps {
  quantityPages: number;
  activePage: number;
  setActivePage: (page: number) => void;
}

export const Paginator: FC<PaginatorProps> = ({
  quantityPages,
  activePage,
  setActivePage,
}) => {
  return (
    <div className={styles.paginatorContainer}>
      {activePage > 1 && (
        <Button onClick={() => setActivePage(activePage - 1)}>{`<`}</Button>
      )}
      {Array.from({ length: quantityPages }).map((_, index) => {
        const currentPage = index + 1;
        return (
          <Button
            key={index}
            className={currentPage === activePage ? styles.activePage : ""}
            onClick={() => setActivePage(currentPage)}
          >
            {currentPage}
          </Button>
        );
      })}
      {activePage < quantityPages && (
        <Button onClick={() => setActivePage(activePage + 1)}>{`>`}</Button>
      )}
    </div>
  );
};
