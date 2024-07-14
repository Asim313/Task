import { StyleSheet } from "react-native";
import { AppColors } from "../../utils";
import {height, width} from '../../utils/dimensions';
import { mvs } from "../../utils/metrices";

const styles = StyleSheet.create({
  mainContainer: {
    //backgroundColor: '#00000050',
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    paddingHorizontal: mvs(15),
  },
  back: {
    marginTop: mvs(58), 
    marginBottom: mvs(10)
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: mvs(17),
    lineHeight: mvs(25.5),
  },
  bonus: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: mvs(19),
    lineHeight: mvs(28.5),
  },
  innerContainer: {
    width: '100%',
    minHeight: mvs(500),
    backgroundColor: '#1E1E1E',
    borderRadius: mvs(15),
    marginTop: mvs(53),
    paddingHorizontal: mvs(12),
    paddingVertical: mvs(18),
  }
});
export default styles;
