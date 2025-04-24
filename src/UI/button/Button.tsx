import { FC } from "react";
import styles from "./Button.module.scss";

export const Button: FC<React.HTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <>
      <button className={styles.buttonContainer} {...props}>
        {props.children}
      </button>
    </>
  );
};
