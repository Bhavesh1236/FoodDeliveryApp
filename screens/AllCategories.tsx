import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const AllCategories = () => {
  return (
    <View style={styles.allCategories}>
      <Text style={[styles.allCategories1, styles.allCategories1Typo]}>
        All Categories
      </Text>
      <View
        style={[
          styles.vuesaxlinearsearchNormalParent,
          styles.statusIconsFlexBox,
        ]}
      >
        <Image
          style={styles.vuesaxlinearsearchNormalIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearsearchnormal.png")}
        />
        <Text style={[styles.searchByCategory, styles.allCategories1Typo]}>
          Search by Category
        </Text>
      </View>
      <Image
        style={[styles.allCategoriesChild, styles.allLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-757.png")}
      />
      <View style={[styles.frame, styles.framePosition]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle16.png")}
        />
      </View>
      <Image
        style={[styles.allCategoriesItem, styles.allChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-757.png")}
      />
      <View style={styles.frame1}>
        <Image
          style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle17.png")}
        />
      </View>
      <Image
        style={[styles.allCategoriesInner, styles.allChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-757.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-757.png")}
      />
      <Text style={[styles.burgers, styles.saladsTypo]}>Burgers</Text>
      <Image
        style={[styles.allCategoriesChild1, styles.allChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-758.png")}
      />
      <Image
        style={[styles.allCategoriesChild2, styles.allChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-758.png")}
      />
      <Image
        style={[styles.allCategoriesChild3, styles.allChildLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-758.png")}
      />
      <Image
        style={styles.allCategoriesChild4}
        resizeMode="cover"
        source={require("../assets/ellipse-758.png")}
      />
      <Text style={[styles.utensils, styles.indianTypo]}>Utensils</Text>
      <Text style={[styles.chicken, styles.dietTypo]}>Chicken</Text>
      <Text style={[styles.burritos, styles.chineseTypo]}>Burritos</Text>
      <View style={styles.frame2}>
        <Image
          style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle18.png")}
        />
      </View>
      <Image
        style={[styles.allCategoriesChild5, styles.allChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-757.png")}
      />
      <Image
        style={[styles.allCategoriesChild6, styles.allChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-757.png")}
      />
      <Image
        style={[styles.allCategoriesChild7, styles.allChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-757.png")}
      />
      <Text style={[styles.grocery, styles.saladsTypo]}>Grocery</Text>
      <View style={styles.frame3}>
        <Image
          style={[styles.rectangleIcon3, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle19.png")}
        />
      </View>
      <Text style={[styles.salads, styles.saladsTypo]}>Salads</Text>
      <Text style={[styles.indian, styles.indianTypo]}>Indian</Text>
      <Text style={[styles.diet, styles.dietTypo]}>Diet</Text>
      <Text style={[styles.sweets, styles.indianTypo]}>Sweets</Text>
      <Text style={[styles.pizza, styles.dietTypo]}>Pizza</Text>
      <Text style={[styles.chinese, styles.chineseTypo]}>Chinese</Text>
      <View style={[styles.frame4, styles.framePosition]}>
        <Image
          style={[styles.rectangleIcon4, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle20.png")}
        />
      </View>
      <View style={[styles.newWrapper, styles.newWrapperPosition]}>
        <Text style={[styles.new, styles.newTypo]}>NEW</Text>
      </View>
      <View style={[styles.newContainer, styles.newWrapperPosition]}>
        <Text style={[styles.new, styles.newTypo]}>NEW</Text>
      </View>
      <View style={[styles.favsWrapper, styles.newWrapperPosition]}>
        <Text style={[styles.new, styles.newTypo]}>FAVS</Text>
      </View>
      <Image
        style={[styles.image7Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={styles.image8Icon}
        resizeMode="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={styles.image9Icon}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={[styles.image10Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
      <Image
        style={styles.image11Icon}
        resizeMode="cover"
        source={require("../assets/image-111.png")}
      />
      <Image
        style={styles.image12Icon}
        resizeMode="cover"
        source={require("../assets/image-12.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
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
      <View style={[styles.homeIndicator, styles.basePosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allCategories1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  statusIconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  allLayout: {
    maxHeight: "100%",
    left: "5.38%",
    right: "68.21%",
    width: "26.41%",
    height: "12.2%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  framePosition: {
    bottom: "65.17%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIconPosition: {
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  allChildPosition1: {
    bottom: "45.97%",
    top: "41.82%",
  },
  allChildPosition: {
    bottom: "31.87%",
    top: "55.92%",
  },
  saladsTypo: {
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    top: "35.9%",
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  allChildLayout1: {
    left: "36.67%",
    right: "36.67%",
    width: "26.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "12.2%",
    position: "absolute",
    overflow: "hidden",
  },
  indianTypo: {
    top: "50%",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  dietTypo: {
    top: "64.1%",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  chineseTypo: {
    top: "78.2%",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  allChildLayout: {
    left: "68.21%",
    right: "5.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "26.41%",
    height: "12.2%",
    position: "absolute",
    overflow: "hidden",
  },
  newWrapperPosition: {
    padding: Padding.p_6xs,
    borderBottomRightRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    height: "3.55%",
    flexDirection: "row",
    position: "absolute",
  },
  newTypo: {
    lineHeight: 16,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  iconPosition: {
    left: 284,
    position: "absolute",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  basePosition1: {
    right: 0,
    left: 0,
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
  allCategories1: {
    top: 107,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    color: Color.dark100,
    position: "absolute",
    left: 21,
  },
  vuesaxlinearsearchNormalIcon: {
    width: 24,
    height: 24,
  },
  searchByCategory: {
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    lineHeight: 23,
    color: Color.dark60,
    marginLeft: 10,
    flex: 1,
  },
  vuesaxlinearsearchNormalParent: {
    top: 161,
    borderRadius: Border.br_sm,
    backgroundColor: Color.light80,
    width: 348,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    left: 21,
  },
  allCategoriesChild: {
    bottom: "60.07%",
    top: "27.73%",
  },
  rectangleIcon: {
    width: "119.05%",
    right: "-19.05%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  frame: {
    width: "21.54%",
    top: "31.28%",
    right: "70.26%",
    left: "8.21%",
    height: "3.55%",
    bottom: "65.17%",
  },
  allCategoriesItem: {
    maxHeight: "100%",
    left: "5.38%",
    right: "68.21%",
    width: "26.41%",
    height: "12.2%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon1: {
    width: "123.9%",
    right: "-23.9%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  frame1: {
    top: 372,
    left: 44,
    width: 77,
    height: 47,
    position: "absolute",
    overflow: "hidden",
  },
  allCategoriesInner: {
    maxHeight: "100%",
    left: "5.38%",
    right: "68.21%",
    width: "26.41%",
    height: "12.2%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIcon: {
    right: "52.56%",
    left: "21.03%",
    bottom: "17.77%",
    top: "70.02%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "26.41%",
    height: "12.2%",
    position: "absolute",
    overflow: "hidden",
  },
  burgers: {
    left: "11.28%",
  },
  allCategoriesChild1: {
    bottom: "60.07%",
    top: "27.73%",
  },
  allCategoriesChild2: {
    bottom: "45.97%",
    top: "41.82%",
  },
  allCategoriesChild3: {
    bottom: "31.87%",
    top: "55.92%",
  },
  allCategoriesChild4: {
    right: "21.03%",
    left: "52.31%",
    width: "26.67%",
    bottom: "17.77%",
    top: "70.02%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "12.2%",
    position: "absolute",
    overflow: "hidden",
  },
  utensils: {
    left: "42.56%",
  },
  chicken: {
    left: "42.56%",
  },
  burritos: {
    left: "58.46%",
  },
  rectangleIcon2: {
    height: "114.61%",
    width: "135.45%",
    right: "-35.45%",
    bottom: "-14.61%",
    left: "0%",
    top: "0%",
  },
  frame2: {
    height: "6.87%",
    width: "18.46%",
    top: "43.25%",
    right: "37.95%",
    bottom: "49.88%",
    left: "43.59%",
    position: "absolute",
    overflow: "hidden",
  },
  allCategoriesChild5: {
    bottom: "60.07%",
    top: "27.73%",
  },
  allCategoriesChild6: {
    bottom: "45.97%",
    top: "41.82%",
  },
  allCategoriesChild7: {
    bottom: "31.87%",
    top: "55.92%",
  },
  grocery: {
    left: "42.56%",
  },
  rectangleIcon3: {
    width: "116.13%",
    right: "-16.13%",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  frame3: {
    height: "5.92%",
    width: "14.36%",
    top: "29.38%",
    right: "41.03%",
    bottom: "64.69%",
    left: "44.62%",
    position: "absolute",
    overflow: "hidden",
  },
  salads: {
    left: "75.13%",
  },
  indian: {
    left: "75.64%",
  },
  diet: {
    left: "77.44%",
  },
  sweets: {
    left: "11.54%",
  },
  pizza: {
    left: "13.59%",
  },
  chinese: {
    left: "26.67%",
  },
  rectangleIcon4: {
    height: "123.26%",
    width: "154.49%",
    right: "-54.49%",
    bottom: "-23.26%",
    left: "0%",
    top: "0%",
  },
  frame4: {
    height: "3.67%",
    width: "17.69%",
    top: "31.16%",
    right: "7.69%",
    left: "74.62%",
  },
  new: {
    fontSize: FontSize.caption_size,
    color: Color.light100,
  },
  newWrapper: {
    marginLeft: 21,
    top: "41.23%",
    bottom: "55.21%",
    backgroundColor: Color.coral,
    padding: Padding.p_6xs,
    borderBottomRightRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    left: "50%",
  },
  newContainer: {
    width: "10.77%",
    top: "69.43%",
    right: "47.95%",
    bottom: "27.01%",
    left: "41.28%",
    backgroundColor: Color.coral,
    padding: Padding.p_6xs,
    borderBottomRightRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
  },
  favsWrapper: {
    marginLeft: 144.5,
    top: "55.33%",
    bottom: "41.11%",
    backgroundColor: "#4faff5",
    padding: Padding.p_6xs,
    borderBottomRightRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    borderTopLeftRadius: Border.br_sm,
    left: "50%",
  },
  image7Icon: {
    top: 370,
    width: 65,
    height: 42,
  },
  image8Icon: {
    top: 479,
    left: 46,
    width: 56,
    height: 56,
    position: "absolute",
  },
  image9Icon: {
    top: 494,
    left: 160,
    width: 71,
    height: 38,
    position: "absolute",
  },
  image10Icon: {
    top: 486,
    width: 70,
    height: 47,
  },
  image11Icon: {
    top: 605,
    left: 108,
    width: 51,
    height: 51,
    position: "absolute",
  },
  image12Icon: {
    top: 611,
    left: 220,
    width: 72,
    height: 40,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.gray_300,
    width: 390,
    height: 93,
    left: 0,
    top: 0,
    position: "absolute",
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
    color: Color.dark100,
    position: "absolute",
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
    right: 0,
    left: 0,
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
  allCategories: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default AllCategories;
