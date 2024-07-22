import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CloseWhite = (props: SvgProps) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    //@ts-ignore
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19.041 5.45947L5.95954 18.5409"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <Path
      d="M19.041 18.541L5.95954 5.45954"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
);
export default CloseWhite;
