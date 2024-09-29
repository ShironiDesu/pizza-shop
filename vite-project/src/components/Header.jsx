import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/loginReducer";
import { setSearchTerm } from "../redux/slices/goodsReducer";

export default function Header({ openModal, openCart, openAddGoodModal }) {
  const currentUser = useSelector((state) => state.login.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value)); 
  }; 

  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="https://avatars.mds.yandex.net/get-altay/777564/2a00000188438710e735d7317c36834abed6/XXL_height"
          alt="Delivery Food"
          className="logo-icon"
        />
        <span className="logo-text">Delivery Food</span>
      </div>

      <div className="header-input">
        <input
          type="text"
          placeholder="Поиск"
          className="input-address"
          onChange={handleSearchChange}
        />
      </div>

      {currentUser ? (
        <div className="user-info">
          <p>Добро пожаловать, {currentUser.login}!</p>
          <button className="cart-button" onClick={openCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="cart-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h12m-10 0a1 1 0 110 2 1 1 0 010-2zm10 0a1 1 0 110 2 1 1 0 010-2z"
              />
            </svg>
            Корзина
          </button>
          {currentUser.role === "admin" && (
            <button className="add-goods-button" onClick={openAddGoodModal}>Добавить товар</button>
          )}
          <button className="logout-button" onClick={handleLogout}>
            Выйти
          </button>
        </div>
      ) : (
        <button className="login-button" onClick={openModal}>
          Войти
        </button>
      )}
    </header>
  );
}
