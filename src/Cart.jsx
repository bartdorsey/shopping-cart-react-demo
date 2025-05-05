import { useContext } from "react";
import { cartContext } from "./CartProvider";
import CartItem from "./CartItem";

export default function Cart() {
    const { cartItems, deleteCartItem } = useContext(cartContext);
    return (
        <div className="cart">
            {cartItems.map((cartItem) => {
                return (
                    <CartItem
                        deleteCartItem={deleteCartItem}
                        key={cartItem.id}
                        id={cartItem.id}
                        name={cartItem.name}
                        price={cartItem.price}
                    />
                );
            })}
        </div>
    );
}
