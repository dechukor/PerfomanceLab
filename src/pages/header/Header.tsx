import { FC } from "react";
import styles from "./Header.module.scss";
import { Button } from "../../UI";

export const Header: FC = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <h1 className={styles.title}>Просто магазин</h1>
        <div className={styles.buttonsContainer}>
          <Button>Cart</Button>
          <Button>Cart</Button>
          <Button>Cart</Button>
        </div>
      </header>
    </>
  );
};
