// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loading from "../Loading/Loading";
import style from "./Home.module.css";
import img from "../../assets/avataaars-Main.png";
import { Helmet } from "react-helmet";

export default function Home() {
  // let [arr, setArr] = useState([]);
  // async function update() {
  //   let { data } = await axios.get(
  //     "https://forkify-api.herokuapp.com/api/search?q=pizza"
  //   );
  //   setArr(data.recipes);
  // }
  // useEffect(() => {
  //   update();
  // }, []);
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
          <title>Home</title>
        </Helmet>
        <div className="col text-center px-5">
          <div className="text-center">
            <img src={img}></img>
          </div>
          <div className=" row mb-3 text-white px-5 ">
            <h1 className=" py-2">START FRAMEWORK</h1>
            <div className={`${style.star} mb-4`}>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className=" mt-4 w-100 text-white px-5 fs-6">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
      ,
    </>
  );
}
