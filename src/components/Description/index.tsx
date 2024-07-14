import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mvs} from '../../utils/metrices';

type Props = {};

const Description: FC<Props> = ({}) => {
  return (
    <View style={{marginTop: mvs(46), paddingHorizontal: mvs(6)}}>
      <Text style={styles.title}>{'Description'}</Text>
      {[
        'All interpretation rights of Bonus belong to Pixllove',
        'Bonus can only be used for depixelation or livechat, valid for 10 days, and will be automatically expired and liquidated after expiration.',
        `For 100 bonus coins, you get 1 depixelation and 3 live chats`,
        `The daily limit will be used first when going live. After that, bonus coins will be used. If there are not enough bonus coins, the balance will be used automatically.`,
        `The sign-in refreshes every evening at 0 am(UTC+1)`,
      ].map((el, index) => (
        <Text style={styles.desc}>{`${index + 1}. ${el}`}</Text>
      ))}
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  title: {
    fontSize: mvs(14),
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    lineHeight: mvs(21),
  },
  desc: {
    marginTop: mvs(6),
    fontSize: mvs(10),
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    lineHeight: mvs(15),
  },
  bonus: {
    fontSize: mvs(12),
    fontFamily: 'Poppins-Regular',
    color: '#FF8AD2',
    lineHeight: mvs(18),
  },
});
