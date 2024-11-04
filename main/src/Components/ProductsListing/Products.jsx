import React, { useEffect, useState } from "react";
import { UniqueCategory } from "./getUniqueCategory";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function products() {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const result = await res.json();
      setData(result);
      console.log(result);
    }
    products();
  }, []);

  const categories = UniqueCategory(data);
  console.log(categories);

  return (
    <div>
      <ul>
        <div className="flex gap-10 items-center font-bold text-2xl mb-3 justify-center ">
          <h1 className="font-bold text-2xl ">Categories</h1>
        </div>

        {categories.map((item, index) => (
          <li
            key={index}
            className="hover:bg-gray-100 p-2 rounded-md  flex justify-center"
          >
            <Link
              to={{
                pathname: `Category/${item}`,
              }}
              state={{ CategoryName: item, data: data }}
            >
              {item}
            </Link>
          </li>
        ))}

        {/* {data.map((item) => (
          <div className="flex gap-5 ">
            <div>
              <h1 className="font-bold">{item.category}</h1>
            </div>
            <li key={item.id}>{item.title} </li>
          </div>
        ))} */}
      </ul>
    </div>
  );
}

export default Products;
