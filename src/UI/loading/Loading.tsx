import { FC } from "react";
import styles from "./Loading.module.scss";
import imageLoading from "/images/plugs/loading.gif";

export const Loading: FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <img src={imageLoading} alt="Loading..." />
    </div>
  );
};
