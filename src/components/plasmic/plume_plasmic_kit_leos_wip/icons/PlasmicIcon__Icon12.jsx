// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon12Icon(props) {
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
          "M42.46 15.078c-2.728.654-4.069 2.178-4.395 4.224l-4.02 25.638a3.455 3.455 0 002.57 3.943.5.5 0 01.367.56l-.18 1.134a.503.503 0 01-.498.423h-14.8a.501.501 0 01-.498-.578l.173-1.092a.502.502 0 01.38-.409c2.727-.653 4.068-2.178 4.394-4.223l4.02-25.639a3.456 3.456 0 00-2.57-3.942.5.5 0 01-.367-.56l.18-1.134a.503.503 0 01.498-.423h14.8a.502.502 0 01.498.578l-.173 1.092a.502.502 0 01-.38.408z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */
