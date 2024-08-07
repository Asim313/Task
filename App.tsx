import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRingerMode, RINGER_MODE } from 'react-native-ringer-mode';
import BackgroundFetch from 'react-native-background-fetch';

const App = () => {
  const { setMode } = useRingerMode();

  useEffect(() => {
    const configureBackgroundFetch = () => {
      BackgroundFetch.configure(
        {
          minimumFetchInterval: 1, // minutes
          stopOnTerminate: false,
          startOnBoot: true,
          enableHeadless: true,
          requiredNetworkType: BackgroundFetch.NETWORK_TYPE_NONE, // Default
          requiresCharging: false, // Default
          requiresDeviceIdle: false, // Default
          requiresBatteryNotLow: false, // Default
          requiresStorageNotLow: false, // Default
        },
        async (taskId) => {
          const now = new Date();
          const currentHour = now.getHours();
          const currentMinute = now.getMinutes();

          console.log(currentHour, currentMinute)
          
          if (currentHour == 1 && currentMinute === 7) {
            // Set to silent mode at 10 PM
            await setMode(RINGER_MODE.silent);
          } else if (currentHour == 1 && currentMinute === 8) {
            // Set to normal mode at 6 AM
            await setMode(RINGER_MODE.normal);
          }

          BackgroundFetch.finish(taskId);
        },
        (error) => {
          console.log('BackgroundFetch failed to start', error);
        }
      );

      // Optional: Schedule a background-fetch event every 15 minutes
      BackgroundFetch.scheduleTask({
        taskId: 'com.myapp.silent_unsilent_mode',
        delay: 15 * 60 * 1000, // milliseconds
        periodic: true,
        forceAlarmManager: true,
        stopOnTerminate: false,
        enableHeadless: true,
      });
    };

    configureBackgroundFetch();

    return () => {
      BackgroundFetch.stop();
    };
  }, [setMode]);

  return (
    <View>
      <Text>Scheduling Silent and Unsilent Modes</Text>
    </View>
  );
};

export default App;
