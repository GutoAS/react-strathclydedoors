import React from "react";
import "./diff.css";
import { diff_1, diff_2 } from "../../Utils/landing-page-assets/image";

const Diff = () => {
  return (
    <div className="main-container">
      <div className="cont-left">
        <img src={diff_1} alt="Door" />
        <h3 className="left-h3">The difference between a cheap door and a good door?</h3>
        <p>
          Cheap door = filled with low grade FOAM Good door = filled with 16
          layers of engineered TIMBER
        </p>
      </div>
      <div className="cont-right">
        <img src={diff_2} alt="Door" />
        <h3 className="right-h3">Composite doors. Better than UPVC in every way.</h3>
        <p>
          More stylish & More secure. More energy efficient. More long lasting.
        </p>
      </div>
    </div>
  );
};

export default Diff;
