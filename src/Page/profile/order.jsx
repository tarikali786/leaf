import { useSelector } from "react-redux";
import { OrderDetailsCard } from "./order-details-card ";

export const Order = () => {
  const { order } = useSelector((state) => state.leaf);

  return (
    <div className="bg-[#f5f5f5]  px-8 w-full">
      {order?.length == 0 ? (
        <div className="text-center text-xl min-h-[30vh] flex justify-center  items-center font-bold text-gray-500">
          Your Order is Empty
        </div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2  gap-6 ">
          {order?.map((item, index) => (
            <OrderDetailsCard key={index} id={index} />
          ))}
        </div>
      )}
    </div>
  );
};
