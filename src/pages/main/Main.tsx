import { FC } from "react";
import styles from "./Main.module.scss";

interface MainProps {
  children: React.ReactNode;
}
export const Main: FC<MainProps> = ({ children }) => {
  return (
    <>
      <main className={styles.mainContainer}>{children}</main>
    </>
  );
};
