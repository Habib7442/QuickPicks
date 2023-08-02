import { Client, Databases } from "appwrite";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_DATABASE_END_POINT)
  .setProject(import.meta.env.VITE_DATABASE_PROJECT_ID);

const TrendingProduct = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const databases = new Databases(client);

    let promise = databases.listDocuments(
      import.meta.env.VITE_DATABASE_ID,
      "64c878822bd13b727516"
    );
    promise.then(
      function (response) {
        console.log(response);
        let fetchedProducts = response.documents;

        setTrending(fetchedProducts);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
  return (
    <>
      <h1 className="text-4xl font-extrabold ml-4 mt-4 text-gray-900 mb-4">
        Trending Products
      </h1>
      <div
        className="flex flex-wrap justify-center items-center"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {trending.map((product) => (
          <div
            key={uuid()}
            className="relative m-5 max-w-xs overflow-hidden rounded-lg bg-black shadow-md"
            style={{ width: "15rem" }}
          >
            <a href="#">
              <img
                className="h-80 w-full rounded-t-lg object-top"
                src={product.img}
                alt="product image"
              />
            </a>
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
              Sale
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrendingProduct;
