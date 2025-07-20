import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaShoppingBag,
  FaLock,
} from "react-icons/fa";
import PromoAndNotes from "../components/PromoAndNotes";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  return (
    <div className="py-15 w-full lg:max-w-none px-4 lg:px-6">
      {cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* 🛒 Cart Items Section */}
          <div className="w-full lg:flex-[3] lg:pr-6 space-y-6">
            <div className="border-b border-gray-300 pb-3 mb-6">
              <h2 className="text-[1.5rem] font-semibold">My Cart</h2>
            </div>

            {/* Cart Items */}
            {cartItems.map((item: any, index: number) => (
              <div key={index} className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                  {/* 👕 Image + Info Block */}
                  <div className="flex flex-row gap-4 flex-1">
                    <div className="w-24 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-4xl flex-shrink-0">
                      <FaShoppingBag />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 mb-1">
                        Color: {item.selectedColor}
                      </p>
                      <p className="text-gray-600 mb-1">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-lg font-semibold">${item.price}</p>
                    </div>
                  </div>

                  {/* 🎛️ Controls Block */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-6">
                    <div className="flex items-center border border-gray-300 rounded">
                      <button className="p-2 hover:bg-gray-50">
                        <FaMinus className="w-3 h-3" />
                      </button>
                      <span className="px-3 py-1 border-x border-gray-300 text-md">
                        {item.quantity}
                      </span>
                      <button className="p-2 hover:bg-gray-50">
                        <FaPlus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-lg font-medium whitespace-nowrap">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* 🏷️ Promo and 📝 Note */}
            <PromoAndNotes />
          </div>

          {/* 📦 Order Summary Sidebar */}
          <div className="w-full lg:flex-[1] lg:max-w-[320px]">
            <div className="border-b border-gray-300 pb-3 mb-6">
              <h2 className="text-[1.5rem] font-semibold">Order Summary</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">$59.96</span>
                </div>
                <button className="text-gray-600 hover:text-gray-800 underline text-sm">
                  Estimate Delivery
                </button>
              </div>
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-2xl font-semibold">
                  <span>Total</span>
                  <span>$59.96</span>
                </div>
              </div>
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 ">
                Checkout
              </button>
              <div className="flex items-center justify-center mt-4 text-gray-600 text-sm">
                <FaLock className="w-4 h-4 mr-2" />
                Secure checkout
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-gray-500 py-24">
          <p className="mb-2">Your cart is empty.</p>
          <MdOutlineRemoveShoppingCart className="text-4xl" />
        </div>
      )}
    </div>
  );
};

export default Cart;
