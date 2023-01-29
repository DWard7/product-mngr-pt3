import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../components/Form";
import ProductList from "../components/ProductList";

function Main() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:5001/product", { signal: controller.signal })
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [loaded]);

  const reversedProducts = [...products].reverse();

  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2>Product Manager</h2>
      </div>
      <div>
        <Form setLoaded={setLoaded} />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <h2>All Products:</h2>
      </div>
      <div>{loaded && <ProductList products={reversedProducts} setLoaded={setLoaded} />}</div>
    </div>
  );
}

export default Main;
