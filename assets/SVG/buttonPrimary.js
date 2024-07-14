import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const ButtonPrimaryBG = (props: SvgProps) => (
  <Svg
    width={297}
    height={38}
    viewBox="0 0 297 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={297} height={38} rx={19} fill="url(#paint0_linear_6_701)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_6_701"
        x1={0}
        y1={19}
        x2={297}
        y2={19}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5470FE" />
        <Stop offset={1} stopColor="#FA67C6" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default ButtonPrimaryBG;
