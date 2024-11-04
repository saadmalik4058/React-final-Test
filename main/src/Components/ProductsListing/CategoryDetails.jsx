import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function CategoryDetails() {
  const location = useLocation();
  const { CategoryName, data } = location.state || {};
  const filteredProducts = data.filter((item) => item.category == CategoryName);
  console.log(filteredProducts);

  return (
    <div>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        {" "}
        <Link to={-1}>Back</Link>{" "}
      </button>
      {filteredProducts.map((item) => (
        <div
          className="flex
      m-2  items-center "
        >
          <div
            className=" w-[200px] flex gap-5 
           p-2  "
          >
            <img className=" rounded" src={item.image} alt={"picture"} />
            <div className="mt-4">
              <h1 className="font-bold">{item.title}</h1>
              <p className="text-gray-500 whitespace-nowrap ">
                {" "}
                Category: {item.category}
              </p>
              <p className="text-green-600 font-bold mt-1">
                Price: ${item.price}
              </p>
              <p className="text-green-600 font-bold mt-1">
                Rating:{item.rating.rate}
              </p>
              <p className="text-green-600 font-bold mt-1">
                Count:{item.rating.count}
              </p>
              <div className="flex gap-4 mt-5"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryDetails;
