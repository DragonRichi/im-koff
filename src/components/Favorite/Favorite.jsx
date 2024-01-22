import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../../views/Goods/Goods";
import { useEffect } from "react";
import { fetchProduct } from "../../store/product/product";
import { useLocation } from "react-router-dom";

import styles from "../Favorite/Favorite.module.scss";

export const Favorite = () => {
  const location = useLocation();

  const favoriteList = useSelector((item) => item.favorite.favoriteList);
  const dispatch = useDispatch();
  console.log(favoriteList);

  useEffect(() => {
    if (location.pathname === "/favorite") {
      dispatch(fetchProduct({ list: favoriteList.join(",") }));
    }
  }, [dispatch, location.pathname]);

  return (
    <section className={styles.favorite}>
      {favoriteList ? <Goods /> : <div>Loading..</div>}
    </section>
  );
};
