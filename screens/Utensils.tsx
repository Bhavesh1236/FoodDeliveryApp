import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const Utensils = () => {
  return (
    <View style={styles.utensils}>
      <Image
        style={[styles.utensilsChild, styles.utensilsLayout]}
        resizeMode="cover"
        source={require("../assets/vector-6.png")}
      />
      <Text style={styles.utensils1}>Utensils</Text>
      <Text style={[styles.new, styles.newTypo]}>NEW</Text>
      <View
        style={[styles.vuesaxlinearsearchNormalParent, styles.parentFlexBox]}
      >
        <Image
          style={styles.vuesaxlinearsearchNormalIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearsearchnormal.png")}
        />
        <Text style={[styles.searchUtensils, styles.leCreusetDarkTypo]}>
          Search Utensils
        </Text>
      </View>
      <View style={[styles.frameParent, styles.framePosition1]}>
        <View style={styles.frame}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle12.png")}
          />
        </View>
        <View style={styles.leCreusetDarkBlue500mlCupParent}>
          <Text style={[styles.leCreusetDark, styles.leCreusetDarkTypo]}>
            Le Creuset Dark Blue 500ml Cup
          </Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={styles.text}>$46.89</Text>
            <Text style={[styles.text1, styles.textTypo]}>$30.59</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.framePosition1]}>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Image
              style={[styles.rectangleIcon1, styles.rectangleIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle13.png")}
            />
          </View>
        </View>
        <View style={styles.leCreusetDarkBlue500mlCupParent}>
          <Text style={[styles.leCreusetDark, styles.leCreusetDarkTypo]}>
            Circulon Matte Black Pan
          </Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={styles.textTypo}>$51.90</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.framePosition]}>
        <View style={styles.frame3}>
          <Image
            style={[styles.rectangleIcon2, styles.rectangleIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle14.png")}
          />
        </View>
        <View style={styles.leCreusetDarkBlue500mlCupParent}>
          <Text style={[styles.leCreusetDark, styles.leCreusetDarkTypo]}>
            Tefal White Potholder
          </Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={styles.textTypo}>$33.90</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameView, styles.framePosition]}>
        <View style={styles.frame4}>
          <View style={styles.frame5}>
            <Image
              style={[styles.rectangleIcon3, styles.rectangleIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle15.png")}
            />
          </View>
        </View>
        <View style={styles.leCreusetDarkBlue500mlCupParent}>
          <Text style={[styles.leCreusetDark, styles.leCreusetDarkTypo]}>
            Cutting Board from Ikea
          </Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={styles.textTypo}>$12.00</Text>
          </View>
        </View>
      </View>
      <View style={[styles.utensilsItem, styles.statusBarPosition1]} />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.timeLightPosition]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.back, styles.newTypo]}>Back</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  utensilsLayout: {
    width: 390,
    left: 0,
  },
  newTypo: {
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  leCreusetDarkTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  framePosition1: {
    paddingBottom: Padding.p_2xl,
    paddingRight: Padding.p_2xl,
    paddingTop: Padding.p_2xl,
    paddingLeft: Padding.p_xl,
    width: 163,
    borderWidth: 1.5,
    borderColor: "#eff2f5",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 21,
    position: "absolute",
  },
  textTypo: {
    color: Color.blue100,
    fontWeight: "700",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  rectangleIconLayout: {
    height: "100%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    left: 206,
    paddingBottom: Padding.p_2xl,
    paddingRight: Padding.p_2xl,
    paddingTop: Padding.p_2xl,
    paddingLeft: Padding.p_xl,
    width: 163,
    borderWidth: 1.5,
    borderColor: "#eff2f5",
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  statusBarPosition1: {
    top: 0,
    position: "absolute",
  },
  timeLightPosition: {
    left: 21,
    position: "absolute",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  basePosition1: {
    right: 0,
    top: 0,
    left: 0,
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  utensilsChild: {
    top: 1032,
    height: 0,
    position: "absolute",
  },
  utensils1: {
    top: 107,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    textAlign: "left",
    fontFamily: FontFamily.button,
    color: Color.dark100,
    left: 21,
    position: "absolute",
  },
  new: {
    top: 106,
    left: 139,
    fontSize: FontSize.caption_size,
    color: Color.coral,
  },
  vuesaxlinearsearchNormalIcon: {
    width: 24,
    height: 24,
  },
  searchUtensils: {
    lineHeight: 23,
    color: Color.darkslategray_100,
    marginLeft: 10,
    flex: 1,
    fontSize: FontSize.body_size,
  },
  vuesaxlinearsearchNormalParent: {
    top: 161,
    borderRadius: Border.br_sm,
    backgroundColor: Color.lightslategray,
    width: 348,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    left: 21,
    position: "absolute",
  },
  rectangleIcon: {
    height: "149.53%",
    width: "155.5%",
    right: "-55.5%",
    bottom: "-49.53%",
    maxHeight: "100%",
    top: "0%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    width: 140,
    height: 69,
    overflow: "hidden",
  },
  leCreusetDark: {
    lineHeight: 22,
    color: Color.labelColorLightPrimary,
    alignSelf: "stretch",
  },
  text: {
    textDecoration: "line-through",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  text1: {
    marginLeft: 6,
  },
  parent: {
    marginTop: 7,
    alignSelf: "stretch",
  },
  leCreusetDarkBlue500mlCupParent: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 241,
    height: 183,
  },
  rectangleIcon1: {
    width: "139.08%",
    right: "-39.08%",
    left: "0%",
    height: "100%",
  },
  frame2: {
    height: "82.11%",
    top: "17.89%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  frame1: {
    width: 122,
    height: 59,
    overflow: "hidden",
  },
  frameGroup: {
    top: 446,
    height: 173,
  },
  rectangleIcon2: {
    right: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
  },
  frame3: {
    width: 110,
    height: 84,
    overflow: "hidden",
  },
  frameContainer: {
    top: 251,
    height: 197,
  },
  rectangleIcon3: {
    width: "122.39%",
    right: "-22.96%",
    left: "0.57%",
  },
  frame5: {
    height: "82.42%",
    width: "82.48%",
    top: "8.79%",
    right: "17.99%",
    bottom: "8.79%",
    left: "-0.47%",
    position: "absolute",
    overflow: "hidden",
  },
  frame4: {
    width: 129,
    height: 70,
    overflow: "hidden",
  },
  frameView: {
    top: 470,
    height: 183,
  },
  utensilsItem: {
    backgroundColor: Color.gray_300,
    height: 93,
    width: 390,
    left: 0,
  },
  vuesaxlineararrowLeftIcon: {
    top: 45,
    width: 36,
    height: 36,
  },
  back: {
    top: 56,
    left: 58,
    fontSize: FontSize.size_sm,
    color: Color.dark100,
    fontWeight: "500",
    lineHeight: 16,
  },
  notchIcon: {
    height: 30,
    maxWidth: "100%",
    right: 0,
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
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
    top: 0,
    position: "absolute",
  },
  base: {
    backgroundColor: Color.labelColorLightPrimary,
    right: 0,
    top: 0,
    left: 0,
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
  utensils: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Utensils;
