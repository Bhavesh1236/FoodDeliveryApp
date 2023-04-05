import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PhoneVerification = () => {
  return (
    <View style={styles.phoneVerification}>
      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
        <Text style={styles.text}>+1 169 916 9564</Text>
      </View>
      <View style={styles.vuesaxboldedit2Wrapper}>
        <Image
          style={styles.vuesaxboldedit2Icon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldedit2.png")}
        />
      </View>
      <View style={[styles.phoneVerificationChild, styles.phoneChildLayout]} />
      <View style={[styles.phoneVerificationItem, styles.phoneLayout]} />
      <View style={[styles.phoneVerificationInner, styles.phoneChildLayout]} />
      <View style={[styles.rectangleView, styles.phoneChildLayout]} />
      <View style={[styles.phoneVerificationChild1, styles.phoneLayout]} />
      <View style={[styles.phoneVerificationChild2, styles.phoneChildLayout]} />
      <Text
        style={[styles.didntReceiveCodeContainer, styles.frameViewPosition]}
      >
        <Text style={styles.didntReceiveCode}>{`Didn’t Receive Code? `}</Text>
        <Text style={styles.getANew}>Get a New one</Text>
      </Text>
      <View style={[styles.keyboard, styles.keyboardLayout]}>
        <View style={styles.homeIndicator}>
          <View style={[styles.homeIndicator1, styles.frameViewPosition]} />
        </View>
        <View style={styles.keys}>
          <Image
            style={styles.deleteIcon}
            resizeMode="cover"
            source={require("../assets/delete.png")}
          />
          <View style={[styles.view, styles.viewPosition5]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background.png")}
            />
            <Text style={[styles.number, styles.numberPosition]}>0</Text>
          </View>
          <View style={[styles.view1, styles.viewPosition3]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background1.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>WXYZ</Text>
            <Text style={[styles.number1, styles.numberPosition]}>9</Text>
          </View>
          <View style={[styles.view2, styles.viewPosition4]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background2.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>TUV</Text>
            <Text style={[styles.number1, styles.numberPosition]}>8</Text>
          </View>
          <View style={[styles.view3, styles.viewPosition2]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background3.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>PQRS</Text>
            <Text style={[styles.number1, styles.numberPosition]}>7</Text>
          </View>
          <View style={[styles.view4, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background4.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>MNO</Text>
            <Text style={[styles.number1, styles.numberPosition]}>6</Text>
          </View>
          <View style={[styles.view5, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background5.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>JKL</Text>
            <Text style={[styles.number1, styles.numberPosition]}>5</Text>
          </View>
          <View style={[styles.view6, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon1, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background6.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>GHI</Text>
            <Text style={[styles.number1, styles.numberPosition]}>4</Text>
          </View>
          <View style={[styles.view7, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background7.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>DEF</Text>
            <Text style={[styles.number1, styles.numberPosition]}>3</Text>
          </View>
          <View style={[styles.view8, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background8.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>ABC</Text>
            <Text style={[styles.number1, styles.numberPosition]}>2</Text>
          </View>
          <View style={[styles.view9, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.keyIconLayout]}
              resizeMode="cover"
              source={require("../assets/key-background9.png")}
            />
            <Text style={[styles.label, styles.numberPosition]}>{` `}</Text>
            <Text style={[styles.number1, styles.numberPosition]}>1</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.verifyPhoneNumber, styles.verifyTypo]}>
        Verify Phone Number
      </Text>
      <Text style={[styles.weHaveSent, styles.verifyTypo]}>
        We have sent you a 6 digit code. Please enter here to Verify your
        Number.
      </Text>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <View style={styles.wrapperFlexBox}>
          <Text style={[styles.verifyAndContinue, styles.verifyTypo]}>
            Verify and Continue
          </Text>
          <Image
            style={styles.vuesaxlineartickCircleIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineartickcircle.png")}
          />
        </View>
      </View>
      <View
        style={[styles.phoneVerificationChild3, styles.statusBarPosition]}
      />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.back, styles.verifyTypo]}>Back</Text>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.statusBarPosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.statusIcons}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  phoneChildLayout: {
    height: 58,
    width: 49,
    borderRadius: Border.br_sm,
    top: 308,
    backgroundColor: Color.light80,
    position: "absolute",
  },
  phoneLayout: {
    width: 48,
    height: 58,
    borderRadius: Border.br_sm,
    top: 308,
    backgroundColor: Color.light80,
    position: "absolute",
  },
  frameViewPosition: {
    left: "50%",
    position: "absolute",
  },
  keyboardLayout: {
    width: 390,
    left: 0,
  },
  viewPosition5: {
    left: "33.88%",
    right: "33.88%",
  },
  keyIconLayout: {
    maxHeight: "100%",
    borderRadius: Border.br_8xs,
    left: "0%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  numberPosition: {
    width: 122,
    color: Color.labelColorLightPrimary,
    left: 0,
    textAlign: "center",
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  viewPosition3: {
    left: "67.77%",
    right: "0%",
  },
  viewPosition4: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  viewPosition2: {
    right: "67.77%",
    left: "0%",
  },
  viewPosition1: {
    bottom: "51.69%",
    top: "25.6%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "77.78%",
    top: "0%",
    width: "32.23%",
    height: "22.22%",
    position: "absolute",
  },
  verifyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  statusBarPosition: {
    top: 0,
    position: "absolute",
  },
  text: {
    color: Color.dark90,
    textAlign: "center",
    fontFamily: FontFamily.button,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    flex: 1,
  },
  wrapper: {
    borderRadius: 70,
    width: 156,
    padding: 8,
    backgroundColor: Color.light80,
    top: 225,
    justifyContent: "center",
    left: 18,
    position: "absolute",
  },
  vuesaxboldedit2Icon: {
    width: 17,
    height: 17,
  },
  vuesaxboldedit2Wrapper: {
    left: 184,
    borderRadius: 330,
    backgroundColor: Color.peach60,
    padding: Padding.p_2xs,
    flexDirection: "row",
    top: 225,
    position: "absolute",
  },
  phoneVerificationChild: {
    left: 18,
    width: 49,
    borderRadius: Border.br_sm,
    top: 308,
  },
  phoneVerificationItem: {
    left: 79,
  },
  phoneVerificationInner: {
    left: 140,
  },
  rectangleView: {
    left: 201,
  },
  phoneVerificationChild1: {
    left: 263,
  },
  phoneVerificationChild2: {
    left: 323,
  },
  didntReceiveCode: {
    color: Color.dark80,
  },
  getANew: {
    textDecoration: "underline",
    color: Color.pink100,
  },
  didntReceiveCodeContainer: {
    marginLeft: -138,
    top: 416,
    textAlign: "right",
    fontFamily: FontFamily.button,
    left: "50%",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    right: -1,
    bottom: 0,
    left: 1,
    height: 34,
    position: "absolute",
  },
  deleteIcon: {
    height: 19,
    width: 25,
  },
  keyBackgroundIcon: {
    height: "102.09%",
    bottom: "-2.09%",
  },
  number: {
    top: "15.22%",
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    color: Color.labelColorLightPrimary,
  },
  view: {
    top: "77.78%",
    bottom: "0%",
    width: "32.23%",
    height: "22.22%",
    left: "33.88%",
    right: "33.88%",
    position: "absolute",
  },
  keyBackgroundIcon1: {
    height: "102.04%",
    bottom: "-2.04%",
  },
  label: {
    top: "63.04%",
    fontSize: FontSize.size_3xs,
    letterSpacing: 2,
    fontWeight: "700",
  },
  number1: {
    top: "2.17%",
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    color: Color.labelColorLightPrimary,
  },
  view1: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  view2: {
    left: "33.88%",
    right: "33.88%",
  },
  view3: {
    bottom: "25.6%",
    top: "51.69%",
    height: "22.71%",
    width: "32.23%",
    position: "absolute",
  },
  view4: {
    left: "67.77%",
    right: "0%",
  },
  view5: {
    left: "33.88%",
    right: "33.88%",
  },
  view6: {
    right: "67.77%",
    left: "0%",
  },
  view7: {
    left: "67.77%",
    right: "0%",
  },
  view8: {
    left: "33.88%",
    right: "33.88%",
  },
  view9: {
    right: "67.77%",
    left: "0%",
  },
  keys: {
    height: "71.13%",
    width: "96.8%",
    top: "2.06%",
    right: "1.6%",
    bottom: "26.8%",
    left: "1.6%",
    position: "absolute",
  },
  keyboard: {
    top: 541,
    backgroundColor: Color.lightgray,
    height: 303,
    position: "absolute",
  },
  verifyPhoneNumber: {
    top: 111,
    fontSize: FontSize.heading4_size,
    letterSpacing: -0.7,
    lineHeight: 46,
    color: Color.dark100,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
    left: 21,
  },
  weHaveSent: {
    top: 165,
    width: 317,
    left: 21,
    color: Color.dark80,
    textAlign: "left",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    position: "absolute",
  },
  verifyAndContinue: {
    fontSize: FontSize.button_size,
    lineHeight: 18,
    color: Color.light100,
    fontWeight: "500",
    textAlign: "left",
  },
  vuesaxlineartickCircleIcon: {
    width: 24,
    height: 24,
    marginLeft: 4,
  },
  frameView: {
    marginLeft: -174,
    bottom: 316,
    borderRadius: Border.br_lg,
    backgroundColor: Color.blue60,
    width: 348,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  phoneVerificationChild3: {
    backgroundColor: Color.gray_300,
    height: 93,
    width: 390,
    left: 0,
  },
  vuesaxlineararrowLeftIcon: {
    top: 45,
    width: 36,
    height: 36,
    left: 21,
    position: "absolute",
  },
  back: {
    top: 56,
    left: 58,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.dark100,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    height: 30,
    maxWidth: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
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
    height: 14,
    marginLeft: 4,
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    alignItems: "center",
    flexDirection: "row",
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
    right: 8,
    left: 7,
    height: 44,
    overflow: "hidden",
  },
  phoneVerification: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PhoneVerification;
