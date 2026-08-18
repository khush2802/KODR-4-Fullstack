import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // This array stores every product that the user adds to the cart.
  const [cartItems, setCartItems] = useState([]);

  // Cart toggle
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((currentCart) => {
      const alreadyAdded = currentCart.some((item) => item.id === product.id);
      return alreadyAdded ? currentCart : [...currentCart, product];
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );

        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f0d]">

      {/* Navbar */}
      <Navbar setIsCartOpen={setIsCartOpen} cartCount={cartItems.length} />

      {/* Main Content */}
      <main className="px-6 py-10">
        {isCartOpen ? (
          <Cart 
          setIsCartOpen={setIsCartOpen}
          cartItems={cartItems}
          />
        ) : loading ? (
          <p className="text-center text-gray-400">
            Loading products...
          </p>
        ) : (
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((post) => (
              <ProductCard
                key={post.id}
                product={post}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </main>

    </div>
  );
};

export default App;
