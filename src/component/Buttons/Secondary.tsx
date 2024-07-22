import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mvs} from '../../utils/metrices';

type Props = {
  title: string;
  selected: string;
  setSelected: any;
};

const ButtonSecondary: FC<Props> = ({title, selected, setSelected}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...(selected == title && styles.selectedButton),
      }}
      onPress={() => setSelected(title)}>
      <Text
        style={{
          ...styles.buttonText,
          ...(selected == title && styles.selectedButtonText),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonSecondary;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    height: mvs(44),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#858585',
    borderRadius: mvs(22),
    marginTop: mvs(12),
  },
  selectedButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: mvs(16),
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    lineHeight: mvs(22),
  },
  selectedButtonText: {
    color: '#000',
  },
});
