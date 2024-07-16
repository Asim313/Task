import React from 'react';
import { View, Pressable, Image } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const HorizontalContainer = ({
  navigation, 
  initValue, 
  value, 
  visible = true, 
  imageVisible = true, 
  onBackPress,
  backgroundColor = 'transparent'
}) => {
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.horizontalContainer, { backgroundColor }]}>
      {imageVisible && ( 
        <Pressable onPress={handleBackPress} style={[styles.backButton,
          !visible && styles.backButtonMargin]}>
          <View style={styles.imageContainerBack}>
            <Image 
              source={require('../../assets/3.png')}
              style={styles.imageStyleBack}
              resizeMode="contain"
            />
          </View>
        </Pressable>
      )}
      <View style={{ flex: 2.2 }} />
      <View style={styles.circularProgressContainer}>
        {visible && (
          <CircularProgress 
            initialValue={initValue} 
            value={value} 
            progressValueColor={'#FF7ECB'} 
            activeStrokeColor={'#FF7ECB'} 
            inActiveStrokeColor={'#808080'} 
            valueSuffix={'%'}
          />
        )}
      </View>
    </View>
  );
};

const styles = {
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  backButton: {
    // Adjust these styles as needed
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, // Set a specific width
    height: 50, // Set a specific height
  },
  imageContainerBack: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyleBack: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  circularProgressContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginLeft:150,
    transform: [{ scale: 0.45 }],
  },
  backButtonMargin: { // New style for marginTop
    marginTop: 25, // Adjust this value as needed
  },
};

export default HorizontalContainer;
