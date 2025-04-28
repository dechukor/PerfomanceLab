import { FC } from "react";
import styles from "./Main.module.scss";

import { Foods } from "../foods/Foods";

export const Main: FC = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <Foods />
      </main>
    </>
  );
};
