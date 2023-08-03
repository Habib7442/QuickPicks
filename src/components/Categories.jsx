import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const CategoryItem = ({ name, image }) => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };

  const handleRoute = () => {
    navigate(`/products/${name.toLowerCase()}`);
  };

  return (
    <div
      className="md:p-2 p-1 w-1/2 relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-aos="fade-right"
    >
      <img
        alt={name}
        className="w-full h-80 object-cover block object-top rounded-lg"
        src={image}
      />
      {showText && (
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xl font-bold bg-black bg-opacity-50 rounded-lg"
          onClick={handleRoute}
        >
          {name}
        </div>
      )}
    </div>
  );
};

const Categories = () => {
  const [categories, setCategories] = useState([]);
  // console.warn(categories)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/categories`);
        console.warn(response.data)

        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Explore Our Collections
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover a world of unique products and handcrafted treasures. From
            timeless classics to modern must-haves, find the perfect addition to
            your collection.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          {categories.map((category) => (
            <CategoryItem
              key={uuidv4()}
              name={category.name}
              image={category?.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
