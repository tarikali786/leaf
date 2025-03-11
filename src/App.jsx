import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layouts";
import { ToastContainer } from "react-toastify";

import {
  Address,
  Cart,
  ContactUs,
  Home,
  ProductDetails,
  Profile,
  Review,
  Shop,
  SignIn,
  Signup,
  Testimonial,
  WhyUs,
  Wishlist,
} from "./Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="testimonials" element={<Testimonial />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="review" element={<Review />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="signup" element={<Signup />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="address" element={<Address />} />
        </Route>

        <Route path="*" element={<div>404</div>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;
