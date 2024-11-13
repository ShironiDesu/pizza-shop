import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/loginReducer";

export default function LoginModal({ closeModal }) {
  const [credentials, setCredentials] = useState({ login: "", password: "" });

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.login.currentUser);
  const error = useSelector((state) => state.login.error);
  const handleLogin = () => {
    dispatch(login(credentials));
    if (!error) {
      closeModal();
    }
  };
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Login</h2>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder="Username"
            className="modal-input"
            onChange={(e) =>
              setCredentials({ ...credentials, login: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="modal-input"
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button className="modal-submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
