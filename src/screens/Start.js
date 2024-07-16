import React, {useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';
import {useSessionData} from '../component/SessionContext';
import {User} from '../../model/User';
import {Settings} from '../../model/Settings';
import {styles} from '../utils/styles';
import languages from '../utils/translations';
import Header from '../component/Header';

const Start = ({navigation}) => {
  const {sessionData, updateSessionData, clearSessionData} = useSessionData();
  const currentLanguage = sessionData.currentLanguage || 'en';
  const t = languages[currentLanguage];

  const goToRegister = () => {
    const userToRegister = new User('Max Mustermann', 'test@test.de', '', '');
    userToRegister.setting = new Settings('', sessionData, updateSessionData);
    
    updateSessionData({
      pageContext: 'RegisterBirthday',
      userToRegister: JSON.stringify(userToRegister),
      userOriginal: userToRegister,
      favorites: '',
      testUserArray: [],
    });
  
    navigation.navigate('RegisterBirthday');
  };
  

  const goToLogin = () => {
    Alert.alert('Not implemented yet');
  };

  const loginEmail = () => {
    Alert.alert('Not implemented yet');
  };

  return (
    <View style={styles.loginscreen}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.bigTextContainerNew}>
          <Text style={[styles.bigTextNew]}>{t.bigText}</Text>
        </View>

        <View style={styles.bigTextContainer}>
          <Text style={styles.terms}>{t.termsAndPrivacyText}</Text>
        </View>

        <TouchableOpacity
          style={styles.roundedButtonWhiteStretch}
          onPress={goToRegister}>
          <Text style={styles.buttonText}>{t.accountBtn}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundedButtonNew} onPress={goToLogin}>
          <Text style={styles.buttonPinkText}>{t.LoginBtn}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={loginEmail}>
          <Text style={styles.loginIssue}>{t.loginIssuesText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Start;
