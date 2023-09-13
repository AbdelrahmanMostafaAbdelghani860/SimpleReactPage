import React, { useState } from "react";
import { Helmet } from "react-helmet";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import style from "./Portfolio.module.css";

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="container position-relative justify-content-center align-items-top px-5"
        style={{
          minHeight: "100vh", // Change to minHeight to allow expansion
          minWidth: "100%",
          top: "12vh", // Adjust as needed
          paddingBottom: "2rem", // Added bottom padding
        }}>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>

        <div className="row mb-3 text-center px-5 ">
          <h1 className="m-auto py-3 fw-bolder" style={{ color: "#2c3e50" }}>
            PORTFOLIO
          </h1>
          <div className={`${style.star} mb-4 pt-3 fw-bolder text-center`}>
            <i className="fas fa-star"></i>
          </div>
        </div>

        <div className="container pb-5 text-center ">
          <div className="row text-center py-2 mx-auto">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img className="img-fluid" src={img1} alt="Portfolio" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img className="img-fluid" src={img2} alt="Portfolio" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img className="img-fluid" src={img3} alt="Portfolio" />
            </div>
          </div>
          <div className="row text-center py-2 mx-auto">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img className="img-fluid" src={img1} alt="Portfolio" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img className="img-fluid" src={img2} alt="Portfolio" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img className="img-fluid" src={img3} alt="Portfolio" />
            </div>
          </div>
        </div>
        {/* <!-- Modal --> */}
      </div>
    </>
  );
}
