import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGood } from "../../redux/slices/goodsReducer";

export default function AddGoodModal({ closeAddGoodModal }) {
  const [newGood, setNewGood] = useState({
    title: "",
    img: "",
    price: "",
    rating: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGood((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addGood(newGood));
    closeAddGoodModal();
  };

  return (
    <div className="modal-overlay" onClick={closeAddGoodModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Добавить товар</h2>
          <button className="close-button" onClick={closeAddGoodModal}>
            &times;
          </button>
        </div>
        <form className="modal-body" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Название товара"
            className="modal-input"
            value={newGood.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="img"
            placeholder="URL изображения"
            className="modal-input"
            value={newGood.img}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Цена"
            className="modal-input"
            value={newGood.price}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Рейтинг"
            className="modal-input"
            value={newGood.rating}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Описание"
            className="modal-input"
            value={newGood.description}
            onChange={handleInputChange}
            required
          />
          <button className="modal-submit" type="submit">
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}
