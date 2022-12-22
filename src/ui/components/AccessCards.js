import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const AccessCard = ({onPress, accessCard}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>Digital Access</Text>
        </View>
        <Image
          // source={{uri: accessCard.image}}
          source={require('../../assets/placeholder.png')} //Placeholder
          style={styles.image}
        />
        <View style={styles.bodyContainer}>\
          <Text style={styles.employeeName}>E-shin</Text>
          <Text style={styles.employeeId}>1667101</Text>
          <Text style={styles.employeeTitle}>Analyst</Text>
          {/* <Text style={styles.employeeName}>{accessCard.employeeName}</Text>
          <Text style={styles.employeeId}>{accessCard.employeeId}</Text>
          <Text style={styles.employeeTitle}>{accessCard.employeeTitle}</Text> */}
          <Image
            // source={{uri: employeeTitle.barcode}}
            source={require('../../assets/placeholder.png')} //Placeholder
            style={styles.barcode}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AccessCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.WHITE,
    shadowColor: colors.DARK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
    marginHorizontal: units.width / 46,
  },
  employeeName: {
    color: colors.DARK,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '600',
  },
  employeeId: {
    color: colors.DARK,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '600',
  },
  employeeTitle: {
    color: colors.DARK,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '600',
  },
  logo: {
    marginTop: units.height / 67,
    marginLeft: units.width / 31,
  },
  bodyContainer: {
    marginTop: units.height / 67,
    marginLeft: units.width / 31,
  },
  cardHeader: {
    marginTop: units.height / 67,
    marginLeft: units.width / 31,
  },
  logoImage: {
    height: units.height / 6,
  },
  image: {
    height: units.height / 6,
  },
  barcode: {
    height: units.height / 6,
  },
});