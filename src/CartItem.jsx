export default function CartItem({ id, name, price, deleteCartItem }) {
    return (
        <div className="cart-item">
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => deleteCartItem(id)}>Delete</button>
        </div>
    );
}
