import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

// Layout
import { HomeLayout } from "./layouts";

// Components
import Loading from "./component/model/loading";

// Pages
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

// Redux actions
import {
  fetchProductList,
  fetchCategorytList,
  fetchUserDetails,
} from "./feature/leafSlice";

// Animation wrapper component
const AnimatePage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, product, loading, category } = useSelector(
    (state) => state.leaf
  );
  const id = localStorage.getItem("leafUserid");

  const fetchData = () => {
    if (id && !user?.id) {
      dispatch(fetchUserDetails(id));
    }
    if (product.length === 0) {
      dispatch(fetchProductList());
    }
    if (category?.length === 0) {
      dispatch(fetchCategorytList());
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomeLayout />}>
            <Route
              index
              element={
                <AnimatePage>
                  <Home />
                </AnimatePage>
              }
            />
            <Route
              path="why-us"
              element={
                <AnimatePage>
                  <WhyUs />
                </AnimatePage>
              }
            />
            <Route
              path="testimonials"
              element={
                <AnimatePage>
                  <Testimonial />
                </AnimatePage>
              }
            />
            <Route
              path="product"
              element={
                <AnimatePage>
                  <Shop />
                </AnimatePage>
              }
            />
            <Route
              path="cart"
              element={
                <AnimatePage>
                  <Cart />
                </AnimatePage>
              }
            />
            <Route
              path="profile"
              element={
                <AnimatePage>
                  <Profile />
                </AnimatePage>
              }
            />
            <Route
              path="review"
              element={
                <AnimatePage>
                  <Review />
                </AnimatePage>
              }
            />
            <Route
              path="wishlist"
              element={
                <AnimatePage>
                  <Wishlist />
                </AnimatePage>
              }
            />
            <Route
              path="otp"
              element={
                <AnimatePage>
                  <EnterOTP />
                </AnimatePage>
              }
            />
            <Route
              path="order"
              element={
                <AnimatePage>
                  <UserOrder />
                </AnimatePage>
              }
            />
            <Route
              path="address/:documentId"
              element={
                <AnimatePage>
                  <UpdateAddress />
                </AnimatePage>
              }
            />
            <Route
              path="product/:id"
              element={
                <AnimatePage>
                  <ProductDetails />
                </AnimatePage>
              }
            />
            <Route
              path="order-details/:id"
              element={
                <AnimatePage>
                  <OrderDetails />
                </AnimatePage>
              }
            />
            <Route
              path="contact-us"
              element={
                <AnimatePage>
                  <ContactUs />
                </AnimatePage>
              }
            />
            <Route
              path="signup"
              element={
                <AnimatePage>
                  <Signup />
                </AnimatePage>
              }
            />
            <Route
              path="sign-in"
              element={
                <AnimatePage>
                  <SignIn />
                </AnimatePage>
              }
            />
            <Route
              path="address"
              element={
                <AnimatePage>
                  <Address />
                </AnimatePage>
              }
            />
            <Route
              path="email"
              element={
                <AnimatePage>
                  <EmailComponent />
                </AnimatePage>
              }
            />
            <Route
              path="forgot-password"
              element={
                <AnimatePage>
                  <ForgotPassword />
                </AnimatePage>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <AnimatePage>
                <div>404 - Page Not Found</div>
              </AnimatePage>
            }
          />
        </Routes>
      </AnimatePresence>

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
