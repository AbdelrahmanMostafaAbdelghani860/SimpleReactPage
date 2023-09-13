import React, { Component } from "react";
import style from "./Footer.module.css";
export default class Footer extends Component {
  render() {
    return (
      <>
        <div
          className="footer"
          style={{
            backgroundColor: " #2c3e50 ",

            padding: " 15px",
          }}>
          <div className="card-group mb-1 footer-color py-2">
            <div className={`${style.card_u} card text-center p-3`}>
              <h3 className="py-4">LOCATION</h3>
              <p>
                2215 John Daniel Drive Clark <br /> MO 65243
              </p>
            </div>
            <div className={`${style.card_u} card p-3`}>
              <h3 className="py-4 text-center">AROUND THE WEB</h3>
              <div className="d-flex  list-unstyled align-items-center  justify-content-center">
                <li
                  className={`fab fa-twitter text-white px-2  fs-6 ${style.custom_li}`}></li>
                <li
                  className={`fab fa-facebook text-white px-2 icon fs-6 ${style.custom_li}`}></li>
                <li
                  className={`fa-brands fa-linkedin-in mx-1 icon px-2  fs-6 ${style.custom_li}`}></li>
                <li
                  className={`fa-solid fa-globe mx-1 icon px-2 fs-6 ${style.custom_li}`}></li>
              </div>
            </div>
            <div className={`${style.card_u} card p-3`}>
              <h3 className="py-4 text-center">ABOUT FREELANCER</h3>
              <p className="text-white text-center font-weight-light ">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "#1a252f", width: "100%", height: "100%" }}>
          <p className="text-white text-center  py-3">
            Copyright © My Website 2021
          </p>
          ,
        </div>
      </>
    );
  }
}
