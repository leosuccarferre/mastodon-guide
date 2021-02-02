// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4k5VUvYN9ByL8a1GrrWDBZ
// Component: r6YliwFJo6WpW
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import SliderThumb from "../../SliderThumb"; // plasmic-import: W2Dkok7-uMor0/component
import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_plume_plasmic_kit_leos_wip.module.css"; // plasmic-import: 4k5VUvYN9ByL8a1GrrWDBZ/projectcss
import sty from "./PlasmicSlider.module.css"; // plasmic-import: r6YliwFJo6WpW/css

export const PlasmicSlider__VariantProps = new Array("hasLabel", "isDisabled");

export const PlasmicSlider__ArgProps = new Array("label");

function PlasmicSlider__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(variants, "hasLabel", "hasLabel") ? true : false) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(defaultcss.all, sty.labelContainer, {
            [sty.labelContainer__hasLabel]: hasVariant(
              variants,
              "hasLabel",
              "hasLabel"
            ),

            [sty.labelContainer__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            )
          })}
        >
          <p.PlasmicSlot
            defaultContents={"Enter some text"}
            value={args.label}
          />
        </div>
      ) : null}

      <div
        data-plasmic-name={"sliderContainer"}
        data-plasmic-override={overrides.sliderContainer}
        className={classNames(defaultcss.all, sty.sliderContainer, {
          [sty.sliderContainer__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          )
        })}
      >
        <div
          data-plasmic-name={"track"}
          data-plasmic-override={overrides.track}
          className={classNames(defaultcss.all, sty.track, {
            [sty.track__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            )
          })}
        >
          <div
            data-plasmic-name={"rail"}
            data-plasmic-override={overrides.rail}
            className={classNames(defaultcss.all, sty.rail)}
          />

          <div
            data-plasmic-name={"filledTrack"}
            data-plasmic-override={overrides.filledTrack}
            className={classNames(defaultcss.all, sty.filledTrack)}
          />
        </div>

        <div
          data-plasmic-name={"thumbContainer"}
          data-plasmic-override={overrides.thumbContainer}
          className={classNames(defaultcss.all, sty.thumbContainer)}
        >
          <SliderThumb
            data-plasmic-name={"thumbTemplate"}
            data-plasmic-override={overrides.thumbTemplate}
            className={classNames("__wab_instance", sty.thumbTemplate)}
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "labelContainer",
    "sliderContainer",
    "track",
    "rail",
    "filledTrack",
    "thumbContainer",
    "thumbTemplate"
  ],

  labelContainer: ["labelContainer"],
  sliderContainer: [
    "sliderContainer",
    "track",
    "rail",
    "filledTrack",
    "thumbContainer",
    "thumbTemplate"
  ],

  track: ["track", "rail", "filledTrack"],
  rail: ["rail"],
  filledTrack: ["filledTrack"],
  thumbContainer: ["thumbContainer", "thumbTemplate"],
  thumbTemplate: ["thumbTemplate"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSlider__ArgProps,
      internalVariantPropNames: PlasmicSlider__VariantProps
    });

    return PlasmicSlider__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSlider";
  } else {
    func.displayName = `PlasmicSlider.${nodeName}`;
  }
  return func;
}

export const PlasmicSlider = Object.assign(
  // Top-level PlasmicSlider renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labelContainer: makeNodeComponent("labelContainer"),
    sliderContainer: makeNodeComponent("sliderContainer"),
    track: makeNodeComponent("track"),
    rail: makeNodeComponent("rail"),
    filledTrack: makeNodeComponent("filledTrack"),
    thumbContainer: makeNodeComponent("thumbContainer"),
    thumbTemplate: makeNodeComponent("thumbTemplate"),
    // Metadata about props expected for PlasmicSlider
    internalVariantProps: PlasmicSlider__VariantProps,
    internalArgProps: PlasmicSlider__ArgProps
  }
);

export default PlasmicSlider;
/* prettier-ignore-end */
