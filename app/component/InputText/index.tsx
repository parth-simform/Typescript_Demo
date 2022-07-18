/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TextInput, View, TextInputProps} from 'react-native';
import React from 'react';

type textInput = TextInputProps & {
  label: string;
};

const InputText = (props: textInput) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        margin: 16,
      }}>
      <View style={{width: 95, alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
          }}>
          {props.label} :{' '}
        </Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholderTextColor="black"
        keyboardType={props.keyboardType}
        {...props}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  textInput: {
    color: 'black',
    backgroundColor: 'white',
    height: 30,
    width: 250,
    paddingLeft: 10,
    fontWeight: '600',
    borderRadius: 5,
  },
});
