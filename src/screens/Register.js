import React, { useLayoutEffect } from "react";
import {
	Text,
	SafeAreaView,
	View,
	Platform,
	TouchableOpacity,
	Image, Alert
} from "react-native";
import { styles } from "../utils/styles";
import HorizontalContainer from '../component/HorizontalContainer';
import languages from "../utils/translations";
import { useSessionData } from '../component/SessionContext';
import {User} from '../../model/User';
import {Settings} from '../../model/Settings';


const Register = ({ navigation }) => {
  const { sessionData, updateSessionData,clearSessionData } = useSessionData();
     
  const currentLanguage = sessionData.currentLanguage || 'en';

  const t = languages[currentLanguage];
	const registerAppleId = () => {

		Alert.alert("Not implemented yet");
    };



	const handleLogin = async () => {

		clearSessionData();
		let userToRegister = new User("", "", "", "");
		let settingsToUser = new Settings("",sessionData, updateSessionData );
		userToRegister.setting = settingsToUser;
		let stringifyUser = JSON.stringify(userToRegister);
		updateSessionData({ pageContext: "RegisterBirthday", userToRegister:stringifyUser, userOriginal:userToRegister,favorites:"", testUserArray:[] });
		navigation.navigate("RegisterBirthday", { showExtraText: true }); 
	  };

	  const loginEmail = () => {
		Alert.alert("Not implemented yet");
	  };
	  

	return (
		<SafeAreaView style={styles.loginscreen}>
			<View style={styles.fixedHeader}>
          
                <Image source={require('../../assets/Logo.png')} style={styles.logoStyle} />
            </View>
			<View style={styles.contentContainer}>
            <HorizontalContainer navigation={navigation} visible={false} />
			
			<View style={styles.bigTextContainer}>
			<Text style={styles.bigTextNew}>{t.bigText2}</Text>
		</View>
		
		<View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 10 }}>
		<View style={styles.bigTextContainer}>
			<Text style={{color:'white', textAlign: 'center'}}>
              {t.termsAndPrivacyText}
              </Text>
              </View> 
			{Platform.OS === 'ios' ? (
        	<TouchableOpacity style={styles.roundedButtonIcon} onPress={registerAppleId}>
			<Image source={require('../../assets/apple-logo.png')} style={styles.iconStyle} />
			<Text>
			{t.appleLoginButton}
			</Text>
		</TouchableOpacity>
      ) : (
		<TouchableOpacity style={styles.roundedButtonIcon} onPress={registerAppleId}>
    <Image source={require('../../assets/google-pink.png')} style={styles.iconStyle} />
    <Text style={styles.buttonTextPink}>
	{t.googleLoginButton}
    </Text>
</TouchableOpacity>
      )}
       	<TouchableOpacity style={styles.roundedButtonIcon} onPress={handleLogin}>
    <Image source={require('../../assets/sprechblase3.png')} style={styles.iconStyle} />
    <Text style={styles.buttonTextPink}>
	{t.phoneLoginButton}
    </Text>
</TouchableOpacity>
</View>
	<TouchableOpacity onPress={loginEmail}>
	<Text style={{ color: 'white', textAlign: 'center' }}>
		{t.loginIssuesText}
	</Text>
	</TouchableOpacity>

	
		  </View>
		</SafeAreaView>
	);
};


export default Register;

