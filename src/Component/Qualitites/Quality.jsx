import React from "react";
import QualityIcon from "./icon/QualityIcon";
import "./quality.css";
import {
  expeirence,
  design_purpose,
  quality_material,
} from "../../Utils/landing-page-assets/image";

const Quality = () => {
  return (
    <div className="quality">
      <QualityIcon
        title="Design with Purpose"
        image={design_purpose}
        desc="For each project we establish
                relationships with partners
who we know will help us
create added value for your
project.
"
      />
      <QualityIcon
        title="High Quality Materials"
        image={quality_material}
        desc="We don’t install uPVC doors,
        because we don’t think they’re
        good enough for our customers.
        We only fit composite doors with
        security hinges and quality
        handles.....
"
      />
      <QualityIcon
        title="25 Years of Experience"
        image={expeirence}
        desc="Our quality composite doors
        offer unrivalled strength and
        security. Made from a
        combination of modern
        materials, they provide the
        ultimate in....
"
      />
    </div>
  );
};

export default Quality;
