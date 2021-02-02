// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";

export const ScreenContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

const screenVariants = ["unnamedVariant"];

const screenQueries = ["(min-width:0px) and (max-width:800px)"];

function matchScreenVariant() {
  if (!globalThis.matchMedia) {
    return undefined;
  }
  const index = screenQueries.findIndex(
    (q) => globalThis.matchMedia(q).matches
  );
  return index >= 0 ? screenVariants[index] : undefined;
}

export function ScreenVariantProvider(props) {
  const [value, setValue] = React.useState();
  React.useEffect(() => {
    const handler = () => {
      const newValue = matchScreenVariant();
      if (newValue !== value) {
        setValue(newValue);
      }
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [value]);
  return (
    <ScreenContext.Provider value={value}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export default ScreenContext;
/* prettier-ignore-end */
