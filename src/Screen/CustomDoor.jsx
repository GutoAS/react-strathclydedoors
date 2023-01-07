import React, { createRef, useEffect, useState } from "react";
import ExternalFrame from "../Component/ExternalFrame";
import Support from "../Component/Support";
import { DoorColor } from "../Utils/DoorColor";
import { Pattern } from "../Utils/Pattern";
import { useNavigate } from "react-router-dom";
import ReactCrop, { convertToPercentCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import InstructionBanner from "../Utils/instruction-banner2.png";
import MobileInstructionBanner from "../Utils/mobile-instruction-banner.png";
import CreateDoor from './CreateDoor';
import "./Style.css"
import { useScreenshot } from "use-react-screenshot";
export default function CustomDoor() {
  const [doorColor, setdoorColor] = useState("#460003");
  const [externalFrameColor, setexternalFrameColor] = useState("#460003");
  const [pattern, setpattern] = useState(Pattern[0]);
  const [glazing, setglazing] = useState(null);
  const ref = createRef(null);
  const [IMG, takeScreenshot] = useScreenshot()
  console.log("IMG", IMG);
  const [image, setimage] = useState(null);
  const getImage = () => {
    takeScreenshot(ref.current)
    // setimage(document.getElementById("screenshot"));
  };
  const navigate = useNavigate();
  return IMG ? (
    <CreateDoor image={IMG} />
  ) : (
    <>
      <div className="box-mobile"
        style={{
          display: "flex",
          // padding: "2rem",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        
        }}
      >
        <div
          ref={ref}
        >
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
                style={{ height: "100%", width: "100%" }}
                src={pattern?.color[doorColor]}
              />
              {glazing && pattern.glazing[glazing] && (
                <img
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
                  className={`card m-2 ${pattern == item.name && "shadow"}`}
                  key={index}
                  onClick={() => {
                    setpattern(item);
                  }}
                >
                  <div className="card-body">
                    <img
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
                  className={`card m-2 ${doorColor == item && "shadow"}`}
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
                    {DoorColor.map(color => color.color == item && <p>{color.name}</p>)}
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
                  className={`card m-2 ${externalFrameColor === item.color && "shadow"
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
                    className={`card m-2 ${glazing == item && "shadow"}`}
                    key={index}
                    onClick={() => {
                      setglazing(item);
                    }}
                  >
                    <div className="card-body">
                      <img
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
    </>
  );
}

// function CreateDoor(props) {
//   const [uploadfile, setuploadfile] = useState(null);
//   // const [crop, setCrop] = useState();
//   const [selection, setselection] = useState(null);
//   useEffect(() => {
//     let IMG = props.image;
//     IMG.setAttribute("width", 200)
//     IMG.setAttribute("height", 300)
//     let show = document.getElementById("show");
//     if (show) {
//       show.appendChild(IMG);
//     }
//   }, [uploadfile])
//   useEffect(() => {
//     dragElement(document.getElementById("show"));

//     function dragElement(elmnt) {
//       if (elmnt) {
//         var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//         elmnt.onmousedown = dragMouseDown;

//         function dragMouseDown(e) {
//           e = e || window.event;
//           e.preventDefault();
//           pos3 = e.clientX;
//           pos4 = e.clientY;
//           document.onmouseup = closeDragElement;
//           document.onmousemove = elementDrag;
//         }

//         function elementDrag(e) {
//           e = e || window.event;
//           e.preventDefault();
//           pos1 = pos3 - e.clientX;
//           pos2 = pos4 - e.clientY;
//           pos3 = e.clientX;
//           pos4 = e.clientY;
//           elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//           elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//         }

//         function closeDragElement() {
//           document.onmouseup = null;
//           document.onmousemove = null;
//         }
//       }
//     }


//     function makeResizableDiv() {
//       const element = document.getElementById("show");
//       console.log("element", element);
//       if (element) {
//         const currentResizer = document.getElementById('resizer')
//         const minimum_size = 20;
//         let original_width = 0;
//         let original_height = 0;
//         let original_x = 0;
//         let original_y = 0;
//         let original_mouse_x = 0;
//         let original_mouse_y = 0;
//         console.log("currentResizer", currentResizer);
//         currentResizer.addEventListener('mousedown', function (e) {
//           e.preventDefault()
//           original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
//           original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
//           original_x = element.getBoundingClientRect().left;
//           original_y = element.getBoundingClientRect().top;
//           original_mouse_x = e.pageX;
//           original_mouse_y = e.pageY;
//           window.addEventListener('mousemove', resize)
//           window.addEventListener('mouseup', stopResize)
//         })

//         function resize(e) {
//           const width = original_width + (e.pageX - original_mouse_x);
//           const height = original_height + (e.pageY - original_mouse_y)
//           let show = document.getElementById("show")
//           let SVG = document.getElementsByTagName("svg").screenshot
//           // console.log("SVG",SVG.attributes);
//           if (width > minimum_size) {
//             element.style.width = width + 'px'
//             show.style.width = width + 'px'
//             SVG.attributes[1].value = width
//           }
//           if (height > minimum_size) {
//             element.style.height = height + 'px'
//             show.style.height = height + 'px'
//             SVG.attributes[2].value = height
//           }
//         }

//         function stopResize() {
//           window.removeEventListener('mousemove', resize)
//         }
//       }
//     }

//     makeResizableDiv()
//   })
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <br />
//       <div className="DesktopBanner">
//         <img src={InstructionBanner} alt="BANNER" style={{ width: "99%" }} />
//       </div>

//       <div className="MobileBanner" >
//         <img src={MobileInstructionBanner} alt="Mobile  BANNER" />
//       </div>
//       <div
//         className="mt-4"
//         style={{
//           marginLeft: "5%",
//         }}
//       >
//         {uploadfile ? (
//           <div style={{ position: "relative" }}>
//             {/* <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
//             </ReactCrop> */}
//             {/* {selection ? ( */}
//             <img
//               src={URL.createObjectURL(uploadfile)}
//               style={{ width: "600px", height: "400px", borderRadius: "5px" }}
//             />
//             <div
//               id="show"
//               style={{
//                 width: 200,
//                 height: 300,
//                 position: "absolute",
//                 zIndex: "999",
//                 top: 0,
//                 left: 0,
//               }}
//             >
//               <div id="resizer" style={{
//                 width: 20, height: 20,
//                 background: "#ffffff80", borderRadius: "100%",
//                 position: "absolute", right: 20, bottom: -7
//               }} />
//             </div>
//             {/* ) : null} */}
//           </div>
//         ) : (
//           <input
//             type="file"
//             onChange={(e) => {
//               setuploadfile(e.target.files[0]);
//             }}
//             accept="image/png, image/jpeg"
//             style={{ marginTop: "45%" }}
//           />
//         )}
//       </div>
//       <div className="mt-2">
//         <button
//           className="btn btn-danger text-light"
//           style={{ marginRight: "20px" }}
//           onClick={() => {
//             window.location.reload();
//           }}
//         >
//           Go Back
//         </button>
//         {/* <button
//           className="btn btn-warning text-light"
//           style={{ marginRight: "20px" }}
//           onClick={() => {
//             // setCrop();
//             setselection();
//           }}
//         >
//           Re-Select
//         </button>
//         {uploadfile && (
//           <button
//             className="btn btn-info text-light"
//             onClick={() => {

//               // setselection(crop);
//               // setCrop();
//             }}
//           >
//             Preview
//           </button>
//         )} */}
//       </div>
//       <div>
//         <p></p>
//       </div>
//       <Support />
//     </div>
//   );
// }
