import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from '../utils/styles';
import {useSessionData} from '../component/SessionContext';
import languages from '../utils/translations';
import {mvs} from '../utils/metrices';
import InputNumber from '../component/InputNumber';
import Header from '../component/Header';
import Lock from '../../assets/SVG/lock';

let userToRegister = null;

const RegisterPhone = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const {sessionData} = useSessionData();
  const currentLanguage = sessionData.currentLanguage || 'en';
  const t = languages[currentLanguage];

  useEffect(() => {
    try {
      userToRegister = JSON.parse(sessionData.userToRegister);
    } catch (e) {
      console.error('Parsing error:', e);
    }
  }, [sessionData.userToRegister]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.loginscreen}>
      <Header progress={36} more onBack={() => navigation.goBack()} />

      <View style={{...styles.headerContainer}}>
        <Text style={[styles.textLeftAlign, {marginLeft: 8}]}>
          {t.phoneNumberLabel}
        </Text>
      </View>

      <View style={_styles.root1}>
        <InputNumber
          value={phone}
          onChangeText={setPhone}
          placeholder="123456789"
        />
      </View>
      <Text style={styles.otpInfo}>{t.sendCodeText}</Text>

      <View style={{flex: 1}} />

      <View style={styles.securityInfoContainer}>
        <Lock />
        <Text style={styles.securityInfo}>{t.securityIconText}</Text>
      </View>
      <TouchableOpacity
        style={styles.roundedButtonWhite}
        onPress={() => Alert.alert('Not implemented yet')}>
        <Text style={styles.buttonText}>{t.continueButton}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default RegisterPhone;

const _styles = StyleSheet.create({
  root1: {
    height: mvs(66),
    width: '92%',
    alignItems: 'center',
    alignSelf: 'center',
  },
});