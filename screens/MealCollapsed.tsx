import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MealCollapsed = () => {
  return (
    <View style={styles.mealCollapsed}>
      <View style={[styles.mealCollapsedChild, styles.mealPosition]} />
      <View style={[styles.mealCollapsedItem, styles.mealPosition]} />
      <Text style={[styles.required, styles.requiredTypo]}>REQUIRED</Text>
      <Text style={[styles.required1, styles.requiredTypo]}>REQUIRED</Text>
      <View style={[styles.mealCollapsedInner, styles.mealPosition]} />
      <Text style={[styles.westernBbqCheeseburger, styles.backClr]}>
        Western BBQ Cheeseburger Meal
      </Text>
      <View style={[styles.calsParent, styles.parentFlexBox]}>
        <Text style={[styles.cals, styles.calsLayout]}>340-400 Cals</Text>
        <Image
          style={styles.vuesaxlinearinfoCircleIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearinfocircle.png")}
        />
      </View>
      <Text style={[styles.sideItem, styles.drinksTypo]}>Side Item</Text>
      <Text style={[styles.drinks, styles.drinksTypo]}>Drinks</Text>
      <Text style={[styles.editCheeseburger, styles.drinksTypo]}>
        Edit Cheeseburger
      </Text>
      <View style={[styles.vuesaxlinearadd, styles.vuesaxlinearaddPosition]}>
        <Image
          style={styles.vuesaxlinearaddIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearadd.png")}
        />
      </View>
      <View style={[styles.vuesaxlinearadd1, styles.vuesaxlinearaddPosition]}>
        <Image
          style={styles.vuesaxlinearaddIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearadd.png")}
        />
      </View>
      <View style={[styles.vuesaxlinearadd2, styles.vuesaxlinearaddPosition]}>
        <Image
          style={styles.vuesaxlinearaddIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearadd.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frame}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle26.png")}
          />
        </View>
        <Image
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle27.png")}
        />
        <View style={styles.frame1}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/rectangle28.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.mealCollapsedChild1, styles.rectangleViewPosition]}
      />
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/cart.png")}
      />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Image
        style={[styles.vuesaxlinearmoreSquareIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlinearmoresquare.png")}
      />
      <Text style={[styles.back, styles.calsTypo]}>Back</Text>
      <View style={[styles.vuesaxboldheartWrapper, styles.frameGroupPosition]}>
        <Image
          style={styles.vuesaxboldheartIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldheart1.png")}
        />
      </View>
      <View style={[styles.frameGroup, styles.frameGroupPosition]}>
        <View style={[styles.vuesaxboldbagHappyParent, styles.parentFlexBox]}>
          <Image
            style={styles.vuesaxboldbagHappyIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxboldbaghappy.png")}
          />
          <Text style={[styles.addToBag, styles.calsLayout]}>Add to Bag</Text>
        </View>
        <Text style={[styles.text, styles.calsLayout]}>$6.69</Text>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconLayout1]}
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
            source={require("../assets/wifi-signal--light1.png")}
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
      <View style={[styles.homeIndicator, styles.statusBarPosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealPosition: {
    height: 56,
    backgroundColor: Color.light80,
    left: 0,
    right: 0,
    position: "absolute",
  },
  requiredTypo: {
    color: Color.systemGreen100,
    fontFamily: FontFamily.button,
    letterSpacing: 0.2,
    fontSize: FontSize.caption_size,
    right: 61,
    textAlign: "right",
    fontWeight: "500",
    lineHeight: 16,
    position: "absolute",
  },
  backClr: {
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  calsLayout: {
    lineHeight: 18,
    fontFamily: FontFamily.button,
  },
  drinksTypo: {
    color: Color.labelColorLightPrimary,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.subtitle2_size,
    textAlign: "left",
    left: 21,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  vuesaxlinearaddPosition: {
    padding: Padding.p_11xs,
    backgroundColor: Color.dark60,
    borderRadius: Border.br_81xl,
    right: 21,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 36,
    width: 36,
    top: 45,
    position: "absolute",
  },
  calsTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "500",
  },
  frameGroupPosition: {
    borderRadius: Border.br_lg,
    bottom: 30,
    flexDirection: "row",
    position: "absolute",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    position: "absolute",
    overflow: "hidden",
  },
  basePosition: {
    right: 0,
    top: 0,
    left: 0,
  },
  mealCollapsedChild: {
    top: 450,
  },
  mealCollapsedItem: {
    top: 511,
  },
  required: {
    top: 470,
    textAlign: "right",
  },
  required1: {
    top: 531,
    textAlign: "right",
  },
  mealCollapsedInner: {
    top: 572,
  },
  westernBbqCheeseburger: {
    top: 316,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    width: 293,
    textAlign: "left",
    left: 21,
  },
  cals: {
    letterSpacing: -0.3,
    color: Color.dark60,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "500",
  },
  vuesaxlinearinfoCircleIcon: {
    width: 19,
    height: 19,
    marginLeft: 4,
  },
  calsParent: {
    top: 406,
    alignItems: "center",
    left: 21,
    position: "absolute",
  },
  sideItem: {
    top: 466,
  },
  drinks: {
    top: 527,
  },
  editCheeseburger: {
    top: 588,
  },
  vuesaxlinearaddIcon: {
    width: 24,
    height: 24,
  },
  vuesaxlinearadd: {
    top: 463,
  },
  vuesaxlinearadd1: {
    top: 524,
  },
  vuesaxlinearadd2: {
    top: 586,
  },
  rectangleIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    width: "100%",
  },
  frame: {
    left: 189,
    width: 249,
    height: 191,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon1: {
    top: 53,
    width: 365,
    height: 134,
    left: 0,
    position: "absolute",
  },
  frame1: {
    top: 124,
    left: 115,
    width: 220,
    height: 74,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    top: 112,
    left: 22,
    width: 438,
    height: 198,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.gray_200,
    height: 112,
    bottom: 0,
  },
  mealCollapsedChild1: {
    backgroundColor: Color.gray_300,
    height: 93,
    top: 0,
  },
  cartIcon: {
    right: 21,
    height: 36,
    width: 36,
    top: 45,
  },
  vuesaxlineararrowLeftIcon: {
    left: 21,
  },
  vuesaxlinearmoreSquareIcon: {
    right: 78,
  },
  back: {
    top: 56,
    left: 58,
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
    lineHeight: 16,
    fontSize: FontSize.size_sm,
  },
  vuesaxboldheartIcon: {
    width: 27,
    height: 27,
  },
  vuesaxboldheartWrapper: {
    width: 62,
    height: 62,
    padding: Padding.p_lg,
    left: 21,
    backgroundColor: Color.light80,
    bottom: 30,
  },
  vuesaxboldbagHappyIcon: {
    width: 21,
    height: 21,
  },
  addToBag: {
    fontSize: FontSize.button_size,
    color: Color.light100,
    marginLeft: 7,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 18,
    flex: 1,
  },
  vuesaxboldbagHappyParent: {
    width: 158,
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.blue100,
    width: 56,
    marginLeft: 10,
    textAlign: "right",
  },
  frameGroup: {
    left: 101,
    backgroundColor: Color.dark100,
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_2xl,
    justifyContent: "center",
    alignItems: "center",
  },
  notchIcon: {
    height: 30,
    top: 0,
    left: 0,
    right: 0,
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
    alignItems: "center",
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
  },
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorLightPrimary,
    bottom: 0,
    top: 0,
    left: 0,
    position: "absolute",
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
    bottom: 0,
  },
  mealCollapsed: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default MealCollapsed;
