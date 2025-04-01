import React from "react";
import ProductCard from "../components/ProductCard"; // Importamos el componente de producto
import { useCart } from "../context/CartContext"; // Usamos el contexto del carrito

const Home = ({ products }) => {
  const { addToCart } = useCart(); // Accedemos a la función de agregar al carrito

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mt-10 text-gray-800">🛍️ Tienda Tech</h1>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
