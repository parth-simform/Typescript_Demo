import React from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';
import {data} from '../../utils/data';
import {DefaultProps} from './type';
const {height} = Dimensions.get('screen');
const WithImage = (props: DefaultProps) => {
  return (
    <View style={[styles.container, props?.BackgroundStyle]}>
      <Image
        source={props?.imageURL ?? {uri: data[2]}}
        resizeMode="cover"
        style={[styles.bg, props?.imageStyle]}
      />
      {props?.children}
    </View>
  );
};

export default WithImage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 1.1,
  },
  bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 15,
    right: 0,
    resizeMode: 'cover',
    height: height / 1.1,
    width: '90%',
    borderRadius: 10,
  },
});
