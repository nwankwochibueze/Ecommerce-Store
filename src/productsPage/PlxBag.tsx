import { useState } from "react";
import { useDispatch } from "react-redux";
import { BsBagCheck } from "react-icons/bs";
import Plx1 from "../assets/PLX-01.webp";
import Plx2 from "../assets/PLX-02.webp";
import Plx3 from "../assets/PLX-03.webp";
import { addToCart } from "../store/CartSlice";

const product = {
  _id: "plx-bag-1",
  title: "PLX Bag",
  code: "PLX-003", // Add this line for the code
  description: "Premium leather PLX Bag, perfect for travel and everyday use.",
  price: 120,
  imageUrl: Plx1,
  images: [Plx1, Plx2, Plx3],
  info: "Material: Genuine Leather. Size: 30x20x10cm. Color: Brown.",
  sizes: ["S", "M", "L", "XL"], // Example sizes
};

const PlxBag = () => {
  const dispatch = useDispatch();
  const [mainImg, setMainImg] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, selectedSize, quantity }));
  };

  const handleBuyNow = () => {
    // Implement buy now logic here
    alert("Proceeding to checkout...");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Images and Description */}
      <div>
        <img
          src={mainImg}
          alt={product.title}
          className="w-full h-80 object-cover rounded-lg mb-4"
        />
        <div className="flex gap-2 mb-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.title} ${idx + 1}`}
              className={`w-20 h-20 object-cover rounded border cursor-pointer ${
                mainImg === img ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setMainImg(img)}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="mb-4">{product.description}</p>
        <div className="mb-4 text-gray-600">{product.info}</div>
      </div>

      {/* Right: Add to Cart and Options */}
      <div className="flex flex-col justify-center items-start bg-gray-50 p-6 rounded shadow">
        {/* Product Name and Code */}
        <div className="mb-2">
          <span className="block text-lg font-bold">{product.title}</span>
          <span className="block text-sm text-gray-500">
            Code: {product.code}
          </span>
        </div>

        <span className="text-2xl font-semibold mb-4">${product.price}</span>

        {/* Size Selector */}
        <label className="mb-2 font-semibold" htmlFor="size-select">
          Size*
        </label>
        <select
          id="size-select"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="mb-4 border px-3 py-2 w-48" // increased width
        >
          <option value="" disabled>
            Select
          </option>
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        {/* Quantity Selector */}
        <label className="mb-2 font-semibold">Quantity</label>
        <div className="flex items-center mb-4">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 bg-gray-200 rounded-l text-lg"
            type="button"
          >
            -
          </button>
          <span className="px-4 py-1 border-t border-b">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 bg-gray-200 rounded-r text-lg"
            type="button"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 mb-2 w-full justify-center"
        >
          <BsBagCheck />
          Add to Cart
        </button>

        {/* Buy Now Button */}
        <button
          onClick={handleBuyNow}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 w-full justify-center"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PlxBag;
