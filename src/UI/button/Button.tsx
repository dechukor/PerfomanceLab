import { FC } from "react";
import styles from "./Button.module.scss";

export const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}) => {
  return (
    <>
      <button
        {...props}
        className={`${styles.buttonContainer} ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
};
