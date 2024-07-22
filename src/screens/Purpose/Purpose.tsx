//import libraries
import React, {FC, useState} from 'react';
import {View, Text} from 'react-native';
import ButtonSecondary from '../../component/Buttons/Secondary';
import ButtonPrimary from '../../component/Buttons/Primary';
import {styles} from './Styles';
// Options type
const Options: Array<string> = ['Celebrity', 'Charity', 'Seller', 'User'];

// Component props and state types
interface PurposeProps {
  navigation: any;
}
type OptionType = (typeof Options)[number];

// Create a component
const Purpose: FC<PurposeProps> = ({navigation}) => {
  const [selected, setSelected] = useState<OptionType | ''>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Which best describes you'}</Text>
      <View style={styles.mainContainer}>
        {Options.map((el, index) => (
          <ButtonSecondary
            key={index}
            title={el}
            selected={selected}
            setSelected={() => setSelected(el)}
          />
        ))}
      </View>
      <View style={styles.flex} />
      <ButtonPrimary
        disabled={selected === ''}
        onPress={() => navigation.navigate('SignUp')}
        title="Continue"
      />
    </View>
  );
};

// Make this component available to the app
export default Purpose;
