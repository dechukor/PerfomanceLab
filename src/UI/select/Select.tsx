import { FC, RefObject } from "react";
import styles from "./Select.module.scss";

type SelectProps = React.HTMLAttributes<HTMLSelectElement> & {
  options?: { value: string; title: string }[];
  ref?: RefObject<HTMLSelectElement | null>;
  value?: string;
};

export const Select: FC<SelectProps> = ({ options, ref, value, ...props }) => {
  return (
    <>
      <select
        {...props}
        ref={ref}
        value={value}
        className={styles.selectContainer}
      >
        {props.children}
        {options &&
          options.map((option) => {
            return (
              <option key={option.title} value={option.value}>
                {option.title}
              </option>
            );
          })}
      </select>
    </>
  );
};
