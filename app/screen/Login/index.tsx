import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {data} from '../../utils/data';
import InputText from '../../component/InputText';
import {emailreg} from '../../utils/ValidationServices';
import {useNavigation} from '@react-navigation/native';
import {NavigationDataType} from '../../utils/type';
import {styles} from './style';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation: NavigationDataType = useNavigation();

  const onLogin = () => {
    if (emailreg.test(email) === true && password !== '') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Please fill valid data');
    }
  };

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Image
        source={{
          uri: data[1],
        }}
        style={[StyleSheet.absoluteFill, styles.img]}
      />
      <View style={styles.formContainer}>
        <InputText
          placeholder={'Email'}
          onChangeText={e => setEmail(e)}
          value={email}
          keyboardType="email-address"
          label={'Email'}
        />
        <InputText
          // placeholder={'Password'}
          onChangeText={e => setPassword(e)}
          value={password}
          secureTextEntry
          keyboardType="number-pad"
          label={'Password'}
        />
        <TouchableOpacity onPress={() => onLogin()} style={styles.btn}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
