//import liraries
import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {mvs} from '../../utils/metrices';
import EyeClose from '../../../assets/svgs/eyeClose';
import EyeOpen from '../../../assets/svgs/eyeOpen';

type Props = {
  placeholder: string;
  value: string;
  password: boolean;
  onChangeText: (text: string) => void;
};

// create a component
const CustomInput = ({placeholder, value, onChangeText, password}: Props) => {
  const [eye, setEye] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#FFFFFF60'}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password && !eye}
      />
      {password && (
        <TouchableOpacity style={styles.eye} onPress={() => setEye(!eye)}>
          {eye ? (
            <EyeClose height={mvs(24)} width={mvs(24)} />
          ) : (
            <EyeOpen height={mvs(24)} width={mvs(24)} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

CustomInput.defaultProps = {
  placeholder: 'Placeholder',
  value: undefined,
  onChangeText: () => {},
  password: false,
};

//make this component available to the app
export default CustomInput;

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: mvs(64),
    borderBottomWidth: 1,
    borderColor: '#FFFFFF60',
    width: '100%',
    fontSize: mvs(16),
    lineHeight: mvs(20),
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  eye: {
    position: 'absolute',
    right: mvs(0),
    alignSelf: 'center',
    marginTop: mvs(20),
    width: mvs(24),
    height: mvs(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
