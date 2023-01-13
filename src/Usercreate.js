import React from "react";

function Usercreate() {
  return (
    <div classNme="container">
      <div classNme="row">
        <div className="col-lg-6">
          <label>Name</label>
          <input type={"text"} className="form-control"></input>
        </div>
        <div classNme="col-lg-6">
          <label>E-mail</label>
          <input type={"text"} className="form-control"></input>
        </div>
        <div classNme="col-lg-4">
          <label>Country</label>
          <select className="form-control">
            <option>India</option>
            <option>America</option>
          </select>
        </div>
        <div classNme="col-lg-4">
          <label>State</label>
          <select className="form-control">
            <option>Tamilnadu</option>
            <option>Arizona</option>
          </select>
        </div>
        <div classNme="col-lg-4">
          <label>City</label>
          <select className="form-control">
            <option>Chennai</option>
            <option>Phoenix</option>
          </select>
        </div>
        <div classNme="col-lg-3 mt-3">
          <input
            type={"submit"}
            value="create"
            className="btn btn-primary"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Usercreate;
