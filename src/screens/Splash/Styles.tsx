import {StyleSheet} from 'react-native';
import {mvs} from '../../utils/metrices';

// define your styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: mvs(24),
    //alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
  },
  splash1: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  splash2: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  splash3: {
    position: 'absolute',
    bottom: 0,
  },
  title1: {
    fontSize: mvs(22),
    lineHeight: mvs(28),
    marginTop: mvs(18),
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  title2: {
    fontSize: mvs(18),
    lineHeight: mvs(28),
    marginVertical: mvs(18),
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  title3: {
    fontSize: mvs(16),
    lineHeight: mvs(30),
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  desc1: {
    fontSize: mvs(14),
    lineHeight: mvs(22),
    marginTop: mvs(18),
    color: '#000',
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  touchableText: {
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline'
  },
  welcomeBox: {
    height: mvs(291),
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  smallLogo: {
    marginTop: mvs(30),
  },
  descBox: {
    paddingHorizontal: mvs(12),
    paddingVertical: mvs(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000008',
    borderRadius: mvs(6),
  },
  desc2: {
    fontSize: mvs(14),
    lineHeight: mvs(23),
    color: '#00000080',
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: mvs(18),
  },
});
