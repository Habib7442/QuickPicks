import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  console.warn(products);

  useEffect(() => {
    // Fetch products data from the backend API based on the category
    axios
      .get(`https://quickpicks-backend-habib.onrender.com/products/${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(searchQuery.toLowerCase());
  });

  const handleViewProduct = (product) => {
    const { img, name, category, price } = product;
    navigate(`/product/${name}`, {
      state: {
        img,
        name,
        category,
        price,
      },
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center bg-gray-100 py-8">
      {/* Left part with filters */}
      <div className="w-full md:w-1/4 p-4 rounded-lg md:mr-4 mb-4 md:mb-0">
        <h3 className="text-lg font-semibold mb-3">Sort by:</h3>
        <select
          className="w-full px-3 py-2 bg-white border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 rounded-md"
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="default">Default</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
        {/* Add more filter options if needed */}
      </div>

      {/* Right part with products list */}
      <div className="w-full md:w-3/4 p-4 gap-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Products</h2>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            <SearchIcon
              className="h-5 w-5 text-gray-400 ml-2"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full pl-10 pr-4 py-2 text-sm placeholder-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>
        <section className="text-gray-600 body-font gap-4">
          <div className="container px-2 md:px-5 mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={uuidv4()}
                  img={product.img}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  handleViewProduct={handleViewProduct}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
