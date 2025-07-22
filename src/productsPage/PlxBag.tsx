import { useState } from "react";
import { useDispatch } from "react-redux";
import Plx2 from "../assets/PLX-02.webp";
import { addToCart } from "../store/CartSlice";
import Accordion from "../components/Accordion";
import CartModal from "../components/CartModal";
import type { CartProduct } from "../store/type";

const product = {
  _id: "plx-bag-1",
  title: "PLX Bag",
  code: "PLX-003",
  description:
    "A timeless piece crafted for elegance and durability, the Braided Leather Handbag from LeParle` blends artisanal texture with modern design. Perfect for both casual outings and upscale events",
  price: 120,
  imageUrl: Plx2,
  images: [Plx2],
  info: "Material: Polyester. Size: 30x20x10cm. Color: Brown.",
  sizes: ["S", "M", "L", "XL"],
};

const AlxBag = () => {
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState<CartProduct | null>(null);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    const payload = {
      ...product,
      selectedSize,
      quantity,
      selectedColor,
    };

    dispatch(addToCart(payload));
    setModalProduct(payload);
    setShowModal(true);
  };

  const handleBuyNow = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-14 relative">
      {/* Left Side: Product Image & Details */}
      <div>
        <div className="flex flex-col gap-2 mb-12">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full max-w-[280px] h-auto object-cover mx-auto"
            loading="lazy"
          />
        </div>
        <p className="mb-4">{product.description}</p>
        <div className="mb-4 text-gray-600">{product.info}</div>
      </div>

      {/* Right Side: Purchase Options */}
      <div className="flex flex-col items-start">
        <div className="mb-2">
          <span className="text-lg font-regular">{product.title}</span>
          {/* <span className="text-sm text-gray-500">Code: {product.code}</span> */}
        </div>

        <span className="mb-4 font-regular">${product.price}</span>

        {/* Color Picker */}
        <label className="mb-2 font-regular block">
          {selectedColor === "Brown" ? "Color: Brown*" : "Color*"}
        </label>
        <div className="flex gap-6 mb-4">
          <label className="flex items-center cursor-pointer">
            <span className="relative w-7 h-7 flex items-center justify-center">
              <input
                type="checkbox"
                checked={selectedColor === "Brown"}
                onChange={() =>
                  setSelectedColor(selectedColor === "Brown" ? "" : "Brown")
                }
                className="appearance-none w-7 h-7 border-2 border-gray-400 rounded-full transition-colors duration-200"
              />
              {selectedColor === "Brown" && (
                <span className="absolute left-1/2 top-1/2 w-4 h-4 bg-[#8B5C2A] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></span>
              )}
            </span>
          </label>
        </div>

        {/* Size Selector */}
        <label htmlFor="size-select" className="mb-2 font-regular">
          Size*
        </label>
        <select
          id="size-select"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="mb-4 border py-2 w-full max-w-[360px]"
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
        <label className="mb-2 font-regular">Quantity*</label>
        <div className="flex items-center mb-4 border">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 text-lg"
          >
            -
          </button>
          <span className="px-4 py-1">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 text-lg"
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <button
          onClick={handleAddToCart}
          className="border text-gray-600 px-6 py-3 mb-2 w-full max-w-[360px] hover:underline"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="bg-gray-600 text-white px-6 py-3 w-full max-w-[360px] hover:underline"
        >
          Buy Now
        </button>

        {/* Accordions */}
        <Accordion title="PRODUCT INFO" showBorder={true}>
          Overview: Designed for modern explorers, the UrbanNomad Crossbody Bag
          blends fashion with functionality. Whether you're navigating city
          streets or airport terminals, this bag keeps your essentials secure
          and your style elevated.
        </Accordion>
        <Accordion title="RETURN AND REFUND POLICY" showBorder={false}>
          We want you to be completely satisfied with your purchase. If for any
          reason you're not happy with your PLX Bag, you may request a refund
          within 14 days of delivery.
        </Accordion>
      </div>

      {/* Cart Modal (conditionally rendered) */}
      {showModal && modalProduct && (
        <CartModal product={modalProduct} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default AlxBag;
