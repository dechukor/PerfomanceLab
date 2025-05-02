import { FC, useState } from "react";
import styles from "./CategoryPage.module.scss";
import { ProductCardList } from "../../modules";
import { Paginator, Sort } from "../../components";
import { useGetProductsByCategoryQuery } from "../../services/productsApi";
import { CategoryType } from "../../types/types";
import { Error, Loading, Select } from "../../UI";

interface CategoryPageProps {
  category: CategoryType;
}

interface QueryParametrs {
  page: number;
  perPage: number;
  sort: string;
  order: "asc" | "desc" | "";
}

export const CategoryPage: FC<CategoryPageProps> = ({ category }) => {
  const initialQueryParametrs: QueryParametrs = {
    page: 1,
    perPage: 5,
    sort: "",
    order: "",
  };

  const [queryParametrs, setQueryParametrs] = useState(initialQueryParametrs);

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useGetProductsByCategoryQuery({
    category,
    page: queryParametrs.page,
    perPage: queryParametrs.perPage,
    sort: queryParametrs.sort,
    order: queryParametrs.order,
  });

  const handleSetPage = (page: number) => {
    setQueryParametrs((prev) => {
      return { ...prev, page: page };
    });
  };

  const handleSetQuantityCards = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setQueryParametrs((prev) => {
      return { ...prev, page: 1, perPage: +event.target.value };
    });
  };

  const handleSetSort = (sort: string, order: "asc" | "desc" | "") => {
    setQueryParametrs((prev) => {
      return { ...prev, sort: sort, order: order };
    });
  };

  if (isLoading) return <Loading />;
  if (isError)
    return <Error error={"status" in error ? error.status : error.message} />;
  return (
    <>
      <div className={styles.categoryPageContainer}>
        <Sort setSort={handleSetSort} />
        <ProductCardList products={data.data} />
        <Paginator
          quantityPages={data.pages}
          activePage={queryParametrs.page}
          setActivePage={handleSetPage}
        />
        <Select
          defaultValue={queryParametrs.perPage}
          onChange={handleSetQuantityCards}
          options={[
            { value: "5", title: "5" },
            { value: "10", title: "10" },
            { value: "15", title: "15" },
            { value: "20", title: "20" },
            { value: "50", title: "50" },
            { value: `${data.items}`, title: "Все" },
          ]}
        />
      </div>
    </>
  );
};
