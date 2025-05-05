import { useEffect } from "react";
import { useState, createContext } from "react";

export const cartContext = createContext();

// function useFetch(url, options) {
//     const [data, setData] = useState(undefined);
//     const [error, setError] = useState(undefined);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await fetch(url, options);
//                 if (!response.ok) {
//                     throw new Error(`${response.status}`);
//                 }
//                 const data = await response.json();
//                 setData(data);
//                 setIsLoading(false);
//             } catch (e) {
//                 setError(e);
//                 setIsLoading(false);
//             }
//         }
//         fetchData();
//     });

//     return {
//         data,
//         error,
//         isLoading,
//     };
// }

export default function CartProvider({ children }) {
    console.log("CartProvider was called");
    const [cartItems, setCartItems] = useState([]);
    // const { data, error, isLoading } = useFetch(
    //     "https://localhost:8000/api/cartitems"
    // );

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>{error}</div>;
    // }

    useEffect(() => {
        console.log("Use Effect is running");
        setTimeout(() => {
            const cartItemsFromAPI = [
                {
                    id: 1,
                    name: "Eggs",
                    price: 5.0,
                },
                {
                    id: 2,
                    name: "Bread",
                    price: 2.68,
                },
            ];
            setCartItems(cartItemsFromAPI);
        }, 2000);
        // TODO: Add fetch code to grab all cart items
        // GET /api/cartitems
        // async function fetchCartItems() {
        //     const response = await fetch(
        //         "https://localhost:8000/api/cartitems"
        //     );
        //     const data = await response.json();
        //     setCartItems(data);
        // }
        // fetchCartItems();
    }, []);

    async function deleteCartItem(id) {
        // TODO: Add fetch({method: "DELETE"})
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(newCartItems);
    }

    const value = {
        cartItems,
        deleteCartItem,
    };
    return (
        <main>
            <cartContext.Provider value={value}>
                {children}
            </cartContext.Provider>
        </main>
    );
}
