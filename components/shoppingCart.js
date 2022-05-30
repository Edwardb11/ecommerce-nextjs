import { useAppContext } from "./stateWrapper";
import { Product } from "./product";
import style from "../styles/shoppingCart.module.css";
export default function ShoppingCart() {
  const cart = useAppContext();
  function handleCloseCart() {
    cart.closeCart();
  }
  return (
    <div
      className={style.shoppingCart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button className={style.close} onClick={handleCloseCart}>
        Close
      </button>

      {cart.items.length === 0 ? (
        <div className={style.empty}>Cart is empty</div>
      ) : (
        <>
          {" "}
          <h3>Your items</h3>
          <div>
            {cart.items.map((item) => (
              <Product
                key={item.id}
                item={item}
                showAs={"ListItem"}
                qty={item.qty}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
