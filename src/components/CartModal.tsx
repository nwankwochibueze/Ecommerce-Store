
import { FaLock, FaTrash, FaMinus, FaPlus, FaChevronDown } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";
import { urlFor } from '../imageBuilder'
import type { SanityImage } from '../store/type'

type Product = {
  title: string
  price: number
  image?: SanityImage
  imageUrl?: string
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
  const itemCount = product.quantity || 1
  const subtotal = (product.price * itemCount).toFixed(2)

  const imageSrc =
    product.image
      ? urlFor(product.image).width(200).height(200).url()
      : product.imageUrl || '/placeholder.svg'

  return (
    <div className="fixed top-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-lg font-regular text-gray-500">
          CART ({itemCount} item{itemCount !== 1 ? 's' : ''})
        </h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-600 transition-colors">
          <IoMdClose size={24} />
        </button>
      </div>

      {/* Product Item */}
      <div className="p-6 border-b">
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img src={imageSrc} alt={product.title} className="w-20 h-24 object-cover" />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-1">${product.price.toFixed(2)}</p>
                {product.selectedColor && (
                  <p className="text-sm text-gray-500 mb-2">Color: {product.selectedColor}</p>
                )}
                {product.selectedSize && (
                  <p className="text-sm text-gray-500 mb-2">Size: {product.selectedSize}</p>
                )}
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaTrash size={16} />
              </button>
            </div>

            {/* Show More */}
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-800 transition-colors mb-3">
              <span>Show More</span>
              <FaChevronDown size={12} className="ml-1" />
            </button>

            {/* Quantity & Subtotal */}
            <div className="flex items-center justify-between">
              <div className="flex items-center border border-gray-300">
                <button className="p-2 hover:bg-gray-50 transition-colors">
                  <FaMinus size={12} />
                </button>
                <span className="px-4 py-2 text-sm font-medium">{itemCount}</span>
                <button className="p-2 hover:bg-gray-50 transition-colors">
                  <FaPlus size={12} />
                </button>
              </div>

              <div className="text-lg font-medium text-gray-900">${subtotal}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtotal Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-medium text-gray-500">Subtotal</span>
          <span className="text-lg font-medium text-gray-500">${subtotal}</span>
        </div>
        <p className="text-sm text-gray-500">Taxes and shipping are calculated at checkout.</p>
      </div>

      {/* Action Buttons */}
      <div className="p-6 space-y-3">
        <button className="w-full bg-gray-800 text-white py-3 px-4  hover:bg-gray-900 transition-colors font-medium">
          Checkout
        </button>

        <button className="w-full border border-gray-300 text-gray-800 py-3 px-4  hover:bg-gray-50 transition-colors font-medium">
          View Cart
        </button>

        {/* Secure Checkout */}
        <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
          <FaLock className="mr-2" />
          <span>Secure Checkout</span>
        </div>
      </div>
    </div>
  )
}

export default CartModal
