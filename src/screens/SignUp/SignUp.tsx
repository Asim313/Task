// import libraries
import React, {FC, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Check from '../../../assets/svgs/check';
import CloseWhite from '../../../assets/svgs/closeWhite';
import ButtonPrimary from '../../component/Buttons/Primary';
import CustomInput from '../../component/CustomInput/CustomInput';
import {styles} from './Styles';

interface SignUpProps {
  navigation: {
    goBack: () => void;
  };
}

interface Payload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignUp: FC<SignUpProps> = ({navigation}) => {
  const [payload, setPayload] = useState<Payload>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [check, setCheck] = useState<boolean>(false);

  const hasEmptyString = () => {
    return Object.values(payload).some(value => value === '');
  };

  const handleInputChange = (field: keyof Payload, value: string) => {
    setPayload(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <CloseWhite onPress={navigation.goBack} style={styles.close} />
      <KeyboardAwareScrollView style={styles.mainContainer}>
        <CustomInput
          placeholder="First Name"
          value={payload.firstName}
          onChangeText={txt => handleInputChange('firstName', txt)}
        />
        <CustomInput
          placeholder="Last Name"
          value={payload.lastName}
          onChangeText={txt => handleInputChange('lastName', txt)}
        />
        <CustomInput
          placeholder="Email"
          value={payload.email}
          onChangeText={txt => handleInputChange('email', txt)}
        />
        <CustomInput
          password
          placeholder="Password"
          value={payload.password}
          onChangeText={txt => handleInputChange('password', txt)}
        />

        <View style={styles.agreeContainer}>
          <TouchableOpacity
            onPress={() => setCheck(!check)}
            style={{...styles.agreeCheck, ...(check && styles.checked)}}>
            <Check style={styles.agreeCheckMark} />
          </TouchableOpacity>
          <Text style={styles.agreeText}>
            {'I agree to the Terms of Service and Privacy Policy'}
          </Text>
        </View>

        <ButtonPrimary
          onPress={() => Alert.alert('Completed 🥳🎉🎉🎉🎉')}
          disabled={hasEmptyString() || !check}
          title="Sign up"
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

//make this component available to the app
export default SignUp;
