import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../../redux/slices/goodsReducer";

export default function CartModal({ closeCart }) {
  const cart = useSelector((state) => state.goods.cart);
  const totalPrice = useSelector((state) => state.goods.totalPrice);
  const dispatch = useDispatch();
  const increment = (value) => dispatch(addToCart(value));
  const dicrement = (value) => dispatch(removeFromCart(value));
  const clearHandle = () => dispatch(clearCart());
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <h2>Корзина</h2>
        {cart.length === 0 ? (
          <p>Корзина пуста.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <h3>{item.title}</h3>
                    <p>Цена: {item.price * item.quantity} $</p>
                    <div className="quantity-controls">
                      <button onClick={() => dicrement(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increment(item.id)}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <span>Итого: {totalPrice} $</span>
            </div>
          </>
        )}
        <div className="cart-modal-actions">
          <button className="checkout-button">Оформить заказ</button>
          <button className="clear-cart-btn" onClick={clearHandle}>
            Очистить корзину
          </button>
          <button className="close-button" onClick={closeCart}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
