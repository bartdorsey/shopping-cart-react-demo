import { useContext } from "react";
import { cartContext } from "./CartProvider";

export default function CartIcon() {
    const { cartItems } = useContext(cartContext);
    const numberOfItems = cartItems.length;
    return <div>Cart: {numberOfItems}</div>;
}
