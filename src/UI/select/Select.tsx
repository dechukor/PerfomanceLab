import { FC } from "react";
import styles from "./Select.module.scss";

export const Select: FC = () => {
  return (
    <>
      <select className={styles.selectContainer}>Select</select>
    </>
  );
};
