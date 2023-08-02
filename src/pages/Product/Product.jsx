import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../../cartSlice";

const Product = () => {
  const location = useLocation();
  const { img, name, category, price } = location.state;
  const [quantity, setQuantity] = useState(1);
  const totalPrice = price * quantity;
  const dispatch = useDispatch();


  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: Math.random().toString(36).substr(2, 9),
        img,
        name,
        category,
        price,
        quantity,
      })
    );
  };

  return (
    <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="w-full sm:w-9/12 px-4 mx-auto">
              <img
                className="mb-5 h-full w-full object-top rounded-lg shadow-md"
                src={img}
                alt={name}
              />
              <p className="text-sm text-gray-300">
                Roll over image to zoom in
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-md mb-6">
              <span className="text-xs text-gray-400 tracking-wider">
                {category}
              </span>
              <h2 className="mt-6 mb-4 text-5xl md:text-7xl lg:text-8xl font-heading font-medium">
                {name}
              </h2>
              <p className="flex items-center mb-6">
                <span className="mr-2 text-sm text-blue-500 font-medium">
                  ₹
                </span>
                <span className="text-3xl text-blue-500 font-medium">
                  {totalPrice.toFixed(2)}
                </span>
              </p>
            </div>
            <div className="mb-6">
              <h4 className="mb-3 font-heading font-medium">
                <span>Color:</span>
                <span className="text-gray-400">Silver</span>
              </h4>
              <div className="flex space-x-2">
                <button className="w-6 h-6 rounded-full bg-white border border-gray-300"></button>
                <button className="w-6 h-6 rounded-full bg-orange-800"></button>
                <button className="w-6 h-6 rounded-full bg-blue-900"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500"></button>
              </div>
            </div>
            <div className="mb-10">
              <h4 className="mb-3 font-heading font-medium">Qty:</h4>
              <input
                className="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="flex mb-6 items-center">
              <div className="inline-flex space-x-1">
                {[1, 2, 3, 4, 5].map((iconNumber) => (
                  <button
                    key={iconNumber}
                    className="w-6 h-6 rounded-full bg-gray-400"
                  ></button>
                ))}
              </div>
              <span className="text-md text-gray-400 ml-2">
                {totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-wrap -mx-2 mb-12">
              <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
                <button
                  className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                  onClick={handleAddToCart}
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
