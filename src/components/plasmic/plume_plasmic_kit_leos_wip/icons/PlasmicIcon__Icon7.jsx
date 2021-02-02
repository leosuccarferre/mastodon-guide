// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon7Icon(props) {
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
          "M7.254 35.535a5 5 0 010-7.07L28.467 7.25a5 5 0 017.071 0l21.213 21.213a5 5 0 010 7.072L35.538 56.748a5 5 0 01-7.071 0L7.254 35.535zm2.828-4.242a1 1 0 000 1.414L31.295 53.92a1 1 0 001.415 0l21.213-21.213a1 1 0 000-1.414L32.71 10.08a1 1 0 00-1.415 0L10.082 31.293z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
