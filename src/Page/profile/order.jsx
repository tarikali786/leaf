import { CartCard } from "./cart-card";
import { OrderCard } from "./order-card ";

export const Order = () => {
  return (
    <div className="bg-[#f5f5f5]  px-8 w-full">
      <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-6 ">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <OrderCard key={index} id={index} />
        ))}
      </div>
    </div>
  );
};
