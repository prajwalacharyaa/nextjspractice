"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order...");
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Product</h1>
      <p className="text-lg text-gray-600 mb-6">
        Ready to place your order? Click the button below!
      </p>
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        Place Order
      </button>
    </div>
  );
}
