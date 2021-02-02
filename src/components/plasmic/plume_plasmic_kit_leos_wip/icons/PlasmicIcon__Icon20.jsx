// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon20Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 6a2 2 0 012 2v48a2 2 0 11-4 0V8a2 2 0 012-2zm48 0a2 2 0 012 2v48a2 2 0 11-4 0V8a2 2 0 012-2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M29.007 18.987A1.5 1.5 0 0130.416 18h3.157a1.5 1.5 0 011.41.987l9.46 26.006A.748.748 0 0143.74 46h-2.31a1.25 1.25 0 01-1.173-.822L38.372 40H25.617l-1.884 5.178A1.25 1.25 0 0122.56 46h-2.31a.75.75 0 01-.704-1.007l9.462-26.006zm2.987 3.483L27.072 36h9.845l-4.923-13.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
