import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {COLORS, IMAGES, ROUTES} from '../../../constants';
import TextInputTemplate from '../../../components/templates/TextInputTemplate';
import AppButton from '../../../components/atoms/buttons/AppButtons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';

const Login = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.headerStyle}>
          <Image
            resizeMode="contain"
            source={IMAGES.eclipse_1}
            style={styles.eclipseOneStyle}
          />
          <Image
            resizeMode="contain"
            source={IMAGES.eclipse_2}
            style={styles.eclipseTwoStyle}
          />
        </View>
        <View style={styles.viewTitleStyle}>
          <Text style={styles.hrmsTitle}>HRMS</Text>
          <Text style={styles.hrmsSubTitle}>
            Human Resource Management System
          </Text>
        </View>
        <View style={styles.logoStyle}>
          <Image source={IMAGES.santophy} style={styles.santophyLogo} />
        </View>

        <View style={styles.loginContainer}>
          <View style={styles.loginStyle}>
            <Text style={styles.hrmsLoginTitle}>Sign in</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInputTemplate
              label={'Username'}
              placeholder={'Please enter username'}
              style={{fontSize: scale(12)}}
            />
          </View>
          <View style={styles.pwdContainer}>
            <TextInputTemplate
              secureTextEntry={true}
              label={'Password'}
              placeholder={'Please enter password'}
              style={{fontSize: scale(12)}}
            />
            <TouchableOpacity style={styles.forgetPwdStyle}>
              <Text style={styles.pwdStyle}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <AppButton
              btnStyle={{backgroundColor: COLORS.PURPLE, color: COLORS.WHITE}}
              btnTextStyle={{color: COLORS.WHITE}}
              btnText={'Login'}
              onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};

export default Login;
