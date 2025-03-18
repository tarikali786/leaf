import React from "react";
import { OrderCard } from "./order-card ";
const orderItems = [
  { name: "Product 1", price: 29.99 },
  { name: "Product 2", price: 49.99 },
];

const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
const tax = subtotal * 0.08;
const shipping = 4.99;
const total = subtotal + tax + shipping;

export const OrderDetails = () => {
  return (
    <div className="md:px-[10%] sm:px-[5%] px-4 py-4 mt-2">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {[1, 2, 3].map((item, index) => (
          <OrderCard key={index} id={index} />
        ))}
      </div>
      <hr className="text-gray-600 my-8" />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 w-full border space-y-4 border-gray-200 p-6 rounded-lg shadow-md">
          <h1 className="md:text-2xl text-xl font-semibold">Order Details</h1>
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              <b>Order ID:</b> 231FNE83DFOK23RF2C
            </p>
            <p>
              <b>Order Date:</b> March 15, 2025
            </p>
            <p>
              <b>Expected Delivery:</b> March 20, 2025
            </p>
            <p>
              <b>Payment Status:</b> Paid
            </p>
            <p>
              <b>Order Status:</b> Delivered
            </p>
          </div>
        </div>

        <div className="md:w-1/2 w-full border space-y-4 border-gray-200 p-6 rounded-lg shadow-md">
          <h1 className="md:text-2xl text-xl font-semibold">Order Payment</h1>
          <p className="text-sm text-gray-600">
            Complete your purchase by providing payment details
          </p>
          <div className="space-y-4">
            <h3 className="font-medium">Order Summary</h3>
            <div className="space-y-2 text-sm">
              {orderItems.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 w-full border space-y-4 border-gray-200 p-6 rounded-lg shadow-md">
          <h1 className="md:text-2xl text-xl font-semibold">Address Details</h1>
          <p className="text-sm text-gray-600">
            Shipping Address for the Order
          </p>
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              <b>Recipient:</b> Tarik Ali
            </p>
            <p>
              <b>Address:</b> 123 Main St, Sample City
            </p>
            <p>
              <b>State:</b> Arunachal Pradesh
            </p>
            <p>
              <b>Postal Code:</b> 343455
            </p>
            <p>
              <b>Country:</b> India
            </p>
            <p>
              <b>Phone:</b> +91 9876543210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
