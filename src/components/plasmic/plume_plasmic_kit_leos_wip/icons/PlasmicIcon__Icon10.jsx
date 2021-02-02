// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon10Icon(props) {
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
          "M50 58H14a2 2 0 110-4h36a2 2 0 110 4zm-3-39.363V35c0 8.284-4.358 15-15.5 15S16 43.284 16 35V18.6a3.636 3.636 0 00-2.638-3.496.5.5 0 01-.362-.481V13.5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v1.123a.5.5 0 01-.363.48A3.636 3.636 0 0024 18.6V36c0 4.97 1.999 9 9 9 7.001 0 9-4.03 9-9V18.64a3.663 3.663 0 00-2.672-3.52.5.5 0 01-.328-.47V13.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v1.15a.5.5 0 01-.33.47A3.662 3.662 0 0047 18.636z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon10Icon;
/* prettier-ignore-end */
