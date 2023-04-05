import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const EditAddOn = () => {
  return (
    <View style={styles.editAddOn}>
      <View style={[styles.editAddOnChild, styles.basePosition]} />
      <Text style={styles.required}>REQUIRED</Text>
      <Text style={[styles.drinks, styles.saveTypo]}>Drinks</Text>
      <Text style={[styles.editJuice, styles.juiceTypo]}>Edit Juice</Text>
      <View style={[styles.editAddOnInner, styles.frameInnerFlexBox]}>
        <View style={[styles.frameParent, styles.frameInnerFlexBox]}>
          <View style={[styles.frame, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon, styles.rectangleIconPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle4.png")}
            />
          </View>
          <Text style={[styles.fruitPunchJuice, styles.juiceTypo]}>
            Fruit Punch Juice
          </Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-2.png")}
          />
        </View>
      </View>
      <View style={[styles.frameView, styles.frameInnerFlexBox]}>
        <View style={[styles.frameParent, styles.frameInnerFlexBox]}>
          <View style={[styles.frame1, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
              resizeMode="cover"
            />
          </View>
          <Text style={[styles.fruitPunchJuice, styles.juiceTypo]}>
            Orange Juice
          </Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-752.png")}
          />
        </View>
      </View>
      <View style={[styles.editAddOnInner1, styles.frameInnerFlexBox]}>
        <View style={[styles.frameParent, styles.frameInnerFlexBox]}>
          <View style={[styles.frame, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
              resizeMode="cover"
            />
          </View>
          <Text style={[styles.fruitPunchJuice, styles.juiceTypo]}>
            Ginger Shot Juice
          </Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-7521.png")}
          />
        </View>
      </View>
      <View style={[styles.editAddOnInner2, styles.frameInnerFlexBox]}>
        <View style={[styles.frameParent, styles.frameInnerFlexBox]}>
          <View style={[styles.frame1, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon3, styles.rectangleIconPosition]}
              resizeMode="cover"
            />
          </View>
          <Text style={[styles.fruitPunchJuice, styles.juiceTypo]}>
            Sweet Guava Juice
          </Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-752.png")}
          />
        </View>
      </View>
      <View style={[styles.editAddOnInner3, styles.frameInnerFlexBox]}>
        <View style={[styles.frameParent, styles.frameInnerFlexBox]}>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon4, styles.rectangleIconPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle5.png")}
            />
          </View>
          <Text style={[styles.fruitPunchJuice, styles.juiceTypo]}>
            Tangy Tomato Juice
          </Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-752.png")}
          />
        </View>
      </View>
      <View style={[styles.editAddOnItem, styles.editAddOnItemPosition]} />
      <View style={[styles.rectangleView, styles.editAddOnItemPosition]} />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.editJuicePosition]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.westernBbq, styles.saveTypo]}>
        Western BBQ ... Meal
      </Text>
      <View style={[styles.editAddOnInner4, styles.editAddOnInner4FlexBox]}>
        <View style={styles.editAddOnInner4FlexBox}>
          <Image
            style={styles.vuesaxboldtickCircleIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxboldtickcircle.png")}
          />
          <Text style={[styles.save, styles.saveTypo]}>Save</Text>
        </View>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.frameInnerFlexBox]}>
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
          style={[styles.timeLight, styles.editJuicePosition]}
          resizeMode="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.statusBarPosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  juiceTypo: {
    fontSize: FontSize.body_size,
    textAlign: "left",
    lineHeight: 23,
    fontFamily: FontFamily.button,
    letterSpacing: -0.2,
  },
  frameInnerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameLayout: {
    width: 43,
    overflow: "hidden",
  },
  rectangleIconPosition: {
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  editAddOnItemPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  editJuicePosition: {
    left: 21,
    position: "absolute",
  },
  editAddOnInner4FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    position: "absolute",
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  editAddOnChild: {
    top: 93,
    backgroundColor: Color.light80,
    height: 81,
  },
  required: {
    top: 125,
    right: 21,
    fontSize: FontSize.caption_size,
    color: Color.systemGreen100,
    textAlign: "right",
    fontFamily: FontFamily.button,
    letterSpacing: -0.2,
    fontWeight: "500",
    lineHeight: 16,
    position: "absolute",
  },
  drinks: {
    top: 109,
    fontSize: FontSize.subtitle2_size,
    color: Color.dark100,
    lineHeight: 23,
    textAlign: "left",
    left: 21,
    letterSpacing: -0.2,
    position: "absolute",
  },
  editJuice: {
    top: 135,
    color: Color.dark80,
    left: 21,
    position: "absolute",
  },
  rectangleIcon: {
    right: "0%",
    width: "100%",
  },
  frame: {
    height: 33,
  },
  fruitPunchJuice: {
    marginLeft: 2,
    color: Color.dark100,
    flex: 1,
  },
  frameChild: {
    width: 28,
    height: 28,
    marginLeft: 2,
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  editAddOnInner: {
    top: 186,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon1: {
    width: "109.3%",
    right: "-9.3%",
  },
  frame1: {
    height: 34,
  },
  frameView: {
    top: 253,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon2: {
    width: "118.6%",
    right: "-18.6%",
  },
  editAddOnInner1: {
    top: 319,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon3: {
    width: "116.28%",
    right: "-16.28%",
  },
  editAddOnInner2: {
    top: 386,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon4: {
    width: "155.81%",
    right: "-55.81%",
  },
  frame4: {
    height: 28,
  },
  editAddOnInner3: {
    top: 453,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
  },
  editAddOnItem: {
    backgroundColor: Color.gray_200,
    height: 112,
    bottom: 0,
  },
  rectangleView: {
    backgroundColor: Color.gray_300,
    height: 93,
    top: 0,
  },
  vuesaxlineararrowLeftIcon: {
    top: 45,
    width: 36,
    height: 36,
  },
  westernBbq: {
    top: 56,
    left: 58,
    fontSize: FontSize.size_sm,
    color: Color.dark100,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 16,
    position: "absolute",
  },
  vuesaxboldtickCircleIcon: {
    width: 24,
    height: 24,
  },
  save: {
    fontSize: FontSize.button_size,
    lineHeight: 18,
    color: Color.light100,
    marginLeft: 5,
    fontWeight: "500",
    textAlign: "left",
  },
  editAddOnInner4: {
    marginLeft: -174,
    bottom: 30,
    left: "50%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.dark100,
    width: 348,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  notchIcon: {
    height: 30,
    top: 0,
    maxWidth: "100%",
    left: 0,
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
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorLightPrimary,
    top: 0,
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
    bottom: 0,
    height: 34,
  },
  editAddOn: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default EditAddOn;
