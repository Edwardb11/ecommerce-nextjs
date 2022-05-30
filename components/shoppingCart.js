import { useAppContext } from "./stateWrapper";
import { Product } from "./product";
import style  from "../styles/shoppingCart.module.css";
export default function ShoppingCart() {
  const cart = useAppContext();
  return (
    <div className={style.shoppingCart}>
      <button>Close</button>
      <div>Cart is empty</div>

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
    </div>
  );
}
