import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <Helmet>
          <title>Not Found</title>
        </Helmet>
        <div class="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">
            <span className="text-danger fw-bolder">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <button
            className="p-2 "
            style={{
              backgroundColor: "#20c997",
              borderRadius: "6px",
              borderColor: "white",
            }}>
            <NavLink
              to=""
              className="text-white fw-bolder w-100 h-100"
              style={{ textDecorationLine: "none" }}>
              Go Home
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
