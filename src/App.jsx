import "./App.css";
import Cart from "./Cart";
import Header from "./Header";
import CartProvider from "./CartProvider";

function App() {
    return (
        <main>
            <CartProvider>
                <Header />
                <Cart />
            </CartProvider>
        </main>
    );
}

export default App;
