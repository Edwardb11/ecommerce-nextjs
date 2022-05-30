
   
import { useAppContext } from "./stateWrapper";

export default function ButtonCart({ item }) {
  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);
  }
  return (
    <button className="btn-cart" onClick={handleClick}>
      Add to the cart
    </button>
  );
}