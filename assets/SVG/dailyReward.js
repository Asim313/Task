import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {mvs} from '../../src/utils/metrices';
const DailyRewardBG = (props: SvgProps) => (
  <Svg
    width={mvs(40)}
    height={mvs(62)}
    viewBox={`0 0 ${mvs(40)} ${mvs(62)}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 11C0 4.92487 4.92487 0 11 0H31C37.0751 0 42 4.92487 42 11V54C42 60.0751 37.0751 65 31 65H11C4.92487 65 0 60.0751 0 54V11Z"
      fill="url(#paint0_linear_1_522)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_522"
        x1={-38}
        y1={3}
        x2={-2.5}
        y2={61}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4D55B3" />
        <Stop offset={1} stopColor="#A95093" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default DailyRewardBG;
