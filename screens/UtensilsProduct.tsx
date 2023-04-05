import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const UtensilsProduct = () => {
  return (
    <View style={styles.utensilsProduct}>
      <Image
        style={[styles.utensilsProductChild, styles.utensilsPosition]}
        resizeMode="cover"
        source={require("../assets/vector-6.png")}
      />
      <Text style={styles.choppingBoardFrom}>Chopping Board from Ikea</Text>
      <View style={styles.frame}>
        <Image
          style={[styles.rectangleIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle11.png")}
        />
      </View>
      <Text style={[styles.brand, styles.brandPosition]}>Brand:</Text>
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <View style={[styles.yearWarrantyWrapper, styles.frameParentFlexBox]}>
        <Text style={[styles.yearWarranty, styles.backTypo]}>
          1 YEAR WARRANTY
        </Text>
      </View>
      <View style={[styles.utensilsProductItem, styles.basePosition]} />
      <Text style={[styles.productDescription, styles.brandTypo]}>
        Product Description
      </Text>
      <View style={[styles.vuesaxlinearminus, styles.wrapperFlexBox]}>
        <Image
          style={styles.vuesaxlinearminusIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearminus.png")}
        />
      </View>
      <Text style={[styles.youCanEasily, styles.readMoreTypo]}>
        You can easily turn the chopping board and use both sides when you
        prepare food, because it has easy-to-grip slanted edges. You can also
        use the chopping board as a serving ...
      </Text>
      <View style={[styles.readMoreWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.readMore, styles.readMoreTypo]}>+ Read More</Text>
      </View>
      <View style={[styles.utensilsProductInner, styles.utensilsPosition]} />
      <View style={[styles.rectangleView, styles.utensilsPosition]} />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.statusIconsFlexBox]}>
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
          style={styles.timeLight}
          resizeMode="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <View style={[styles.vuesaxboldheartWrapper, styles.frameParentPosition]}>
        <Image
          style={styles.vuesaxboldheartIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldheart1.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View
          style={[styles.vuesaxboldbagHappyParent, styles.statusIconsFlexBox]}
        >
          <Image
            style={styles.vuesaxboldbagHappyIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxboldbaghappy.png")}
          />
          <Text style={[styles.addToBag, styles.textLayout]}>Add to Bag</Text>
        </View>
        <Text style={[styles.text, styles.textLayout]}>$12.00</Text>
      </View>
      <Image
        style={[styles.vuesaxlinearmoreSquareIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlinearmoresquare.png")}
      />
      <Image
        style={[styles.vuesaxlinearexportIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlinearexport.png")}
      />
      <View style={[styles.homeIndicator, styles.statusBarPosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  utensilsPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  brandPosition: {
    color: Color.dark90,
    left: 21,
    position: "absolute",
  },
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  backTypo: {
    lineHeight: 16,
    fontWeight: "500",
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  basePosition: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  brandTypo: {
    lineHeight: 23,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  wrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  readMoreTypo: {
    lineHeight: 26,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    position: "absolute",
    overflow: "hidden",
  },
  statusIconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  iconLayout: {
    height: 36,
    width: 36,
    top: 45,
    position: "absolute",
  },
  frameParentPosition: {
    borderRadius: Border.br_lg,
    bottom: 30,
    flexDirection: "row",
    position: "absolute",
  },
  textLayout: {
    lineHeight: 18,
    fontFamily: FontFamily.button,
  },
  utensilsProductChild: {
    top: 1032,
    height: 0,
  },
  choppingBoardFrom: {
    top: 297,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    width: 293,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
    left: 21,
    position: "absolute",
  },
  rectangleIcon: {
    height: "100.21%",
    width: "100.3%",
    top: "0%",
    right: "-0.3%",
    bottom: "-0.21%",
    left: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  frame: {
    height: "19.19%",
    width: "93.59%",
    top: "13.51%",
    right: "1.03%",
    bottom: "67.3%",
    left: "5.38%",
    position: "absolute",
    overflow: "hidden",
  },
  brand: {
    top: 396,
    lineHeight: 23,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.button,
    fontSize: FontSize.body_size,
    color: Color.dark90,
  },
  image4Icon: {
    top: 395,
    left: 81,
    width: 58,
    height: 25,
    position: "absolute",
  },
  yearWarranty: {
    fontSize: FontSize.caption_size,
    textAlign: "center",
    fontWeight: "500",
    flex: 1,
  },
  yearWarrantyWrapper: {
    top: 189,
    left: 202,
    borderTopRightRadius: Border.br_2xl,
    borderBottomRightRadius: Border.br_2xl,
    borderBottomLeftRadius: Border.br_2xl,
    borderStyle: "solid",
    borderColor: "#292d32",
    borderWidth: 1,
    width: 142,
    height: 40,
    paddingHorizontal: 9,
    paddingVertical: Padding.p_lgi,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.light100,
  },
  utensilsProductItem: {
    top: 441,
    height: 56,
    backgroundColor: Color.light80,
  },
  productDescription: {
    top: 457,
    fontSize: FontSize.subtitle2_size,
    color: Color.labelColorLightPrimary,
    left: 21,
    position: "absolute",
  },
  vuesaxlinearminusIcon: {
    width: 24,
    height: 24,
  },
  vuesaxlinearminus: {
    top: 455,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.dark60,
    padding: Padding.p_11xs,
    right: 21,
  },
  youCanEasily: {
    top: 515,
    width: 346,
    height: 120,
    color: Color.dark90,
    left: 21,
    position: "absolute",
  },
  readMore: {
    color: Color.peach100,
    fontWeight: "500",
  },
  readMoreWrapper: {
    top: 645,
    left: 232,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.peach60,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_2xs,
  },
  utensilsProductInner: {
    backgroundColor: Color.gray_200,
    height: 112,
    bottom: 0,
  },
  rectangleView: {
    backgroundColor: Color.gray_300,
    height: 93,
    top: 0,
  },
  notchIcon: {
    height: 30,
    top: 0,
    maxWidth: "100%",
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
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  vuesaxlineararrowLeftIcon: {
    left: 21,
  },
  back: {
    top: 56,
    left: 58,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  vuesaxboldheartIcon: {
    width: 27,
    height: 27,
  },
  vuesaxboldheartWrapper: {
    width: 62,
    height: 62,
    padding: Padding.p_lg,
    backgroundColor: Color.light80,
    left: 21,
  },
  vuesaxboldbagHappyIcon: {
    width: 21,
    height: 21,
  },
  addToBag: {
    fontSize: FontSize.button_size,
    color: Color.light100,
    marginLeft: 7,
    fontWeight: "500",
    textAlign: "left",
    flex: 1,
  },
  vuesaxboldbagHappyParent: {
    flex: 1,
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.blue100,
    textAlign: "right",
    width: 56,
    marginLeft: 10,
  },
  frameParent: {
    left: 101,
    backgroundColor: Color.dark100,
    width: 268,
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_2xl,
    justifyContent: "center",
    alignItems: "center",
  },
  vuesaxlinearmoreSquareIcon: {
    right: 21,
  },
  vuesaxlinearexportIcon: {
    right: 73,
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
    height: 34,
    bottom: 0,
  },
  utensilsProduct: {
    borderRadius: Border.br_27xl,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.light100,
  },
});

export default UtensilsProduct;
