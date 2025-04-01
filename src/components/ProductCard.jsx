import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-40 h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <span className="text-blue-600 font-bold mt-2">${product.price}</span>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-700"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
