import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layouts";
import {
  ContactUs,
  Home,
  Shop,
  SignIn,
  Signup,
  Testimonial,
  WhyUs,
} from "./Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="why-us" element={<WhyUs />} />
        <Route path="testimonials" element={<Testimonial />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="sign-in" element={<SignIn />} />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
