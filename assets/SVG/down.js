import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Down = (props: SvgProps) => (
  <Svg
    width={12}
    height={7}
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M1 1L6 6L11 1" stroke="white" />
  </Svg>
);
export default Down;
