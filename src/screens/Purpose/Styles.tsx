import {StyleSheet} from 'react-native';
import {mvs} from '../../utils/metrices';

// define your styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: mvs(24),
    paddingVertical: mvs(27),
    backgroundColor: '#000',
  },
  title: {
    fontSize: mvs(27),
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    lineHeight: mvs(34),
    marginTop: mvs(78),
  },
  mainContainer: {
    marginTop: mvs(20),
  },
  flex: {
    flex: 1,
  },
});
