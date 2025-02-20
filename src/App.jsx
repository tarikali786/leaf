import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layouts";
import { Home } from "./Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
