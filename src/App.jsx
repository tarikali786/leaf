import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layouts";
import { ToastContainer } from "react-toastify";

import {
  Address,
  Cart,
  ContactUs,
  EmailComponent,
  EnterOTP,
  ForgotPassword,
  Home,
  OrderDetails,
  ProductDetails,
  Profile,
  Review,
  Shop,
  SignIn,
  Signup,
  Testimonial,
  UpdateAddress,
  UserOrder,
  WhyUs,
  Wishlist,
} from "./Page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProductList,
  fetchCategorytList,
  fetchUserDetails,
} from "./feature/leafSlice";
import Loading from "./component/model/loading";

function App() {
  const dispatch = useDispatch();
  const { user, product, loading, category } = useSelector(
    (state) => state.leaf
  );
  const id = localStorage.getItem("leafUserid");

  const fetchData = () => {
    if (id && !user?.id) {
      dispatch(fetchUserDetails(id));
    }
    if (product.length == 0) {
      dispatch(fetchProductList());
    }
    if (category?.length == 0) {
      dispatch(fetchCategorytList());
      
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);
  if (loading) return <Loading />;

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
          <Route path="otp" element={<EnterOTP />} />
          <Route path="order" element={<UserOrder />} />
          <Route path="address/:documentId" element={<UpdateAddress />} />

          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="order-details/:id" element={<OrderDetails />} />
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
