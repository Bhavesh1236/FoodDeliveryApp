import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Onboarding1 = () => {
  return (
    <View style={styles.onboarding1}>
      <Text
        style={[styles.wideRangeOf, styles.wideRangeOfTypo]}
      >{`Wide range of Food Categories & more`}</Text>
      <Text style={[styles.browseThroughOur, styles.browseThroughOurClr]}>
        Browse through our extensive list of restaurants and dishes, and when
        you're ready to order, simply add your desired items to your cart and
        checkout. It's that easy!
      </Text>
      <View style={styles.onboarding1Child} />
      <View style={[styles.onboarding1Item, styles.onboarding1Layout]} />
      <View style={[styles.onboarding1Inner, styles.onboarding1Layout]} />
      <View style={[styles.rectangleView, styles.timeLightPosition]} />
      <Text style={[styles.illustrationHere, styles.nextTypo]}>
        ILLUSTRATION HERE
      </Text>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition1]}
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
            style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/wifi-signal--light1.png")}
          />
          <Image
            style={[styles.batteryLight, styles.lightSpaceBlock]}
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
          style={[styles.timeLight, styles.timeLightPosition]}
          resizeMode="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.basePosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewFlexBox]}>
        <View style={styles.frameViewFlexBox}>
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright3.png")}
          />
        </View>
      </View>
      <View style={[styles.onboarding1Inner1, styles.frameViewFlexBox]}>
        <View style={styles.frameViewFlexBox}>
          <Text style={[styles.skip, styles.nextTypo]}>Skip</Text>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright4.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wideRangeOfTypo: {
    fontFamily: FontFamily.button,
    left: 21,
    width: 348,
    textAlign: "left",
  },
  browseThroughOurClr: {
    color: Color.dark80,
    position: "absolute",
  },
  onboarding1Layout: {
    backgroundColor: Color.light60,
    height: 10,
    width: 10,
    borderRadius: Border.br_3xs,
    top: 469,
    position: "absolute",
  },
  timeLightPosition: {
    borderRadius: Border.br_xl,
    left: 21,
    position: "absolute",
  },
  nextTypo: {
    lineHeight: 18,
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.button,
    fontWeight: "500",
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
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  frameViewFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  wideRangeOf: {
    top: 508,
    fontSize: FontSize.heading4_size,
    letterSpacing: -0.7,
    lineHeight: 46,
    color: Color.dark100,
    width: 348,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.button,
    left: 21,
    position: "absolute",
  },
  browseThroughOur: {
    top: 613,
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    lineHeight: 23,
    width: 348,
    textAlign: "left",
    fontFamily: FontFamily.button,
    left: 21,
    color: Color.dark80,
  },
  onboarding1Child: {
    backgroundColor: Color.peach100,
    height: 10,
    width: 10,
    top: 469,
    borderRadius: Border.br_3xs,
    left: 21,
    position: "absolute",
  },
  onboarding1Item: {
    left: 36,
  },
  onboarding1Inner: {
    left: 51,
  },
  rectangleView: {
    top: 72,
    backgroundColor: Color.light80,
    height: 367,
    width: 348,
  },
  illustrationHere: {
    top: 246,
    left: 111,
    textAlign: "center",
    opacity: 0.4,
    color: Color.dark80,
    position: "absolute",
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
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
    width: 54,
    height: 21,
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
    backgroundColor: Color.labelColorLightPrimary,
    left: 0,
    right: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    bottom: 0,
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
  next: {
    color: Color.light100,
    textAlign: "left",
  },
  vuesaxlineararrowRightIcon: {
    width: 24,
    height: 24,
    marginLeft: 2,
  },
  frameView: {
    marginLeft: -9,
    backgroundColor: Color.blue100,
    width: 183,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: Border.br_lg,
    left: "50%",
    bottom: 46,
    justifyContent: "center",
    position: "absolute",
  },
  skip: {
    color: Color.dark90,
    textAlign: "left",
  },
  onboarding1Inner1: {
    marginLeft: -173,
    width: 153,
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_3xl,
    borderRadius: Border.br_lg,
    left: "50%",
    bottom: 46,
    justifyContent: "center",
    position: "absolute",
  },
  onboarding1: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Onboarding1;
