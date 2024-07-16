import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mvs} from '../../utils/metrices';
import Coin from '../../../assets/SVG/coin';
import ButtonPrimary from '../ButtonPrimary';

type Props = {
  title?: string;
  bonus?: number;
  task: boolean;
  claimed: boolean;
  buttonTitle?: string;
};

const Card: FC<Props> = ({
  title = '',
  bonus = 20,
  task,
  claimed,
  buttonTitle = 'Get',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Coin height={mvs(28)} width={mvs(28)} />
        <View style={{justifyContent: 'space-between', height: '100%'}}>
          {title !== '' && <Text style={styles.title}>{title}</Text>}
          <Text
            style={{
              ...styles.bonus,
              ...(title == '' && styles.bonusOnly),
            }}>{`+ ${bonus} Bonus`}</Text>
        </View>
      </View>
      <ButtonPrimary cardButton title={buttonTitle} task={task} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: mvs(60),
    backgroundColor: '#2E3138',
    borderRadius: mvs(12),
    marginTop: mvs(11),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: mvs(16),
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: mvs(16),
  },
  title: {
    fontSize: mvs(13),
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
    lineHeight: mvs(19.5),
  },
  bonus: {
    fontSize: mvs(12),
    fontFamily: 'Poppins-Regular',
    color: '#FF6BC5',
    lineHeight: mvs(18),
  },
  bonusOnly: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: mvs(14),
    lineHeight: mvs(21),
  },
});
