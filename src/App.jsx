import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layouts";
import { Home, SignIn, Signup } from "./Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="signup" element={<Signup />} />
      <Route path="sign-in" element={<SignIn />} />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
