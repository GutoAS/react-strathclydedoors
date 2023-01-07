import React, { useState, useEffect } from "react";

function Count(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Use an interval to increment the count by 1 every 10ms
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < props.value) {
        setCount(count + 2);
      }
    }, 1);
    return () => clearInterval(interval);
  },);

  return (
   <>
      <button className="count-h " style={{
background: "#F08661",
width: "170px",
padding: "0.5rem 3rem 4.6rem 3rem",
height: "70px",
color: "white",
textAlign: "center",
fontWeight: "800",
position: "relative",
bottom: "230px",
left: "380px",
border : "none",
fontSize : "1.8rem",
fontFamily : "var(--font-family)",
boxShadow: "-11px 11px 0px 0px #184061 ",


      }}>{count}+ <p className="btn-p" style={{margin : "0" , color : "white", fontFamily :"var(--font-family)", fontSize :"1rem", fontWeight :"400" }}>Reviews</p></button>
     
    
</>
  );
}

export default Count;
