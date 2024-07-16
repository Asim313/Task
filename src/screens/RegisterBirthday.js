import React, {useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Header from '../component/Header';
import {useSessionData} from '../component/SessionContext';
import {mvs} from '../utils/metrices';
import {styles} from '../utils/styles';
import languages from '../utils/translations';

let userToRegister = null;

const RegisterBirthday = ({navigation}) => {
  const {sessionData, updateSessionData} = useSessionData();
  const currentLanguage = sessionData.currentLanguage || 'en';
  const t = languages[currentLanguage];
  const [value, setValue] = useState('');
  const [age, setAge] = useState(null);
  const [dob, setDob] = useState(null);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const CELL_COUNT = 8;

  useEffect(() => {
    try {
      userToRegister = JSON.parse(sessionData.userToRegister);
    } catch (e) {
      console.error('Parsing error:', e);
    }
  }, []);

  const calculateAge = dob => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleInputChange = input => {
    setValue(input);
    if (input.length === CELL_COUNT) {
      const day = parseInt(input.slice(0, 2), 10);
      const month = parseInt(input.slice(2, 4), 10);
      const year = parseInt(input.slice(4, 8), 10);
      const currentYear = new Date().getFullYear();
      const today = new Date();

      if (day > 31 || month > 12 || year > currentYear) {
        Alert.alert('Invalid Date', 'Please enter a valid date.');
        setAge(0);
        return;
      }

      const dob = new Date(year, month - 1, day);
      if (dob >= today) {
        Alert.alert('Invalid Date', 'Date of birth must be in the past.');
        setAge(0);
        return;
      }

      setDob(dob);
      const calculatedAge = calculateAge(dob);
      setAge(calculatedAge);
    } else {
      setAge(0);
    }
  };

  const registerGender = () => {
    if (isNaN(age) || age < 18 || age > 110) {
      Alert.alert(
        'Invalid Date of Birth',
        'Please enter a valid date of birth. You must be at least 18 years old and not older than 110 years.',
      );
      return;
    }

    userToRegister.setting.birthday = dob;
    userToRegister.setting.age = age;
    const stringifyUser = JSON.stringify(userToRegister);
    updateSessionData({
      pageContext: 'RegisterPhone',
      userToRegister: stringifyUser,
    });
    navigation.navigate('RegisterPhone');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.loginscreen}>
      <Header progress={36} more onBack={() => navigation.goBack()} />

      <View style={{...styles.headerContainer, height: mvs(120)}}>
        <Text style={[styles.textLeftAlign, {marginLeft: 8}]}>
          {t.birthdayHeader}
        </Text>
        <View style={styles.textContainer}>
          <Text style={[styles.textLeftAlignSmall, {marginLeft: 8}]}>
            {t.birthdayDescription}
          </Text>
        </View>
      </View>

      <View style={styles.root}>
        <CodeField
          value={value}
          onChangeText={handleInputChange}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View key={index} style={styles.cellRoot}>
              <Text style={styles.cellText}>
                {symbol ||
                  (isFocused ? (
                    <Cursor />
                  ) : index === 0 || index === 1 ? (
                    '0'
                  ) : index === 2 || index === 3 ? (
                    '0'
                  ) : (
                    '0'
                  ))}
              </Text>
              {(index === 1 || index === 3) && (
                <Text style={styles.separator}>{`/`}</Text>
              )}
            </View>
          )}
        />
      </View>

      <View style={styles.iconTextView3}>
        <Image
          source={require('../../assets/1_1.png')}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <Text style={styles.iconText}>{t.abc}</Text>
      </View>

      <View style={{flex: 1}} />

      <View style={styles.ageContainer}>
        <Text style={styles.age}>
          {t.ageLabel} {age !== null ? age : ''}
        </Text>
        <Text style={styles.agetitle}>{t.cannotChangeLabel}</Text>
      </View>

      <TouchableOpacity
        style={styles.roundedButtonWhite}
        onPress={registerGender}>
        <Text style={styles.buttonText}>{t.continueButton}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default RegisterBirthday;
