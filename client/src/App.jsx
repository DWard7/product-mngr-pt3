import Main from "./pages/Main";
import { Navigate, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "./pages/ProductDetail";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/:id/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
