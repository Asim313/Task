import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mvs} from '../../utils/metrices';

type Props = {
  mt?: number;
  title?: string;
  desc?: string;
  bonus?: number;
};

const Heading: FC<Props> = ({title = 'Title', desc = 'Description...', mt = mvs(0), bonus = -1}) => {
  return (
    <View style={{marginTop: mt}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>
        {desc}
        {bonus != -1 && <Text style={styles.bonus}>{` + ${bonus} Bonus`}</Text>}
      </Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  title: {
    fontSize: mvs(17),
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    lineHeight: mvs(25.5),
  },
  desc: {
    fontSize: mvs(12),
    fontFamily: 'Poppins-Regular',
    color: '#8d8d8d',
    lineHeight: mvs(18),
  },
  bonus: {
    fontSize: mvs(12),
    fontFamily: 'Poppins-Regular',
    color: '#FF8AD2',
    lineHeight: mvs(18),
  },
});