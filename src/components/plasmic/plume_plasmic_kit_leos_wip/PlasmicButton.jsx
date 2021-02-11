// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4k5VUvYN9ByL8a1GrrWDBZ
// Component: 0PjHSFlclC74
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { ThemeContext } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: kuNhmFdqPZ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_plume_plasmic_kit_leos_wip.module.css"; // plasmic-import: 4k5VUvYN9ByL8a1GrrWDBZ/projectcss
import sty from "./PlasmicButton.module.css"; // plasmic-import: 0PjHSFlclC74/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: lge7i2r7Gx/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: dUnstzXL-B/icon

export const PlasmicButton__VariantProps = new Array(
  "withIcons",
  "states",
  "type"
);

export const PlasmicButton__ArgProps = new Array(
  "endIcon",
  "startIcon",
  "children",
  "alt"
);

function PlasmicButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const [isRootFocusVisible, triggerRootFocusVisibleProps] = useTrigger(
    "useFocusVisible",
    {
      isTextInput: false
    }
  );

  const triggers = {
    focusVisible_root: isRootFocusVisible
  };

  const globalVariants = ensureGlobalVariants({
    theme: React.useContext(ThemeContext)
  });

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        defaultcss.button,
        projectcss.root_reset,
        sty.root,
        {
          [sty.root____focusVisible]: triggers.focusVisible_root,
          [sty.root__global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),

          [sty.root__states_isDisabled]: hasVariant(
            variants,
            "states",
            "isDisabled"
          ),

          [sty.root__states_isSet]: hasVariant(variants, "states", "isSet"),
          [sty.root__type_cyan]: hasVariant(variants, "type", "cyan"),
          [sty.root__type_flat]: hasVariant(variants, "type", "flat"),
          [sty.root__type_rounded]: hasVariant(variants, "type", "rounded"),
          [sty.root__type_secondary]: hasVariant(variants, "type", "secondary"),
          [sty.root__type_secondary___focusVisible]:
            hasVariant(variants, "type", "secondary") &&
            triggers.focusVisible_root,
          [sty.root__type_secondary_global_theme_dark]:
            hasVariant(variants, "type", "secondary") &&
            hasVariant(globalVariants, "theme", "dark"),
          [sty.root__type_smallerPadding]: hasVariant(
            variants,
            "type",
            "smallerPadding"
          ),

          [sty.root__withIcons_end]: hasVariant(variants, "withIcons", "end"),
          [sty.root__withIcons_noLabel]: hasVariant(
            variants,
            "withIcons",
            "noLabel"
          ),

          [sty.root__withIcons_start]: hasVariant(
            variants,
            "withIcons",
            "start"
          )
        }
      )}
      title={args.alt !== undefined ? args.alt : ""}
      data-plasmic-trigger-props={[triggerRootFocusVisibleProps]}
    >
      {(hasVariant(variants, "withIcons", "start") ? true : false) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(defaultcss.all, sty.startIconContainer, {
            [sty.startIconContainer____focusVisible]:
              triggers.focusVisible_root,
            [sty.startIconContainer__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            ),

            [sty.startIconContainer__withIcons_end]: hasVariant(
              variants,
              "withIcons",
              "end"
            ),

            [sty.startIconContainer__withIcons_start]: hasVariant(
              variants,
              "withIcons",
              "start"
            )
          })}
        >
          <p.PlasmicSlot
            defaultContents={
              <IconIcon
                className={classNames(defaultcss.all, sty.svg__c4MvQ)}
                role={"img"}
              />
            }
            value={args.startIcon}
            className={classNames(sty.slotStartIcon, {
              [sty.slotStartIcon____focusVisible]: triggers.focusVisible_root,
              [sty.slotStartIcon__states_isDisabled]: hasVariant(
                variants,
                "states",
                "isDisabled"
              ),

              [sty.slotStartIcon__type_cyan]: hasVariant(
                variants,
                "type",
                "cyan"
              ),

              [sty.slotStartIcon__type_secondary]: hasVariant(
                variants,
                "type",
                "secondary"
              ),

              [sty.slotStartIcon__withIcons_end]: hasVariant(
                variants,
                "withIcons",
                "end"
              ),

              [sty.slotStartIcon__withIcons_start]: hasVariant(
                variants,
                "withIcons",
                "start"
              )
            })}
          />
        </div>
      ) : null}
      {(hasVariant(variants, "withIcons", "noLabel") ? false : true) ? (
        <p.PlasmicSlot
          defaultContents={"Button"}
          value={args.children}
          className={classNames(sty.slotChildren, {
            [sty.slotChildren____focusVisible]: triggers.focusVisible_root,
            [sty.slotChildren__global_theme_dark]: hasVariant(
              globalVariants,
              "theme",
              "dark"
            ),

            [sty.slotChildren__states_isDisabled]: hasVariant(
              variants,
              "states",
              "isDisabled"
            ),

            [sty.slotChildren__type_cyan]: hasVariant(variants, "type", "cyan"),
            [sty.slotChildren__type_flat]: hasVariant(variants, "type", "flat"),
            [sty.slotChildren__type_rounded]: hasVariant(
              variants,
              "type",
              "rounded"
            ),

            [sty.slotChildren__type_secondary]: hasVariant(
              variants,
              "type",
              "secondary"
            ),

            [sty.slotChildren__type_secondary___focusVisible]:
              hasVariant(variants, "type", "secondary") &&
              triggers.focusVisible_root,
            [sty.slotChildren__withIcons_end]: hasVariant(
              variants,
              "withIcons",
              "end"
            ),

            [sty.slotChildren__withIcons_noLabel]: hasVariant(
              variants,
              "withIcons",
              "noLabel"
            ),

            [sty.slotChildren__withIcons_start]: hasVariant(
              variants,
              "withIcons",
              "start"
            )
          })}
        />
      ) : null}
      {(hasVariant(variants, "withIcons", "end") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(defaultcss.all, sty.endIconContainer, {
            [sty.endIconContainer__withIcons_end]: hasVariant(
              variants,
              "withIcons",
              "end"
            )
          })}
        >
          <p.PlasmicSlot
            defaultContents={
              <Icon3Icon
                className={classNames(defaultcss.all, sty.svg__sR56)}
                role={"img"}
              />
            }
            value={args.endIcon}
            className={classNames(sty.slotEndIcon, {
              [sty.slotEndIcon__states_isDisabled]: hasVariant(
                variants,
                "states",
                "isDisabled"
              ),

              [sty.slotEndIcon__type_cyan]: hasVariant(
                variants,
                "type",
                "cyan"
              ),

              [sty.slotEndIcon__withIcons_end]: hasVariant(
                variants,
                "withIcons",
                "end"
              )
            })}
          />
        </div>
      ) : null}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  endIconContainer: ["endIconContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),
    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps
  }
);

export default PlasmicButton;
/* prettier-ignore-end */