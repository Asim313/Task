import {StyleSheet} from 'react-native';
import {mvs} from '../../utils/metrices';

// define your styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: mvs(24),
    paddingVertical: mvs(27),
  },
  mainContainer: {
    marginTop: mvs(32),
  },
  close: {
    marginTop: mvs(27),
  },
  agreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: mvs(40),
    gap: mvs(15),
  },
  agreeText: {
    fontSize: mvs(14),
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  agreeCheck: {
    width: mvs(21),
    height: mvs(21),
    borderColor: '#34DAFF',
    borderWidth: 2,
    borderRadius: mvs(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  agreeCheckMark: {},
  checked: {
    backgroundColor: '#34DAFF',
  },
});
