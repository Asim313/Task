import * as React from 'react';
import Svg, {SvgProps, Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
import {Dimensions} from 'react-native';
import { mvs } from '../../src/utils/metrices';

const SVGComponent = (props: SvgProps) => {
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
  const viewBoxWidth = 390;
  const viewBoxHeight = mvs(1200);

  return (
    <Svg
      width={screenWidth}
      height={(screenWidth / viewBoxWidth) * viewBoxHeight}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <Rect
        width={viewBoxWidth}
        height={viewBoxHeight}
        fill="url(#pattern0_1_495)"
      />
      <Defs>
        <Pattern
          id="pattern0_1_495"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_1_495"
            transform="matrix(0.000990961 0 0 0.000244141 -0.0212452 0)"
          />
        </Pattern>
        <Image
          id="image0_1_495"
          width={1052}
          height={4096}
        />
      </Defs>
    </Svg>
  );
};
export default SVGComponent;