import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import type {WithoutImgProps} from './type';
const {height} = Dimensions.get('screen');

const DefaultMode = (props: WithoutImgProps) => {
  return (
    <View style={[styles.container, props?.BackgroundStyle]}>
      {props.children}
    </View>
  );
};

export default DefaultMode;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    padding: 10,
    height: height / 1.1,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: '#f7f4f0',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
});
