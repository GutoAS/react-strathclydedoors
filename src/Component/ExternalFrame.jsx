import React from "react";

export default function ExternalFrame({ externalFrameColor }) {
  return (
    <g
      hingeside="left"
      shape="regular"
      threshold="regular"
      transomposition={0}
      midrailtype="none"
      midrailposition={850}
    >
      <svg x={0} y={0}>
        <g
          height={2100}
          topsectionid={299}
          bottomsectionid={299}
          leftsectionid={299}
          rightsectionid={299}
        >
          <defs>
            <pattern
              id="texture-aa8035fe-f1fc-4ebf-be21-df7bf4903e7c"
              patternUnits="userSpaceOnUse"
              width={324}
              height={135}
            ></pattern>
          </defs>
          <path
            d="M 0 0 h 1005 v 0 l -77 77 h -851 l -77 -77 z"
            fill={externalFrameColor}
            transform
            className="frame-edge"
          />
        </g>
      </svg>
      <svg x={928} y={0}>
        <g
          height={2100}
          topsectionid={299}
          bottomsectionid={299}
          leftsectionid={299}
          rightsectionid={299}
        >
          <defs>
            <pattern
              id="texture-95998d5c-5da3-4986-a231-06c1817103e4"
              patternUnits="userSpaceOnUse"
              width={135}
              height={324}
            ></pattern>
          </defs>
          <path
            d="M 0 0 v 2100 h 0 l 77 -77 v -1946 l -77 -77 z"
            fill={externalFrameColor}
            transform="rotate(180 38.5 1050)"
            className="frame-edge"
          />
          <path
            d="M 0 0 v 2100 h 0 l 77 -77 v -1946 l -77 -77 z"
            fill="url(#texture-95998d5c-5da3-4986-a231-06c1817103e4)"
            transform="rotate(180 38.5 1050)"
            className="frame-edge"
          />
        </g>
      </svg>
      <svg x={0} y={2023}>
        <g
          height={2100}
          topsectionid={299}
          bottomsectionid={299}
          leftsectionid={299}
          rightsectionid={299}
        >
          <defs>
            <pattern
              id="texture-37a1717c-f71d-41de-94b3-fef58e34e07e"
              patternUnits="userSpaceOnUse"
              width={324}
              height={135}
            ></pattern>
          </defs>
          <path
            d="M 0 0 h 1005 v 0 l -77 77 h -851 l -77 -77 z"
            fill={externalFrameColor}
            transform="rotate(180 502.5 38.5)"
            className="frame-edge"
          />
        </g>
      </svg>
      <svg x={0} y={0}>
        <g
          height={2100}
          topsectionid={299}
          bottomsectionid={299}
          leftsectionid={299}
          rightsectionid={299}
        >
          <defs>
            <pattern
              id="texture-4370c4cc-c633-474d-8e6d-ac50c742522a"
              patternUnits="userSpaceOnUse"
              width={135}
              height={324}
            ></pattern>
          </defs>
          <path
            d="M 0 0 v 2100 h 0 l 77 -77 v -1946 l -77 -77 z"
            fill={externalFrameColor}
            transform
            className="frame-edge"
          />
          <path
            d="M 0 0 v 2100 h 0 l 77 -77 v -1946 l -77 -77 z"
            fill="url(#texture-4370c4cc-c633-474d-8e6d-ac50c742522a)"
            transform
            className="frame-edge"
          />
        </g>
      </svg>
    </g>
  );
}
