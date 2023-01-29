import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/product/${id}`, { signal: controller.signal })
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/product/${id}`)
      .then(res => {
        console.log(res.data);
        navigate('/')
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <h3>Product Details:</h3>
      {product && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Description: {product.description}</p>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-start">
        <p>
          <Link to={"/"} className="btn btn-outline-primary mr-3 mt-3">
            Home
          </Link>
        </p>
        <p>
          <Link to={`/${id}/edit`} className="btn btn-outline-primary mr-3 mt-3">
            Edit
          </Link>
        </p>
        <p>
          <button  className="btn btn-outline-danger mt-3" onClick={() => handleDelete(product._id)}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
