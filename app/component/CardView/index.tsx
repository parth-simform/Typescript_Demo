import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getApidata} from '../../redux/reduxTypes';

const CardView = (props: getApidata) => {
  return (
    <View style={styles.card}>
      <View style={styles.subcard}>
        <View>
          <Text style={styles.text}>brand: {props?.brand}</Text>
          <Text style={styles.text}>Model: {props?.title}</Text>
          <Text style={styles.text}>category: {props?.category}</Text>
        </View>
        <Image
          source={{uri: props?.thumbnail}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default memo(CardView);

const styles = StyleSheet.create({
  card: {
    padding: 5,
    borderWidth: 0.5,
    margin: 5,
    borderRadius: 5,
  },
  subcard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginVertical: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
});
