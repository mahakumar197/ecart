import React from "react";

function FormHandling() {
  return (
    <div className="row">
      FormHandling
      <div className="form-group d-flex flex-column col-6">
        <div className="mb-3">
          <input type="mail" placeholder="Enter your mail" />
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Enter your password" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </div>
    </div>
  );
}

export default FormHandling;
