// Import React and Component
import React from 'react';
import {
      View,
      Image,
      Text,
      SafeAreaView,
      StyleSheet,
      TouchableOpacity,
      FlatList,
      ScrollView,
} from 'react-native';

import {colors} from '../../../themes/Colors';
import {units} from '../../../themes/Units';
import AccessCard from '../../components/AccessCards';

const renderAccessCard = ({item}) => (
  <AccessCard
    onPress={() => onClickNavigateDetail(item.title)}
    accessCard={item}
  />
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is the Home Screen
          </Text>
          <FlatList
              data={1}
              renderItem={renderAccessCard}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.listContainer}
            />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  listContainer: {
    paddingVertical: units.height / 50,
  },
  image: {
    borderRadius: 12,
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyContainer: {
    paddingHorizontal: units.width / 14,
    marginTop: units.height / 30,
    marginBottom: units.height / 101,
  },
  title: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '700',
    color: colors.DARK,
    marginTop: units.height / 30,
  },
  optionsContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 14,
    paddingHorizontal: units.width / 23,
    paddingVertical: units.height / 50,
    shadowColor: colors.DARK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: units.width / 21,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: units.height / 45,
  },
  list: {
    backgroundColor: colors.WHITE,
    marginTop: units.height / 40,
  },
  cardContainer: {
    marginTop: units.height / 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '600',
    color: colors.DARK,
  },
  viewButton: {
    color: colors.ORANGE,
    fontSize: 13,
    lineHeight: 13,
    fontWeight: '500',
  },
  listContainer: {
    paddingVertical: units.height / 50,
  },
});