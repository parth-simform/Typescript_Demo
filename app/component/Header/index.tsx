/* eslint-disable react-native/no-inline-styles */
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  backImg: ImageSourcePropType;
  profileImg: ImageSourcePropType;
  label: string;
};

// added 'optional' attributes from a type's properties using Mapped Types
type isProps<Type> = {[Property in keyof Type]?: Type[Property]};

const Header = (props: isProps<Props>) => {
  return (
    <View style={styles.header}>
      <Image
        source={props?.backImg ?? require('../../asstes/back.png')}
        resizeMode="contain"
        style={{width: 20, height: 20}}
      />
      <Text style={{fontWeight: '900'}}>{props?.label}</Text>
      <Image
        source={
          props?.profileImg ?? {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png',
          }
        }
        resizeMode="contain"
        style={{width: 25, height: 25}}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    marginHorizontal: 20,
  },
});
