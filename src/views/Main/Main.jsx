import { useEffect } from "react";
import { Catalog } from "../../components/Catalog/Catalog";
import { Goods } from "../../components/Goods/Goods";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/categories/categories.slice";
import { fetchProduct } from "../../store/product/product";

export const Main = () => {
  const dispatch = useDispatch();

  return (
    <main>
      <Catalog data={dataCategories} />
      <Goods data={dataProduct} />
    </main>
  );
};
