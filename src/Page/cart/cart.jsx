import { useSelector } from "react-redux";
import { CartCard } from "./cart-card";

export const Cart = () => {
  const { cart } = useSelector((state) => state.leaf);
  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 mt-2   ">
      <h2 className="text-2xl font-semibold">Cart</h2>
      {cart.length == 0 ? (
        <div className="text-center text-xl min-h-[30vh] flex justify-center  items-center font-bold text-gray-500">
          Your Cart is Empty
        </div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2  gap-6 mt-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <CartCard key={index} id={index} />
          ))}
        </div>
      )}
    </div>
  );
};
