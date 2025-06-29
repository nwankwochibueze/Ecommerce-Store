import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsThunk } from "../store/ProductSlice";
import type { RootState, AppDispatch } from "../store/store";

const ShopProductsSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div className="products-list">
      {loading && <p>Loading products...</p>}
      {error && <p>Error: {error}</p>}
      <div className="pt-10 pb-5 pl-15 pr-15 gap-4 flex flex-col">
        <h2 className="text-3xl font-semibold text-center">
          SUMMER COLLECTION
        </h2>
        <p className="align-center">
          Whether you're jetting off for a beach vacation or planning a weekend
          getaway, our limited-edition collection has got stylish travel bags
          for all your holiday plans. From travel tote bags, newly introduced
          travel vanity pouches to stunning travel sling bags, shop the
          collection and escape the mundane in style.
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  list-none p-0">
        {products.map((product) => (
          <li key={product._id} className="w-full p-1 bg-white ">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-94 object-cover  mx-auto"
            />
            <div className="font-bold text-lg mt-2 text-center">
              {product.title}
            </div>
            <div className="text-center">{product.description}</div>
            <div className="text-blue-600 font-bold text-center">
              ${product.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopProductsSection;
