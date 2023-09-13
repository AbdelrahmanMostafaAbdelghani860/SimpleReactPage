import React, { Component } from "react";
import style from "./Gallery.module.css";
import { Helmet } from "react-helmet";
export default class Gallery extends Component {
  render() {
    return (
      <>
        <div
          className="container position-relative d-flex justify-content-center align-items-top px-5"
          style={{
            height: "95vh",
            minWidth: "100%",

            top: "15vh",
          }}>
          <Helmet>
            <title>Contact US</title>
          </Helmet>
          <form className="col  px-5">
            <div className=" row mb-3 text-center px-5 ">
              <h1
                className="m-auto py-3 fw-bolder"
                style={{ color: "#2c3e50" }}>
                CONTACT US
              </h1>
              <div className={`${style.star} mb-4 pt-3 fw-bolder`}>
                <i className="fa-solid fa-star"></i>
              </div>
              <form>
                <div class="form-group py-3" style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group py-3" style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="User Name"
                  />
                </div>
                <div class="form-group py-3" style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    className="form-control "
                    id="formGroupExampleInput2"
                    placeholder="Age"
                  />
                </div>
                <div class="form-group py-3" style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Password"
                  />
                </div>
              </form>
            </div>
            <button type="button" className="btn btn-success px-3 mx-5">
              Submit
            </button>
          </form>
        </div>
        ,
      </>
    );
  }
}
