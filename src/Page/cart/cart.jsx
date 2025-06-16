import { useSelector } from "react-redux";
import { CartCard } from "./cart-card";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart } = useSelector((state) => state.leaf);

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.OrigialPrice * (item.quantity || 1),
    0
  );

  console.log(cart);

  return (
    <div className="md:px-[10%] sm:px-[5%] px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-xl min-h-[30vh] flex justify-center items-center font-bold text-gray-500">
          Your Cart is Empty
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartCard key={item.id || index} item={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Items:</span>
              <span>{cart.length}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-center">
              <Link
                to="/order"
                className="w-full text-center bg-green-600 hover:bg-green-700 text-white p-2  m-auto rounded-lg transition cursor-pointer"
              >
                Proceed to Checkout
              </Link>
            </div>

            <Link
              to="/shop"
              className="block text-center mt-4 text-blue-600 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
