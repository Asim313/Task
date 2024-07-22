import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mvs} from '../../utils/metrices';

type Props = {
  title: string;
  onPress: () => void;
  disabled: boolean;
  mt: number;
};

const ButtonPrimary = ({title, onPress, disabled, mt}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{...styles.container, opacity: disabled ? 0.3 : 1, marginTop: mt}}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

ButtonPrimary.defaultProps = {
  title: 'Button',
  onPress: () => {},
  disabled: true,
  mt: 0,
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    height: mvs(44),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF34E2',
    borderRadius: mvs(22),
    //marginTop: mvs(12),
  },
  buttonText: {
    fontSize: mvs(14),
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    lineHeight: mvs(21),
  },
});
