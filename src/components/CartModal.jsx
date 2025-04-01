import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CartModal = ({ onClose }) => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">🛒 Tu Carrito</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}

            <p className="text-right font-bold text-lg mt-4">
              Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>

            <button className="bg-green-500 text-white px-4 py-2 mt-4 w-full">
              Finalizar Compra
            </button>
          </div>
        )}

        <button
          className="mt-4 text-red-500 underline w-full"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CartModal;
