//import liraries
import React, {useState} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import Logo from '../../assets/SVG/logo';
import {mvs} from '../utils/metrices';
import Back1 from '../../assets/SVG/back1';
import CircularProgress from 'react-native-circular-progress-indicator';

type Props = {
  more: boolean;
  progress: number;
  onBack: () => void;
};

// create a component
const Header = ({more = false, onBack, progress = 30}: Props) => {
  const [data, setData] = useState<any>([]);

  return (
    <View style={styles.container}>
      <Logo />
      {more && (
        <View style={styles.mainContainer}>
          <TouchableOpacity onPress={onBack} style={styles.back}>
            <Back1 />
          </TouchableOpacity>
          <CircularProgress
            initialValue={0}
            value={progress}
            radius={mvs(22)}
            progressValueColor={'#FFF'}
            activeStrokeColor={'#FF7ECB'}
            inActiveStrokeColor={'#808080'}
            activeStrokeWidth={mvs(5)}
            inActiveStrokeWidth={mvs(5)}
            valueSuffix={'%'}
            progressValueStyle={{fontWeight: '300', color: 'red'}}
            progressValueFontSize={mvs(12)}
          />
        </View>
      )}
    </View>
  );
};

//make this component available to the app
export default Header;

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: Platform.OS == 'android'? mvs(50) : mvs(60),
    //paddingVertical: mvs(10),
  },
  mainContainer: {
    width: '100%',
    //height: mvs(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  back: {},
});
