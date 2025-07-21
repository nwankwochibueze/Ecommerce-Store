import { FaLock } from "react-icons/fa";

type Product = {
  title: string
  price: number
  image?: {
    asset: {
      url?: string
    }
  }
  slug?: string
  quantity?: number
  selectedSize?: string
  selectedColor?: string
}



type CartModalProps = {
  product: Product
  onClose: () => void
}

const CartModal = ({ product, onClose }: CartModalProps) => {
  return (
    <div className="fixed top-0 right-0 w-full max-w-sm bg-white shadow-lg z-50 p-6 border">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-lg font-bold mb-4">Added to Cart</h2>

      <div className="flex gap-4 items-center">
        <img
          src={product.image?.asset?.url || ""}
          alt={product.title}
          className="w-20 h-20 object-cover"
        />
        <div>
          <p className="font-semibold">{product.title}</p>
          <p className="text-sm text-gray-600">Size: {product.selectedSize}</p>
          <p className="text-sm text-gray-600">
            Color: {product.selectedColor}
          </p>
          <p className="text-sm text-gray-600">Qty: {product.quantity}</p>
          <p className="text-sm font-bold mt-2">${product.price}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-y-3">
        <button className="w-full bg-gray-800 text-white py-2 hover:bg-gray-700">
          View Cart
        </button>
        <button className="w-full bg-black text-white py-2 hover:bg-gray-900">
          Checkout
        </button>

        {/* Secure Checkout Message */}
        <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
          <FaLock className="mr-2" />
          Secure Checkout
        </div>
      </div>
    </div>
  );
};

export default CartModal;
