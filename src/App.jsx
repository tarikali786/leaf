import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layouts";
import { ToastContainer } from "react-toastify";

import {
  Address,
  Cart,
  ContactUs,
  EmailComponent,
  ForgotPassword,
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserDetails } from "./feature/leafSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.leaf.user);
  const id = localStorage.getItem("leafUserid");
console.log(user);

  // useEffect(() => {
  //   if (id) {
  //     dispatch(fetchUserDetails(id));
  //   }
  // }, [dispatch]);
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
          <Route path="email" element={<EmailComponent />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
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
