import { FC } from "react";
import styles from "./Error.module.scss";

interface ErrorProps {
  error?: string | number;
  title?: string;
}

export const Error: FC<ErrorProps> = ({
  error = "UNKNOWN ERROR",
  title = "Произошла ошибка.",
}) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorTitle}>{title}</div>
      <div className={styles.errorText}>{`(Error: ${error})`}</div>
    </div>
  );
};
