import React, { createRef, useState } from "react";
import ExternalFrame from "../Component/ExternalFrame";
import Support from "../Component/Support";
import { DoorColor } from "../Utils/DoorColor";
import { Pattern } from "../Utils/Pattern";

import "react-image-crop/dist/ReactCrop.css";

import CreateDoor from "./CreateDoor";
import "./Style.css";
import { useScreenshot } from "use-react-screenshot";
export default function CustomDoor() {
  const [doorColor, setdoorColor] = useState("#460003");
  const [externalFrameColor, setexternalFrameColor] = useState("#460003");
  const [pattern, setpattern] = useState(Pattern[0]);
  const [glazing, setglazing] = useState(null);
  const ref = createRef(null);
  const [IMG, takeScreenshot] = useScreenshot();
  console.log("IMG", IMG);

  const getImage = () => {
    takeScreenshot(ref.current);
  };

  return IMG ? (
    <CreateDoor image={IMG} />
  ) : (
    <React.Fragment>
      <div
        className="box-mobile"
        style={{
          display: "flex",

          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div ref={ref}>
          <svg
            viewBox="0 0 1006 2101"
            width="284"
            height="593"
            xmlns="http://www.w3.org/2000/svg"
            id="screenshot"
          >
            <ExternalFrame externalFrameColor={externalFrameColor} />
            <foreignObject
              x="77"
              y="76"
              style={{ width: "85%", height: "92.8%" }}
            >
              <div
                style={{
                  flex: 0.3,
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              >
                <img
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                  src={pattern?.color[doorColor]}
                />
                {glazing && pattern.glazing[glazing] && (
                  <img
                    alt=""
                    style={{
                      zIndex: 99,
                      position: "absolute",
                      top: pattern.top,
                      left: pattern.left,
                      width: pattern.width,
                      height: pattern.height,
                    }}
                    src={pattern.glazing[glazing]}
                  />
                )}
              </div>
            </foreignObject>
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            flex: 0.7,
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="box">
            <p>Door Pattern</p>
            <div className="d-flex text-center flex-wrap justify-content-center">
              {Pattern.map((item, index) => (
                <div
                  className={`card m-2 ${pattern === item.name && "shadow"}`}
                  key={index}
                  onClick={() => {
                    setpattern(item);
                  }}
                >
                  <div className="card-body">
                    <img
                      alt=""
                      src={item.img}
                      style={{
                        width: "90px",
                        height: "140px",
                        objectFit: "contain",
                      }}
                    />
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="box">
            <p>Door Color</p>
            <div className="d-flex text-center flex-wrap justify-content-center">
              {Object.keys(pattern?.color).map((item, index) => (
                <div
                  className={`card m-2 ${doorColor === item && "shadow"}`}
                  key={index}
                  onClick={() => {
                    setdoorColor(item);
                  }}
                >
                  <div className="card-body">
                    <div
                      style={{
                        width: "90px",
                        height: "90px",
                        background: item,
                      }}
                    />
                    {DoorColor.map(
                      (color) => color.color === item && <p>{color.name}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="box">
            <p>External Door Frame</p>
            <div className="d-flex text-center flex-wrap justify-content-center">
              {DoorColor.map((item, index) => (
                <div
                  className={`card m-2 ${
                    externalFrameColor === item.color && "shadow"
                  }`}
                  key={index}
                  onClick={() => {
                    setexternalFrameColor(item.color);
                  }}
                >
                  <div className="card-body">
                    <div
                      style={{
                        width: "90px",
                        height: "90px",
                        background: item.color,
                      }}
                    />
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {pattern?.glazing && (
            <div className="box">
              <p>Glazing</p>
              <div className="d-flex text-center flex-wrap justify-content-center">
                {Object.keys(pattern?.glazing).map((item, index) => (
                  <div
                    className={`card m-2 ${glazing === item && "shadow"}`}
                    key={index}
                    onClick={() => {
                      setglazing(item);
                    }}
                  >
                    <div className="card-body">
                      <img
                        alt=""
                        src={pattern.glazing[item]}
                        style={{
                          width: "90px",
                          height: "140px",
                          objectFit: "contain",
                        }}
                      />
                      <p>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        <button
          className="btn btn-primary"
          onClick={getImage}
          style={{
            padding: "20px 70px",
            fontSize: "22px",
          }}
        >
          Upload House Pic
        </button>
      </div>
      <Support />
    </React.Fragment>
  );
}
