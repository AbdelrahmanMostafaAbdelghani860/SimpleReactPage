import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./About.module.css";
import { Helmet } from "react-helmet";
export default class About extends Component {
  render() {
    return (
      <>
        <div
          className="container position-relative d-flex justify-content-center align-items-center px-5"
          style={{
            height: "95vh",
            minWidth: "100%",
            backgroundColor: "#1abc9c",
            top: "5vh",
          }}>
          <Helmet>
            <title>About Us</title>
          </Helmet>
          <div className="col text-center px-5">
            <div className=" row mb-3 text-white px-5 ">
              <h1 className="m-auto py-3">ABOUT COMPONENT</h1>
              <div className={`${style.star} mb-4`}>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className=" mt-4 w-50 text-white px-5 fs-6">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className=" mt-4 w-50 text-white px-5 fs-6">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
        ,
      </>
    );
  }
}
