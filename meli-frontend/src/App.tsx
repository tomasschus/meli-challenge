import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Item } from "./pages/Item";
import { Items } from "./pages/Items";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<Item />} />
          <Route index element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* Routes */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
