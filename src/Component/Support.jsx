import React, { useState } from "react";
import "./support.css";
export default function Support() {
  const [query, setquery] = useState({
    phone: "",
    address: "",
    message: "",
  });
  return (
    <div
      className="container p-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="w-100">
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Any Query?
        </h3>

        <div className="mb-3 ">
          <label for="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={query.phone}
            onChange={(e) => {
              setquery({ ...query, phone: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={query.address}
            onChange={(e) => {
              setquery({ ...query, address: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">
            Message
          </label>
          <textarea
            type="text"
            className="form-control"
            id="message"
            cols="30"
            rows="10"
            value={query.message}
            onChange={(e) => {
              setquery({ ...query, message: e.target.value });
            }}
          />
        </div>
        <a
          type="submit"
          className="btn btn-primary"
          href={`mailto:hello@strathclydewindows.co.uk?subject=Feedback&body=${
            "Phone: " + query.phone
          }  ${"Address: " + query.address} ${"Message: " + query.message}`}
        >
          Submit
        </a>
      </form>
    </div>
  );
}
