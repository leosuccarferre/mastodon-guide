// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4k5VUvYN9ByL8a1GrrWDBZ
// Component: a4jOS-q5vpJh
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_plume_plasmic_kit_leos_wip.module.css"; // plasmic-import: 4k5VUvYN9ByL8a1GrrWDBZ/projectcss
import sty from "./PlasmicSwitch.module.css"; // plasmic-import: a4jOS-q5vpJh/css

export const PlasmicSwitch__VariantProps = new Array(
  "isSelected",
  "hasLabel",
  "isDisabled"
);

export const PlasmicSwitch__ArgProps = new Array("children");

function PlasmicSwitch__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const [
    isRootFocusVisibleWithin,
    triggerRootFocusVisibleWithinProps
  ] = useTrigger("useFocusVisibleWithin", {
    isTextInput: false
  });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__hasLabel]: hasVariant(variants, "hasLabel", "hasLabel"),
        [sty.root__isDisabled]: hasVariant(
          variants,
          "isDisabled",
          "isDisabled"
        ),

        [sty.root__isDisabled_isSelected]:
          hasVariant(variants, "isDisabled", "isDisabled") &&
          hasVariant(variants, "isSelected", "isSelected")
      })}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"_switch"}
        data-plasmic-override={overrides._switch}
        className={classNames(defaultcss.all, sty._switch, {
          [sty._switch____focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty._switch__isDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty._switch__isSelected]: hasVariant(
            variants,
            "isSelected",
            "isSelected"
          )
        })}
      >
        <div
          data-plasmic-name={"track"}
          data-plasmic-override={overrides.track}
          className={classNames(defaultcss.all, sty.track, {
            [sty.track____focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.track__hasLabel]: hasVariant(variants, "hasLabel", "hasLabel"),
            [sty.track__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.track__isDisabled_isSelected]:
              hasVariant(variants, "isDisabled", "isDisabled") &&
              hasVariant(variants, "isSelected", "isSelected"),
            [sty.track__isSelected]: hasVariant(
              variants,
              "isSelected",
              "isSelected"
            )
          })}
        />

        <div
          data-plasmic-name={"thumb"}
          data-plasmic-override={overrides.thumb}
          className={classNames(defaultcss.all, sty.thumb, {
            [sty.thumb____focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.thumb__isDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),

            [sty.thumb__isSelected]: hasVariant(
              variants,
              "isSelected",
              "isSelected"
            )
          })}
        />
      </div>

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
            defaultContents={"Switch me!"}
            value={args.children}
            className={classNames(sty.slotChildren, {
              [sty.slotChildren__hasLabel]: hasVariant(
                variants,
                "hasLabel",
                "hasLabel"
              ),

              [sty.slotChildren__isDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              )
            })}
          />
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "_switch", "track", "thumb", "labelContainer"],
  _switch: ["_switch", "track", "thumb"],
  track: ["track"],
  thumb: ["thumb"],
  labelContainer: ["labelContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSwitch__ArgProps,
      internalVariantPropNames: PlasmicSwitch__VariantProps
    });

    return PlasmicSwitch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSwitch";
  } else {
    func.displayName = `PlasmicSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicSwitch = Object.assign(
  // Top-level PlasmicSwitch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _switch: makeNodeComponent("_switch"),
    track: makeNodeComponent("track"),
    thumb: makeNodeComponent("thumb"),
    labelContainer: makeNodeComponent("labelContainer"),
    // Metadata about props expected for PlasmicSwitch
    internalVariantProps: PlasmicSwitch__VariantProps,
    internalArgProps: PlasmicSwitch__ArgProps
  }
);

export default PlasmicSwitch;
/* prettier-ignore-end */
