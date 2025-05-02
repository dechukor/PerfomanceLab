import { FC, useRef } from "react";
import styles from "./Sort.module.scss";
import { Button, Select } from "../../UI";

interface SortProps {
  setSort: (sort: string, order: "asc" | "desc" | "") => void;
}

export const Sort: FC<SortProps> = ({ setSort }) => {
  const sortRef = useRef(null);
  const orderRef = useRef(null);

  return (
    <div className={styles.sortContainer}>
      <Select
        ref={sortRef}
        options={[
          { value: "title", title: "Наименование товара" },
          { value: "price", title: "Цена" },
        ]}
      />

      <Select
        ref={orderRef}
        options={[
          { value: "asc", title: "По возрастанию" },
          { value: "desc", title: "По убыванию" },
        ]}
      />

      <Button
        className={styles.buttonApply}
        onClick={() => setSort(sortRef.current.value, orderRef.current.value)}
      >
        Применить
      </Button>
    </div>
  );
};
