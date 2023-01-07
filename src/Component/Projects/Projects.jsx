import React from "react";
import "./projects.css";
import {
  land_four,
  grid_img1,
  grid_img2,
  grid_img3,
  grid_img4,
  grid_img5,
} from "../../Utils/landing-page-assets/image";

const Projects = () => {
  return (
    <div className="projects">
      <p className="project-p">Projects</p>
      <div className="project-head">
        <h1>Our Latest Projects</h1>
        <div className="project-button">
          <button type="button">View More</button>
        </div>
      </div>

      <div class="grid">
  <div class="span-row-8"><img src={grid_img1} alt="" /></div>
  <div class="span-col-2 span-row-4"><img src={grid_img2} alt="" /></div>
  <div class="span-row-4"><img src={grid_img3} alt="" /></div>
  <div class="span-row-4"><img src={grid_img4} alt="" /></div>
  <div class="span-col-2 span-row-4"><img src={grid_img5} alt="" /></div>
</div>
    </div>
  );
};

export default Projects;
