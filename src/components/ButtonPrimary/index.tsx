import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mvs} from '../../utils/metrices';
import Coin from '../../../assets/SVG/coin';
import ButtonPrimaryBG from '../../../assets/SVG/buttonPrimary';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  title: string;
  cardButton: boolean;
  task: boolean;
};

const ButtonPrimary: FC<Props> = ({title, cardButton = false, task}) => {
  const [claim, setClaim] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setClaim(!claim)}
      disabled={claim || task}
      style={{...styles.container, marginTop: cardButton ? 0 : mvs(6)}}
    >
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={['#5470FE', '#FA67C6']}
        style={{
          ...styles.buttonContainer,
          ...(cardButton && {height: mvs(20), width: mvs(53)}),
        }}
      >
        <Text
          style={
            cardButton
              ? {...styles.buttonText, ...{fontSize: mvs(12)}}
              : {...styles.buttonText, ...(claim && styles.claimed)}
          }
        >
          {cardButton ? (claim ? 'Claim' : title) : claim ? '23:59:59' : title}
        </Text>
        {(task || claim) && (
          <View
            style={{
              ...styles.fade,
              ...(cardButton && {height: mvs(20), width: mvs(53)}),
            }}
          />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: mvs(6),
  },
  buttonContainer: {
    width: mvs(297),
    height: mvs(38),
    borderRadius: mvs(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: mvs(10),
    //position: 'absolute',
  },
  buttonText: {
    fontSize: mvs(14),
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    lineHeight: mvs(21),
  },
  claimed: {
    fontSize: mvs(20),
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    lineHeight: mvs(30),
  },
  fade: {
    width: mvs(297),
    height: mvs(38),
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: '#000000',
    zIndex: 1,
    opacity: 0.5,
    borderRadius: mvs(50),
  },
});
