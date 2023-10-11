import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Login() {
  const customStyles = {
    background: "rgba(255, 255, 255, 0.2)",
    border: "none",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div className="container">
      <div class="row">
        <div className="col-6 card " style={customStyles}>
          <div className="fs-1 fw-bold mb-4">Login</div>
          <div className="row mb-3">
            <div className="col-12">
              <input
                type="text"
                class="form-control w-20 "
                name=""
                id=""
                placeholder="Enter your mail"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <input
                type="text"
                class="form-control w-20 "
                name=""
                id=""
                placeholder="Enter your password"
              />
            </div>
          </div>
          {/* <a href="#" className="m-auto">
          forgot password?
        </a> */}
          <div class="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check mb-0">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3"
              />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">
              Forgot password?
            </a>
          </div>
          <div>
            <button className="btn btn-primary align-center mt-4">
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
