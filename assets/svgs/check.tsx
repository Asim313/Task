import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Check = (props: SvgProps) => (
  <Svg
    width={11}
    height={8}
    viewBox="0 0 11 8"
    fill="none"
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.5 4.5L4.16667 7L9.5 1"
      stroke="#06022B"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Check;
