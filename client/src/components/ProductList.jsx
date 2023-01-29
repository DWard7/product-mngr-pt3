import { Link } from "react-router-dom";
import axios from "axios";

function ProductList({ products, setLoaded }) {
  
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/product/${id}`)
      .then(res => {
        console.log(res.data);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    products &&
    products.map((product) => {
      return (
        <div key={product._id} className="d-flex justify-content-center">
          <ul>
            <h4>
              <Link to={`/${product._id}`} className="btn btn-outline-primary">
                {product.title}
              </Link>
              <button
                className="btn btn-outline-danger ml-3"
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </h4>
          </ul>
        </div>
      );
    })
  );
}

export default ProductList;
