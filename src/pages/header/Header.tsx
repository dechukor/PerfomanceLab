import { FC, useState } from "react";
import styles from "./Header.module.scss";
import { Button, Modal, Select } from "../../UI";
import { categories } from "../../constants/categories";
import { Link, useNavigate } from "react-router-dom";
import { Cart } from "../../modules";

export const Header: FC = () => {
  const navigate = useNavigate();
  const [modalCart, setModalCart] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const path = `/${event.target.value}`;
    navigate(path);
  };

  const handleCloseModalCart = () => {
    setModalCart(false);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <Link to="/">
          <h1 className={styles.title}>Просто магазин</h1>
        </Link>

        <Select defaultValue="" onChange={handleChange}>
          <option disabled value="">
            Выбор категории
          </option>
          {categories.map((category) => {
            return (
              <option key={category.type} value={category.type as string}>
                {category.title}
              </option>
            );
          })}
        </Select>

        <div className={styles.buttonsContainer}>
          <Button onClick={() => setModalCart(true)}>Корзина</Button>
        </div>
        {modalCart && (
          <Modal closeModal={handleCloseModalCart}>
            <Cart />
          </Modal>
        )}
      </header>
    </>
  );
};
