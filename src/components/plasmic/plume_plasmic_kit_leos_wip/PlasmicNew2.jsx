// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4k5VUvYN9ByL8a1GrrWDBZ
// Component: DAffRW1uWt
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_plume_plasmic_kit_leos_wip.module.css"; // plasmic-import: 4k5VUvYN9ByL8a1GrrWDBZ/projectcss
import sty from "./PlasmicNew2.module.css"; // plasmic-import: DAffRW1uWt/css

export const PlasmicNew2__VariantProps = new Array();

export const PlasmicNew2__ArgProps = new Array();

function PlasmicNew2__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNew2__ArgProps,
      internalVariantPropNames: PlasmicNew2__VariantProps
    });

    return PlasmicNew2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNew2";
  } else {
    func.displayName = `PlasmicNew2.${nodeName}`;
  }
  return func;
}

export const PlasmicNew2 = Object.assign(
  // Top-level PlasmicNew2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicNew2
    internalVariantProps: PlasmicNew2__VariantProps,
    internalArgProps: PlasmicNew2__ArgProps
  }
);

export default PlasmicNew2;
/* prettier-ignore-end */
