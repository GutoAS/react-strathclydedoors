import React from "react";

export default function VikingDoor({ doorColor, data, glazing }) {
  return (
    <>
      <img width={244} height={511} src={data?.color[doorColor]} alt="" />
      <img
        width={125}
        height={202}
        src={data.top[glazing]}
        style={{ zIndex: 999 }}
        alt=""
      />
    </>
  );
}
