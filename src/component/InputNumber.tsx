//import liraries
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {mvs} from '../utils/metrices';
import Down from '../../assets/SVG/down';

type Props = {
  mt: number;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

// create a component
const InputNumber = ({placeholder, value, onChangeText, mt}: Props) => {
  const [data, setData] = useState<any>([]);

  const [countryCode, setCountryCode] = useState<any>('FR');
  const [code, setCode] = useState<string>('33')

  const [country, setCountry] = useState<any>(null);
  const [withCountryNameButton, setWithCountryNameButton] =
    useState<boolean>(false);
  const [withFlag, setWithFlag] = useState<boolean>(true);
  const [withEmoji, setWithEmoji] = useState<boolean>(true);
  const [withFilter, setWithFilter] = useState<boolean>(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false);
  const [withCallingCode, setWithCallingCode] = useState<boolean>(false);

  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCode(country.callingCode)
    setCountry(country);
    setPicker(false);
  };

  const [picker, setPicker] = useState<boolean>(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: mvs(10),
        marginTop: mt,
        height: mvs(48),
      }}>
      <TouchableOpacity
        onPress={() => setPicker(true)}
        style={styles.container}>
        <CountryPicker
          visible={picker}
          countryCode={countryCode}
          onSelect={onSelect}
          withEmoji={false}
          withFlag
          withCallingCode
          onClose={() => setPicker(false)}
          containerButtonStyle={styles.flag}
        />
        <Text style={styles.code}>{`+${code}`}</Text>
        <Down />
      </TouchableOpacity>
      <TextInput
        // placeholderTextColor={'#B1B1B1'}
        // placeholder={placeholder}
        value={value}
        keyboardType="number-pad"
        onChangeText={onChangeText}
        style={{...styles.input}}
      />
    </View>
  );
};

InputNumber.defaultProps = {
  placeholder: 'placeholder',
  value: '',
  onChangeText: () => {},
  mt: 0,
};

//make this component available to the app
export default InputNumber;

// define your styles
const styles = StyleSheet.create({
  container: {
    height: mvs(48),
    borderColor: '#FFFFFF',
    borderBottomWidth: mvs(3),
    //paddingHorizontal: mvs(16),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: mvs(3),
  },
  input: {
    flex: 1,
    // height: mvs(48),
    // paddingTop: mvs(10),
    //paddingHorizontal: mvs(17),
    borderColor: '#FFFFFF',
    borderBottomWidth: mvs(3),
    fontSize: mvs(20),
    lineHeight: mvs(30),
    justifyContent:'center',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
    height:'100%',
  },
  code: {
    fontSize: mvs(20),
    lineHeight: mvs(30),
    color: '#FFFFFF',
    marginLeft: mvs(6),
    marginTop: mvs(3),
    fontFamily: 'Poppins-SemiBold',
  },
  flag: {
    width: mvs(24),
    height: mvs(24),
  },
});
