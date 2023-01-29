import React from "react";
import { useState } from "react";
import axios from "axios";

function Form({ setLoaded }) {
  // const [message, setMessage] = useState("Loading");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setPrice("");
    setDescription("");
    const newProduct = {
      title,
      price,
      description,
    };

    axios.post("http://localhost:5001/product", newProduct).then((res) => {
      console.log(res.data);
    });
    setLoaded(false).catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   axios.get("http://localhost:5001/").then((res) => {
  //     setMessage(res.data.message);
  //   });
  // });

  return (
    <div className="d-flex justify-content-center">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="titel"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button type="submit" className="btn btn-outline-primary mt-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
