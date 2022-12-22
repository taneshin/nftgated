
// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Functions</Text>
      <Text style={styles.subtitle}>Innovation Garage </Text>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.image}
      />

      {/* CHECK IF activity indicator is working */}
      <ActivityIndicator
        animating={animating}
        color={colors.WHITE}
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  image: {
    height: '15%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '330',
    color: colors.SC_GREEN,
    marginTop: units.height / 5,
  },
  subtitle: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '700',
    color: colors.SC_BLUE,
    marginTop: units.height / 30,
    marginBottom: units.height / 2,
  },
});