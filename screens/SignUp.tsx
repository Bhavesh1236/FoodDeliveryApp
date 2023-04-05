import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <Text style={[styles.welcome, styles.nextTypo]}>Welcome!</Text>
      <Text style={[styles.signUpOr, styles.signTypo]}>
        Sign up or Login to your Account
      </Text>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.loginWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </View>
        <View style={[styles.signUpWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.signUp1, styles.nextClr]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[styles.enterYourNameWrapper, styles.enterWrapperSpaceBlock]}
      >
        <Text style={[styles.enterYourName, styles.textTypo]}>
          Enter your Name
        </Text>
      </View>
      <View style={[styles.countryCodeParent, styles.enterWrapperSpaceBlock]}>
        <View style={styles.parentFlexBox}>
          <Text style={styles.textTypo}>+1</Text>
          <Image
            style={styles.vuesaxlineararrowDownIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowdown.png")}
          />
        </View>
        <Image
          style={styles.seperatorIcon}
          resizeMode="cover"
          source={require("../assets/seperator.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>000 000 0000</Text>
      </View>
      <Text style={[styles.fullName, styles.fullNameTypo]}>Full Name</Text>
      <Text style={[styles.phoneNumber, styles.fullNameTypo]}>
        Phone Number
      </Text>
      <Image
        style={[styles.signUpChild, styles.signPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-769.png")}
      />
      <Image
        style={[styles.signUpItem, styles.signPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-770.png")}
      />
      <Image
        style={[styles.signUpInner, styles.signPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-769.png")}
      />
      <View style={[styles.orSignUpUsingParent, styles.frameViewFlexBox]}>
        <Text style={styles.signTypo}>Or Sign Up Using:</Text>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-41.png")}
        />
      </View>
      <Image
        style={[styles.googleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/google.png")}
      />
      <Image
        style={[styles.appleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/apple.png")}
      />
      <Image
        style={[styles.layerX00201Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/layer-x0020-1.png")}
      />
      <View
        style={[styles.enterYourPasswordWrapper, styles.enterWrapperSpaceBlock]}
      >
        <Text style={[styles.enterYourName, styles.textTypo]}>
          Enter your Password
        </Text>
      </View>
      <Text style={[styles.createPassword, styles.fullNameTypo]}>
        Create Password
      </Text>
      <View style={[styles.frameView, styles.frameViewFlexBox]}>
        <View style={[styles.nextParent, styles.parentFlexBox]}>
          <Text style={[styles.next, styles.nextClr]}>Next</Text>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright2.png")}
          />
        </View>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition1]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.parentFlexBox]}>
          <Image
            style={styles.networkSignalLight}
            resizeMode="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={styles.wifiSignalLight}
            resizeMode="cover"
            source={require("../assets/wifi-signal--light.png")}
          />
          <Image
            style={styles.batteryLight}
            resizeMode="cover"
            source={require("../assets/battery--light.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          resizeMode="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={styles.timeLight}
          resizeMode="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.basePosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextTypo: {
    textAlign: "left",
    fontWeight: "500",
  },
  signTypo: {
    color: Color.dark80,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_71xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loginTypo: {
    textAlign: "center",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
  },
  nextClr: {
    color: Color.light100,
    fontFamily: FontFamily.button,
  },
  enterWrapperSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    backgroundColor: Color.light80,
    borderRadius: Border.br_sm,
    width: 348,
    alignItems: "center",
    flexDirection: "row",
    left: 21,
    position: "absolute",
  },
  textTypo: {
    color: Color.dark60,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  fullNameTypo: {
    width: 170,
    left: 34,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  signPosition: {
    height: 71,
    top: 605,
    position: "absolute",
  },
  frameViewFlexBox: {
    width: 348,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  notchIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  basePosition1: {
    left: 0,
    right: 0,
    top: 0,
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  welcome: {
    top: 50,
    fontSize: FontSize.heading4_size,
    letterSpacing: -0.7,
    lineHeight: 46,
    color: Color.dark100,
    textAlign: "left",
    fontFamily: FontFamily.button,
    fontWeight: "500",
    left: 21,
    position: "absolute",
  },
  signUpOr: {
    top: 93,
    width: 246,
    left: 21,
    position: "absolute",
  },
  login: {
    color: Color.pink100,
    fontFamily: FontFamily.button,
    textAlign: "center",
  },
  loginWrapper: {
    flex: 1,
  },
  signUp1: {
    textAlign: "center",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
  },
  signUpWrapper: {
    backgroundColor: Color.pink100,
    width: 177,
    marginLeft: 10,
  },
  frameParent: {
    top: 137,
    left: 16,
    borderRadius: Border.br_211xl,
    backgroundColor: Color.pink,
    width: 358,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_smi,
    paddingBottom: Padding.p_3xs,
    justifyContent: "center",
    position: "absolute",
  },
  enterYourName: {
    flex: 1,
  },
  enterYourNameWrapper: {
    top: 253,
  },
  vuesaxlineararrowDownIcon: {
    width: 22,
    height: 22,
    marginLeft: 4,
  },
  seperatorIcon: {
    width: 1,
    height: 25,
    marginLeft: 10,
  },
  text1: {
    marginLeft: 10,
  },
  countryCodeParent: {
    top: 359,
  },
  fullName: {
    top: 224,
  },
  phoneNumber: {
    top: 330,
  },
  signUpChild: {
    width: 71,
    height: 71,
    top: 605,
    left: 21,
  },
  signUpItem: {
    left: 112,
    width: 70,
    height: 71,
    top: 605,
  },
  signUpInner: {
    left: 202,
    width: 71,
    height: 71,
    top: 605,
  },
  frameChild: {
    height: 1,
    marginLeft: 16,
    flex: 1,
  },
  orSignUpUsingParent: {
    top: 554,
    left: 21,
  },
  googleIcon: {
    height: "3.7%",
    width: "7.83%",
    top: "74.06%",
    right: "81.64%",
    bottom: "22.25%",
    left: "10.52%",
  },
  appleIcon: {
    height: "4.34%",
    width: "7.65%",
    top: "73.49%",
    right: "58.57%",
    bottom: "22.16%",
    left: "33.78%",
  },
  layerX00201Icon: {
    height: "4.3%",
    width: "9.3%",
    top: "73.72%",
    right: "34.41%",
    bottom: "21.98%",
    left: "56.29%",
  },
  enterYourPasswordWrapper: {
    top: 466,
  },
  createPassword: {
    top: 437,
  },
  next: {
    fontSize: FontSize.button_size,
    lineHeight: 18,
    textAlign: "left",
    fontWeight: "500",
    color: Color.light100,
  },
  vuesaxlineararrowRightIcon: {
    width: 24,
    height: 24,
    marginLeft: 2,
  },
  nextParent: {
    justifyContent: "center",
  },
  frameView: {
    marginLeft: -174,
    bottom: 30,
    left: "50%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.blue60,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
  },
  notchIcon: {
    height: 30,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
    height: 14,
    marginLeft: 4,
  },
  batteryLight: {
    width: 25,
    height: 14,
    marginLeft: 4,
  },
  statusIcons: {
    top: 16,
    right: 14,
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
    top: 0,
    left: 7,
    right: 8,
    position: "absolute",
  },
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorLightPrimary,
    left: 0,
    right: 0,
    top: 0,
  },
  bar: {
    right: 121,
    bottom: 8,
    left: 120,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    height: 34,
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  signUp: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default SignUp;
