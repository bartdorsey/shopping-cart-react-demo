import { useEffect } from "react";
import { useState, createContext } from "react";

export const cartContext = createContext();

// This is an example of how we could use write a custom
// hook to abstract the fetching of data away
// Or you could use a library like Tanstack Query or useSWR.

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

// It's not necessary to create an entire component for our provider
// but it's good practice.
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
        // This setTimeout simulates a fetch that takes some
        // time to complete
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

    // This is the value we are putting into the context
    // It consists of the cartItems list, and a deleteCartItem function
    const value = {
        cartItems,
        deleteCartItem,
    };
    return (
        <main>
            <cartContext.Provider value={value}>
                {/* children is a special built in prop that 
                represents the components nested under this one. */}
                {children}
            </cartContext.Provider>
        </main>
    );
}
