// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon14Icon(props) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M44.021 46.02a2 2 0 110 4h-24a2 2 0 110-4h24zm6-4h-36a2 2 0 110-4h36a2 2 0 110 4zm-32-16a2 2 0 110-4h28a2 2 0 110 4h-28zm33 6a2 2 0 01-2 2h-34a2 2 0 110-4h34a2 2 0 012 2zm-1-14h-36a2 2 0 110-4h36a2 2 0 110 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon14Icon;
/* prettier-ignore-end */
