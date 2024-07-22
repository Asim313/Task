// import libraries
import React, {FC, useCallback, useEffect, useMemo, useRef} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Logo from '../../../assets/svgs/logo';
import Splash1 from '../../../assets/svgs/splash1';
import Splash2 from '../../../assets/svgs/splash2';
import Splash3 from '../../../assets/svgs/splash';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {mvs} from '../../utils/metrices';
import {styles} from './Styles';
import LogoSmall from '../../../assets/svgs/logoSmall';
import ButtonPrimary from '../../component/Buttons/Primary';

interface SplashProps {
  navigation: any;
}

// Create a component
const Splash: FC<SplashProps> = ({navigation}) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // variables
  const snapPoints = useMemo(
    () => [Platform.OS == 'ios' ? '40%' : '36%', '100%'],
    [],
  );

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef?.current?.present();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      handlePresentModalPress();
    }, 1000); // Replace with your desired delay time in milliseconds
  }, [handlePresentModalPress]);

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} height={mvs(190)} width={mvs(160)} />
      <Splash1 style={styles.splash1} />
      <Splash2 style={styles.splash2} />
      <Splash3 style={styles.splash3} />
      <View style={styles.mainContainer}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          onChange={handleSheetChanges}>
          <BottomSheetScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: mvs(50)}}
            style={styles.contentContainer}>
            <View style={styles.welcomeBox}>
              <LogoSmall style={styles.smallLogo} />
              <Text style={styles.title1}>{'Welcome to iimiin!'}</Text>
              <Text style={styles.desc1}>
                Before you join our community and start exploring live auctions,
                it’s important that you read and agree to our{' '}
                <Text
                  onPress={() => bottomSheetModalRef?.current?.snapToIndex(1)}
                  style={styles.touchableText}>
                  Terms of Agreement
                </Text>{' '}
                and Disclaimer below:
              </Text>
            </View>

            <Text style={styles.title2}>{'Eligibility'}</Text>

            <View style={styles.descBox}>
              <Text style={styles.desc2}>{des1}</Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.title2}>{'User Agreement'}</Text>

            <View style={styles.descBox}>
              <Text style={styles.title3}>Account Creation</Text>
              <Text style={styles.desc2}>{des2}</Text>
            </View>

            <View style={{...styles.descBox, marginTop: mvs(8)}}>
              <Text style={styles.title3}>Use of Service</Text>
              <Text style={styles.desc2}>{des3}</Text>
            </View>

            <View style={{...styles.descBox, marginTop: mvs(8)}}>
              <Text style={styles.title3}>Content and Conduct</Text>
              <Text style={styles.desc2}>{des4}</Text>
            </View>

            <View style={{...styles.descBox, marginTop: mvs(8)}}>
              <Text style={styles.title3}>Purchases and Payments</Text>
              <Text style={styles.desc2}>{des5}</Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.title2}>{'Limitation of Liability:'}</Text>

            <View style={styles.descBox}>
              <Text style={styles.desc2}>{des6}</Text>
            </View>

            <ButtonPrimary
              onPress={() => {
                bottomSheetModalRef?.current?.close();
                navigation.navigate('Purpose');
              }}
              mt={mvs(26)}
              title={'Sign up'}
              disabled={false}
            />
          </BottomSheetScrollView>
        </BottomSheetModal>
      </View>
    </View>
  );
};

// Make this component available to the app
export default Splash;

const des1 = `Users of all ages are welcome to enter and view live auctions on iimiin. However, you must be 18 years or older to make any purchases within the app. If you are under the age of 18 and wish to make a purchase, you must have explicit consent from your parent or legal guardian. By proceeding with any transaction, you affirm that you have received such consent`;
const des2 = `By creating an account, you agree to provide accurate and current information about yourself as requested. It is your responsibility to maintain the confidentiality of your account and password.`;
const des3 = `You agree to use iimiin’s services for lawful purposes only and in accordance with these terms.`;
const des4 = `You agree not to post or transmit any unlawful, threatening, abusive, libelous, defamatory, obscene, or otherwise objectionable material. You are solely responsible for the content you share.`;
const des5 = `By making a purchase on iimiin, you agree to be bound by the terms of sale, including but not limited to, any age restrictions for certain items, and the completion of all transactions through the approved payment methods.`;
const des6 = `iimiin and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service; any conduct or content of any third party on the service; any content obtained from the service; and unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.By creating an account and using iimiin, you acknowledge that you have read, understood, and agreed to be bound by these terms. Your access to and use of the service is conditioned on your acceptance of and compliance with these terms.Thank you for being a part of iimiin. Let’s create a respectful and engaging community together! iimiin reserves the right to modify, suspend, or discontinue any part of the service at any time, with or without notice`;
