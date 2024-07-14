import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Alert,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from './styles';
import TaskBackground from '../../../assets/SVG/taskBackgroung';
import Back from '../../../assets/SVG/back';
import {mvs} from '../../utils/metrices';
import Heading from '../../components/Title';
import DailyReward from '../../components/DailyReward';
import ButtonPrimary from '../../components/ButtonPrimary';
import Card from '../../components/Card';
import Description from '../../components/Description';

interface TaskProps {
  navigation: any;
}

// Define the tasks array with task details
const tasks = [
  {
    title: 'Get reward notifications',
    bonus: 20,
    status: 'Get',
    collected: false,
  },
  {title: 'Get reward sharing', bonus: 20, status: 'Get', collected: false},
  {title: 'Get reward review', bonus: 100, status: 'Get', collected: false},
  {title: 'Complete your profile', bonus: 50, status: 'Get', collected: false},
  {title: 'Complete Book of Love', bonus: 50, status: 'Get', collected: false},
  {title: 'Follow us on Instagram', bonus: 50, status: 'Get', collected: false},
  {title: 'Follow us on Tik Tok', bonus: 50, status: 'Get', collected: false},
  {title: 'Confirm email', bonus: 5, status: 'Get', collected: false},
];

// Define the Ads array with ad details
const Ads = [
  {title: 'Watch Ad 1', bonus: 5, status: 'Watch', watched: false},
  {title: 'Watch Ad 2', bonus: 5, status: 'Watch', watched: false},
  {title: 'Watch Ad 3', bonus: 10, status: 'Watch', watched: false},
  {title: 'Watch Ad 4', bonus: 10, status: 'Watch', watched: true},
  {title: 'Watch Ad 5', bonus: 15, status: 'Watch', watched: true},
  {title: 'Watch Ad 6', bonus: 15, status: 'Watch', watched: true},
];

// Define the dailyReward array with daily reward values
const dailyReward = [20, 20, 25, 25, 30, 30, 30];

export default function Task({navigation}: TaskProps): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <TaskBackground width={'100%'} style={{zIndex: -1}} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: mvs(100)}}
        style={styles.mainContainer}>
        <Back style={styles.back} />
        <Text style={styles.title}>Your Bonus:</Text>
        <Text style={styles.bonus}>20</Text>

        <View style={styles.innerContainer}>
          <Heading
            mt={0}
            title="Daily Check-in"
            desc="Earn rewards for check-in"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: mvs(16),
            }}>
            {dailyReward.map((el, index) => (
              <DailyReward key={index} index={index} reward={el} today={0} />
            ))}
          </View>
          <ButtonPrimary
            title={'Get Daily Bonus'}
            task={false}
            cardButton={false}
          />
          <Heading
            mt={mvs(18)}
            title="Task for Beginners"
            desc="Only one chance"
          />
          {tasks.map((el, index) => (
            <Card
              key={index}
              title={el?.title}
              bonus={el?.bonus}
              claimed
              buttonTitle="Get"
              task={false}
            />
          ))}
          <Heading
            bonus={20}
            mt={mvs(18)}
            title="Watch Ads, Earn Bonus"
            desc="Watch all Ads, get extra rewards"
          />
          {Ads.map((el, index) => (
            <Card
              key={index}
              title={''}
              bonus={el?.bonus}
              buttonTitle="Watch"
              claimed
              task={el?.watched}
            />
          ))}
        </View>
        <Description />
      </ScrollView>
    </View>
  );
}
