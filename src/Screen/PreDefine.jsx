import React, { useState } from "react";

export default function PreDefine() {

  return (
      <div
        className="d-flex justify-content-evenly align-items-center"
        style={{ height: "100vh" }}
      >
        <div class="card" onClick={() => { window.location.href = "/create-door" }}>
          <div class="card-body">
            <div>
              <i class="fa-solid fa-door-open fa-5x"></i>
              <h5>Single Door</h5>
            </div>
          </div>
        </div>
        <div className="separate" />
        <div class="card">
          <div class="card-body">
            <div>
              <i class="fa-solid fa-door-open fa-5x"></i>
              <h5>Double Door</h5>
              <p>Coming Soon1</p>
            </div>
          </div>
        </div>
      </div>
  );
}
