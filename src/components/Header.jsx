import React from "react";
import { ShoppingCart } from "lucide-react"; // Icono de carrito
import { useCart } from "../context/CartContext"; // Usamos el contexto

const Header = () => {
  const { cartItems } = useCart(); // Accedemos a los items en el carrito

  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold cursor-pointer">Tienda Tech</h1>

        <button className="relative flex items-center">
          <ShoppingCart size={28} />
          {cartItems.length > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-2">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
