import { FC } from "react";
import styles from "./Foods.module.scss";
import { Products } from "../../types/types";
import { ProductCardList } from "../../modules";

export const Foods: FC = () => {
  const foodItems: Products = [
    {
      id: 1,
      title: "Пицца Пепперони",
      description:
        "Классическая пицца с пикантной пепперони, томатным соусом и сыром моцарелла.",
      price: 12.99,
      imageUrl:
        "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      title: "Суши с лососем",
      description: "Нежные суши с лососем, рисом и нори.",
      price: 8.49,
      imageUrl:
        "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      title: "Стейк Рибай",
      description:
        "Сочный стейк рибай с легкой прожаркой, приправленный специями.",
      price: 19.99,
      imageUrl:
        "https://images.pexels.com/photos/1049726/pexels-photo-1049726.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      title: "Паста Карбонара",
      description:
        "Итальянская паста с беконом, сыром пармезан и яичным соусом.",
      price: 10.99,
      imageUrl:
        "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      title: "Чизбургер",
      description:
        "Сытный чизбургер с говяжьей котлетой, сыром чеддер и свежими овощами.",
      price: 7.99,
      imageUrl:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      title: "Тако с курицей",
      description: "Мексиканские тако с курицей, авокадо и острым соусом.",
      price: 5.49,
      imageUrl:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 7,
      title: "Фруктовый салат",
      description:
        "Освежающий салат из свежих фруктов: манго, клубники, киви и банана.",
      price: 6.99,
      imageUrl:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 8,
      title: "Шоколадный торт",
      description: "Нежный шоколадный торт с воздушным кремом.",
      price: 4.99,
      imageUrl:
        "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 9,
      title: "Рамен",
      description:
        "Японский рамен с курицей, яйцом и овощами в ароматном бульоне.",
      price: 9.99,
      imageUrl:
        "https://images.pexels.com/photos/7466640/pexels-photo-7466640.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 10,
      title: "Мороженое с ягодами",
      description: "Ванильное мороженое с сочными ягодами и сиропом.",
      price: 3.99,
      imageUrl:
        "https://images.pexels.com/photos/209541/pexels-photo-209541.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];
  return (
    <>
      <div className={styles.foodsContainer}>
        <ProductCardList products={foodItems} />{" "}
      </div>
    </>
  );
};
