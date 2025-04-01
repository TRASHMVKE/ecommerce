import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const ProductModal = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Animación del modal */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -50 }} 
        className="bg-white p-6 rounded-2xl shadow-xl w-96 relative"
      >
        {/* Botón de cerrar */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
          <X size={24} />
        </button>

        {/* Imagen */}
        <img src={product.imageUrl} alt={product.name} className="w-full h-52 object-cover rounded-xl shadow-md" />

        {/* Información del producto */}
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-xl font-semibold mt-2 text-green-600">${product.price.toFixed(2)}</p>

        {/* Botón de agregar al carrito */}
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-4 w-full rounded-lg transition duration-300"
          onClick={() => {
            addToCart(product);
            onClose();
          }}
        >
          🛒 Agregar al Carrito
        </button>
      </motion.div>
    </div>
  );
};

export default ProductModal;
