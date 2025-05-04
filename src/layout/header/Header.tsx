import { FC, useState } from "react";
import styles from "./Header.module.scss";
import { Button, Modal, Select } from "../../UI";
import { Cart } from "../../modules";
import { categories } from "../../constants/categories";
import { Link, useNavigate } from "react-router-dom";
import logo from "/images/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectCategory } from "../../store/selectedCategorySlice";
import { CategoryType } from "../../types/types";

export const Header: FC = () => {
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);
  const currentCategory = useSelector(
    (state: RootState) => state.selectedCategory.value
  );
  const dispatch = useDispatch();

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const path = `/${event.target.value}`;
    navigate(path);
    dispatch(selectCategory(event.target.value as CategoryType));
  };

  const handleCloseCart = () => {
    setOpenCart(false);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Simple Shop" />
          </Link>
        </div>
        <div className={styles.buttonsContainer}>
          <Select
            value={currentCategory ? currentCategory : ""}
            onChange={handleChangeCategory}
          >
            <option disabled value="">
              Выбор категории
            </option>
            {categories.map((category) => {
              return (
                <option
                  key={category.type}
                  value={category.type as string}
                  // selected={currentCategory === category.type}
                >
                  {category.title}
                </option>
              );
            })}
          </Select>
          <Button onClick={() => setOpenCart(true)}>Корзина</Button>
        </div>
        {openCart && (
          <Modal closeModal={handleCloseCart}>
            <Cart closeCart={handleCloseCart} />
          </Modal>
        )}
      </header>
    </>
  );
};
