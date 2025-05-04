export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};

export type Products = Product[];

export type CategoryType = "foods" | "clothes" | "electronics";

export type Category = {
  type: CategoryType;
  title: string;
  imagePath: string;
};

export type Categories = Category[];
