import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from '../../api/ApiHandler';

const SessionDataContext = createContext({
  sessionData: {},
  updateSessionData: () => {},
  clearSessionData: () => {},
});

export const useSessionData = () => useContext(SessionDataContext);

export const SessionDataProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState({ currentLanguage: 'de' });
  const [isLoading, setIsLoading] = useState(true);
  const useMockedData = true;

  useEffect(() => {
    const loadSessionData = async () => {
      setIsLoading(true);
      try {
        let data;
        if (useMockedData) {
          const storedData = await AsyncStorage.getItem('sessionData');
          data = storedData ? JSON.parse(storedData) : { currentLanguage: 'de', user: 'Mock User' };
          if (!storedData) await AsyncStorage.setItem('sessionData', JSON.stringify(data));
        } else {
          data = await get('/sessionData');
        }
        setSessionData(data || {});
      } catch (error) {
        console.error('Error loading session data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSessionData();
  }, []);

  const updateSessionData = useCallback(async (newData) => {
    try {
      const mergedData = { ...sessionData, ...newData };
      setSessionData(mergedData);
      await AsyncStorage.setItem('sessionData', JSON.stringify(mergedData));
    } catch (error) {
      console.error('Error updating session data:', error);
    }
  }, [sessionData]);

  const clearSessionData = useCallback(async () => {
    try {
      await AsyncStorage.clear();
      setSessionData({});
    } catch (error) {
      console.error('Error clearing session data:', error);
    }
  }, []);

  return (
    <SessionDataContext.Provider value={{ sessionData, updateSessionData, clearSessionData }}>
      {children}
    </SessionDataContext.Provider>
  );
};