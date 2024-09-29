import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import PizzaList from "./components/PizzaList";
import AddGoodModal from "./components/UI/AddGoodModal";
import CartModal from "./components/UI/CartModal";
import LoginModal from "./components/UI/LoginModal";
import { initializeUser } from "./redux/slices/loginReducer";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAddGoodModalOpen, setIsAddGoodModalOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeUser());
  }, [dispatch]);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openAddGoodModal = () => {
    setIsAddGoodModalOpen(true);
  };

  const closeAddGoodModal = () => {
    setIsAddGoodModalOpen(false);
  };
  return (
    <div className="container">
      <Header
        openModal={openModal}
        openCart={openCart}
        openAddGoodModal={openAddGoodModal}
      ></Header>
      <PizzaList></PizzaList>
      {isModalOpen && <LoginModal closeModal={closeModal}></LoginModal>}
      {isCartOpen && <CartModal closeCart={closeCart}></CartModal>}
      {isAddGoodModalOpen && (
        <AddGoodModal closeAddGoodModal={closeAddGoodModal} />
      )}
    </div>
  );
}
