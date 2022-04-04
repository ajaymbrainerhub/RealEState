import React, { useEffect } from "react";
import "./style/buy.css";
import UserList from "../../components/UserList/UserList";
import ProductList from "../../components/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../store/actions/userActions";
import { setIsHomePage } from "../../store/actions/settingAction";
import Chat from "../agent/Chat";

export default function Buy() {
  const products = useSelector((state) => state.productReducer.products);
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
    dispatch(setIsHomePage(true));
    return () => {
      dispatch(setIsHomePage(false));
    }; // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="scrollTamplate">
        <UserList users={users} />
        <ProductList products={products} />
        <Chat />
      </div>
    </>
  );
}
