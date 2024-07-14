import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Back = (props: SvgProps) => (
  <Svg
    width={10}
    height={16}
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M9 1L2 8L9 15" stroke="white" strokeWidth={2} />
  </Svg>
);
export default Back;
