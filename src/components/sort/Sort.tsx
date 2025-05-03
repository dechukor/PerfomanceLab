import { FC, useRef } from "react";
import styles from "./Sort.module.scss";
import { Button, Select } from "../../UI";

type Order = "asc" | "desc";
interface SortProps {
  setSort: (sort: string, order: Order) => void;
}

export const Sort: FC<SortProps> = ({ setSort }) => {
  const sortRef = useRef<HTMLSelectElement>(null);
  const orderRef = useRef<HTMLSelectElement>(null);

  const handleClickApply = () => {
    if (sortRef.current && orderRef.current) {
      setSort(sortRef.current.value, orderRef.current.value as Order);
    }
  };

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

      <Button className={styles.buttonApply} onClick={handleClickApply}>
        Применить
      </Button>
    </div>
  );
};
