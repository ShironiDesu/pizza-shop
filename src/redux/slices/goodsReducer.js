import { createSlice } from "@reduxjs/toolkit";

const goodsReducer = createSlice({
  name: "goods",
  initialState: {
    goods: [
      {
        id: 1,
        title: "Margherita",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 8.99,
        rating: 4.5,
        description:
          "Classic Margherita pizza with fresh mozzarella, tomatoes, and basil.",
      },
      {
        id: 2,
        title: "Pepperoni",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 9.99,
        rating: 4.7,
        description: "Spicy pepperoni slices on a rich tomato sauce.",
      },
      {
        id: 3,
        title: "BBQ Chicken",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 10.99,
        rating: 4.6,
        description: "Grilled chicken with BBQ sauce and red onions.",
      },
      {
        id: 4,
        title: "Hawaiian",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 9.49,
        rating: 4.3,
        description: "A sweet and savory combination of ham and pineapple.",
      },
      {
        id: 5,
        title: "Veggie",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 8.49,
        rating: 4.4,
        description: "A delicious mix of seasonal vegetables.",
      },
      {
        id: 6,
        title: "Meat Lovers",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 11.99,
        rating: 4.8,
        description: "Loaded with pepperoni, sausage, ham, and bacon.",
      },
      {
        id: 7,
        title: "Buffalo Chicken",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 10.49,
        rating: 4.6,
        description: "Spicy buffalo chicken with ranch sauce.",
      },
      {
        id: 8,
        title: "Supreme",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 12.49,
        rating: 4.7,
        description:
          "A hearty pizza with pepperoni, bell peppers, onions, and olives.",
      },
      {
        id: 9,
        title: "Four Cheese",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 9.99,
        rating: 4.5,
        description:
          "A delightful blend of mozzarella, cheddar, gorgonzola, and parmesan.",
      },
      {
        id: 10,
        title: "Mushroom",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 9.49,
        rating: 4.4,
        description: "Fresh mushrooms with a creamy garlic sauce.",
      },
      {
        id: 11,
        title: "Spinach Alfredo",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 9.79,
        rating: 4.6,
        description: "Creamy Alfredo sauce with fresh spinach and garlic.",
      },
      {
        id: 12,
        title: "Taco Pizza",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 10.99,
        rating: 4.7,
        description:
          "A flavorful taco-inspired pizza with ground beef and salsa.",
      },
      {
        id: 13,
        title: "Pesto Chicken",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 11.49,
        rating: 4.6,
        description: "Grilled chicken with basil pesto and sun-dried tomatoes.",
      },
      {
        id: 14,
        title: "Bacon Ranch",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 10.49,
        rating: 4.5,
        description: "Bacon and ranch sauce for a delicious twist.",
      },
      {
        id: 15,
        title: "Greek Pizza",
        img: "https://avatars.mds.yandex.net/i?id=7875124c736993f6455cb284d8e3ba4d_l-5013948-images-thumbs&n=13",
        price: 9.89,
        rating: 4.4,
        description:
          "A refreshing pizza with feta cheese, olives, and tomatoes.",
      },
    ],

    cart: [],
    totalPrice: 0,
    searchTerm: "", 
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.goods.find((product) => product.id === action.payload);
      const cartItem = state.cart.find(
        (product) => product.id === action.payload
      );
      if (item) {
        if (cartItem) {
          cartItem.quantity += 1;
        } else {
          state.cart.push({ ...item, quantity: 1 });
        }

        state.totalPrice += item.price;
      }
    },
    removeFromCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
        state.totalPrice -= cartItem.price;
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
      state.totalPrice = 0;
    },
    deleteGood: (state, action) => {
      state.goods = state.goods.filter((item) => item.id !== action.payload);
    },
    addGood: (state, action) => {
      const newGood = {
        id: state.goods.length + 1,
        ...action.payload,
      };
      state.goods.push(newGood);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});
export const { addToCart, removeFromCart, clearCart, deleteGood, addGood,setSearchTerm } =
  goodsReducer.actions;
export default goodsReducer.reducer;
