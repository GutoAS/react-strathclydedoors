import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="container d-flex justify-content-evenly align-items-center"
      style={{ height: "100vh" }}
    >
      <div
        class="card"
        // onClick={() => {
        //   window.location.href = "/create-door";
        // }}
      >
        <div class="card-body">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              alt=""
              src={"/assets/open-door.png"}
              style={{ width: "140px" }}
            />
            <h5>Pre Made Door's</h5>
          </div>
        </div>
      </div>
      <div className="separate" />
      <div
        class="card"
        onClick={() => {
          window.location.href = "/custom-door";
        }}
      >
        <div class="card-body">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              alt=""
              src={"/assets/customize.png"}
              style={{ width: "120px" }}
            />
            <h5>Make your own</h5>
          </div>
        </div>
        <Link to="/custom-door">Custom door</Link>
      </div>
    </div>
  );
}
