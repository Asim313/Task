import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mvs} from '../../utils/metrices';
import Coin from '../../../assets/SVG/coin';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  reward: number;
  index: number;
  today: number;
};

const DailyReward: FC<Props> = ({reward, index, today}) => {
  return (
    <View style={styles.container}>
      {index === today ? (
        <LinearGradient
          start={{x: -0.5, y: 0.05}}
          end={{x: 0.1, y: 1}}
          colors={['#4D55B3', '#A95093']}
          style={styles.mainContainer}
        >
          <Text style={styles.rewardText}>{`+${reward}`}</Text>
          <Coin />
        </LinearGradient>
      ) : (
        <View style={[styles.mainContainer, styles.inactiveContainer]}>
          <Text style={[styles.rewardText, styles.fade]}>{`+${reward}`}</Text>
          <Coin style={styles.fade} />
        </View>
      )}
      <Text style={styles.day}>{`Day ${index + 1}`}</Text>
    </View>
  );
};

export default DailyReward;

const styles = StyleSheet.create({
  container: {},
  mainContainer: {
    width: mvs(40),
    height: mvs(62),
    borderRadius: mvs(11),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inactiveContainer: {
    backgroundColor: '#2E3138',
  },
  rewardText: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: mvs(14),
    lineHeight: mvs(21),
    zIndex: 1,
  },
  fade: {
    opacity: 0.5,
  },
  day: {
    alignSelf: 'center',
    marginTop: mvs(3),
    fontFamily: 'Poppins-Regular',
    color: '#8d8d8d',
    fontSize: mvs(10),
    lineHeight: mvs(15),
  },
});
