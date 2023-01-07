import React, { useEffect, useState } from "react";
import ReactCrop, { convertToPercentCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Support from "../Component/Support";
import InstructionBanner from "../Utils/instruction-banner2.png";
import MobileInstructionBanner from "../Utils/mobile-instruction-banner.png";
import "./Style.css"


export default function CreateDoor(props) {
  const [uploadfile, setuploadfile] = useState(null);
  const [singleDoor, setsingleDoor] = useState([
    "https://i.pinimg.com/474x/93/5b/6f/935b6f5262314f11b498cbd1cfdbb708.jpg",
    "https://i.pinimg.com/236x/1f/36/65/1f36659c15ceec77510aae0a2a939219.jpg",
    "https://i.pinimg.com/originals/63/fb/c5/63fbc568f322c3d5e3066555b62b9b2d.jpg",
    "https://i.pinimg.com/564x/20/cc/5a/20cc5a83e517c6e5bcf97fb8672d621c.jpg",
    "https://i.pinimg.com/originals/7b/c4/ff/7bc4ff783116d73c9d6129f3dd18a287.jpg",
    "https://i.pinimg.com/originals/76/18/8c/76188cf12afd1152e74c2532cc0b13d4.jpg",
    "https://i.pinimg.com/236x/f7/b7/9f/f7b79f734d4c3d22fd95c6efc0f5e615.jpg",
    "https://i.pinimg.com/236x/2b/70/3d/2b703d6e43f461f50a2f2540456767f6.jpg",
    "https://i.pinimg.com/236x/eb/d6/57/ebd657982c5a83b3a20a80f6046b322e.jpg",
    "https://i.pinimg.com/236x/71/39/79/7139799ae796b3c32eaf91725047ded2.jpg",
    "https://i.pinimg.com/originals/81/7f/24/817f24ecac4b9c06cbf0587d21402146.jpg",
  ]);
  const [selectedDoor, setselectedDoor] = useState(null);
  const [crop, setCrop] = useState();
  const [selection, setselection] = useState(null);
  useEffect(() => {
    if (props.image) {
      setsingleDoor([props.image])
    }
  }, [props.image])

  return (
    <div className="mobile-box-2"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <br />
      <div className="DesktopBanner">
        <img src={InstructionBanner} alt="BANNER" style={{width:"99%"}}/>
      </div>

      <div className="MobileBanner" >
        <img src={MobileInstructionBanner} alt="Mobile  BANNER" />
      </div>

      <div className="mt-4" style={{
        marginLeft: "5%"
      }}>
        {uploadfile ? (
          <div style={{ position: "relative" }}>
            <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
              <img
                src={URL.createObjectURL(uploadfile)}
                style={{ width: "600px", height: "400px", borderRadius: "5px" }}
              />
            </ReactCrop>
            {selection ? (
              <img
                src={singleDoor[selectedDoor]}
                style={{
                  width: selection.width,
                  height: selection.height,
                  position: "absolute",

                  top: selection.y,
                  left: selection.x,
                }}
              />
            ) : null}
          </div>
        ) : (
          <input
            type="file"
            onChange={(e) => {
              setuploadfile(e.target.files[0]);
            }}
            accept="image/png, image/jpeg"
            style={{ marginTop: "45%" }}
          />
        )}
      </div>
      <div><p></p></div>
      <div className="mt-2">
        <button
          className="btn btn-danger text-light"
          style={{ marginRight: "20px" }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset
        </button>
        <button
          className="btn btn-warning text-light"
          style={{ marginRight: "20px" }}
          onClick={() => {
            setCrop();
            setselection();
            setselectedDoor(null);
          }}
        >
          Re-Select
        </button>
        {selectedDoor >= 0 && selectedDoor !== null && (
          <button
            className="btn btn-info text-light"
            onClick={() => {
              setselection(crop);
              setCrop();
            }}
          >
            Preview
          </button>
        )}
      </div>
      <div><p></p></div>
      <div className="d-flex">
        {singleDoor.map((item, index) => (
          <div
            className={`card m-2 ${selectedDoor == index && "shadow"}`}
            key={index}
            onClick={() => {
              setselectedDoor(index);
            }}
          >
            <div className="card-body">
              <img src={item} style={{ width: "90px", height: "140px" }} />
            </div>
          </div>
        ))}
      </div>
      <Support />
    </div>
  );
}
