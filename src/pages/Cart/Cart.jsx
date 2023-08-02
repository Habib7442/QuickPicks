import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { removeFromCart } from "../../cartSlice";
import CloseIcon from "@mui/icons-material/Close";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState({});
  const shipping = 30;

  // Calculate the subtotal of cart items, considering the quantity of each item
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (quantity[item.id] || 1),
    0
  );
  const dispatch = useDispatch();
  // Calculate the total price including shipping
  const total = subtotal + shipping;

  const handleQuantityChange = (itemId, newQuantity) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [itemId]: newQuantity,
    }));
  };

  const handleRemoveItem = (itemId) => {
    // Dispatch the action to remove the item from the cart
    dispatch(removeFromCart(itemId));
  };

  return (
    <>
      <div className="bg-white p-6 rounded shadow-md w-96 mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-2">Cart</h2>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={uuid()} className="flex items-center gap-4">
              <div
                className="w-16 h-16 bg-gray-200 rounded-lg"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">Price: {item.price}</p>
                <input
                  type="number"
                  min="1"
                  value={quantity[item.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                />
                <button className=" ml-10" onClick={() => handleRemoveItem(item.id)}>
                  <CloseIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 mt-4 pt-4">
          <div className="flex justify-between mb-2">
            <p className="text-lg font-semibold">Subtotal</p>
            <p className="text-lg font-semibold">₹{subtotal}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-lg font-semibold">Shipping</p>
            <p className="text-lg font-semibold">₹{shipping}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-2xl font-bold">Total</p>
            <p className="text-2xl font-bold">₹{total}</p>
          </div>
        </div>

        <button className="mt-6 w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded">
          Checkout
        </button>
      </div>
    </>
  );
}

export default Cart;
