// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon13Icon(props) {
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
          "M14 46h24a2 2 0 110 4H14a2 2 0 110-4zm36-4H14a2 2 0 110-4h36a2 2 0 110 4zM14 30h34a2 2 0 110 4H14a2 2 0 110-4zm0-8h28a2 2 0 110 4H14a2 2 0 110-4zm36-4H14a2 2 0 110-4h36a2 2 0 110 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */
