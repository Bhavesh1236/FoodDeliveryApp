import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Onboarding2 = () => {
  return (
    <View style={styles.onboarding2}>
      <Text style={[styles.freeDeliveriesFor, styles.getYourFavoriteTypo]}>
        Free Deliveries for ONE MONTH!!
      </Text>
      <Text style={[styles.getYourFavorite, styles.getYourFavoriteClr]}>
        Get your favorite meals delivered to your doorstep for free with our
        online food delivery app - enjoy a whole month of complimentary
        delivery!
      </Text>
      <View style={styles.onboarding2Child} />
      <View style={[styles.onboarding2Item, styles.onboarding2Layout]} />
      <View style={[styles.onboarding2Inner, styles.onboarding2Layout]} />
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
      <View style={[styles.onboarding2Inner1, styles.frameViewFlexBox]}>
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
  getYourFavoriteTypo: {
    fontFamily: FontFamily.button,
    width: 348,
    textAlign: "left",
    left: 21,
  },
  getYourFavoriteClr: {
    color: Color.dark80,
    position: "absolute",
  },
  onboarding2Layout: {
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
  freeDeliveriesFor: {
    top: 508,
    fontSize: FontSize.heading4_size,
    letterSpacing: -0.7,
    lineHeight: 46,
    color: Color.dark100,
    width: 348,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  getYourFavorite: {
    top: 613,
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    lineHeight: 23,
    width: 348,
    textAlign: "left",
    fontFamily: FontFamily.button,
    left: 21,
  },
  onboarding2Child: {
    left: 36,
    backgroundColor: Color.peach100,
    height: 10,
    width: 10,
    top: 469,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  onboarding2Item: {
    left: 21,
    backgroundColor: Color.light60,
  },
  onboarding2Inner: {
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
  onboarding2Inner1: {
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
  onboarding2: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Onboarding2;
