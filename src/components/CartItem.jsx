const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-12 h-12 object-cover rounded"
      />
      <div className="flex-1 ml-3">
        <h4 className="font-semibold">{item.name}</h4>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-2 text-lg"
        >
          ➖
        </button>
        <span className="px-3">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-2 text-lg"
        >
          ➕
        </button>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 ml-3"
      >
        ❌
      </button>
    </div>
  );
};

export default CartItem;
