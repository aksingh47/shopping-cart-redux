import React, { useState } from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    let value = parseInt(e.target.value)
    setInput(value);
    adjustQty(item.id, value);
    console.log(typeof(value));
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" onChange={onChangeHandler} value={input} />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default connect(null, { removeFromCart,adjustQty })(CartItem);
