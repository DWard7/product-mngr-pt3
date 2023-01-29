import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/product/${id}`, { signal: controller.signal })
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
    return () => controller.abort;
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/product/${id}`, {
        title: product.title,
        price: product.price,
        description: product.description,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit Product:</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                value={product.title}
                onChange={handleChange}
              />
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                value={product.price}
                onChange={handleChange}
              />
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="form-control"
                value={product.description}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex-justify-content-start">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
