import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const RestaurantMoreInfo = () => {
  return (
    <View style={styles.restaurantMoreInfo}>
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={[styles.image6, styles.basePosition1]} />
      <View style={[styles.restaurantMoreInfoChild, styles.basePosition1]} />
      <Image
        style={[styles.restaurantMoreInfoItem, styles.notchIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-11611.png")}
      />
      <View
        style={[styles.restaurantMoreInfoInner, styles.rectangleViewLayout]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.moreInfo, styles.moreInfoTypo]}>More Info</Text>
      <View style={[styles.vuesaxboldlocationParent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxboldlocationIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldlocation2.png")}
        />
        <Text style={[styles.bramleaRoadBrampton, styles.rated45Typo]}>
          10565 Bramlea Road, Brampton, ON L6R 3P4
        </Text>
        <Image
          style={[styles.vuesaxlinearcopyIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearcopy.png")}
        />
      </View>
      <View style={[styles.vuesaxboldclockParent, styles.parentFlexBox]}>
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/vuesaxboldclock.png")}
        />
        <Text style={[styles.bramleaRoadBrampton, styles.rated45Typo]}>
          Open until 12:59 AM
        </Text>
      </View>
      <View style={[styles.starParent, styles.parentFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/star-21.png")}
        />
        <View style={styles.rated45Parent}>
          <Text style={[styles.rated45, styles.rated45Typo]}>Rated 4.5</Text>
          <Text style={styles.ratings}>(1,491 Ratings)</Text>
        </View>
      </View>
      <Image
        style={styles.closeIcon}
        resizeMode="cover"
        source={require("../assets/close2.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={styles.restaurantMoreInfoChild1}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-36329.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/rectangle-11632.png")}
        />
        <View style={[styles.logo, styles.logoLayout]}>
          <View style={[styles.logoChild, styles.logoLayout]} />
          <Image
            style={styles.image1Icon}
            resizeMode="cover"
            source={require("../assets/image-17.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.restaurantMoreInfoChild2, styles.restaurantChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={[styles.restaurantMoreInfoChild3, styles.restaurantChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={[styles.vuesaxboldrouting2Parent, styles.parentFlexBox]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/vuesaxboldrouting2.png")}
          />
          <Text style={[styles.getDirections, styles.miLayout]}>
            Get Directions
          </Text>
        </View>
        <Text style={[styles.mi, styles.miLayout]}>1.3 mi</Text>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.logoLayout]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.parentFlexBox]}>
          <Image
            style={styles.networkSignalDark}
            resizeMode="cover"
            source={require("../assets/network-signal--dark.png")}
          />
          <Image
            style={styles.wifiSignalDark}
            resizeMode="cover"
            source={require("../assets/wifi-signal--dark1.png")}
          />
          <Image
            style={styles.batteryDark}
            resizeMode="cover"
            source={require("../assets/battery--dark.png")}
          />
        </View>
        <Image
          style={[styles.indicatorIcon, styles.rectangleViewLayout]}
          resizeMode="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={[styles.timeDark, styles.parentPosition]}
          resizeMode="cover"
          source={require("../assets/time--dark.png")}
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
  basePosition1: {
    right: 0,
    left: 0,
  },
  notchIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleViewLayout: {
    height: 6,
    position: "absolute",
  },
  moreInfoTypo: {
    color: Color.dark100,
    fontWeight: "500",
    textAlign: "left",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rated45Typo: {
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  logoLayout: {
    height: 30,
    position: "absolute",
  },
  restaurantChildLayout: {
    height: 1,
    width: 390,
    left: 0,
    position: "absolute",
  },
  miLayout: {
    lineHeight: 18,
    fontFamily: FontFamily.button,
    flex: 1,
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  parentPosition: {
    left: 21,
    position: "absolute",
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  image2Icon: {
    height: 851,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image6: {
    backgroundColor: Color.darkslategray_100,
    top: 0,
    position: "absolute",
    height: 844,
  },
  restaurantMoreInfoChild: {
    top: 224,
    borderRadius: Border.br_11xl,
    height: 627,
    position: "absolute",
    backgroundColor: Color.light100,
  },
  restaurantMoreInfoItem: {
    top: 308,
    height: 193,
    borderRadius: Border.br_sm,
    left: 21,
    right: 21,
    position: "absolute",
  },
  restaurantMoreInfoInner: {
    left: 167,
    backgroundColor: "rgba(95, 114, 136, 0.12)",
    width: 55,
    borderRadius: Border.br_21xl,
    top: 234,
    height: 6,
  },
  rectangleView: {
    marginLeft: -28,
    left: "50%",
    backgroundColor: Color.light80,
    width: 55,
    borderRadius: Border.br_21xl,
    top: 234,
    height: 6,
  },
  moreInfo: {
    top: 264,
    fontSize: FontSize.subtitle1_size,
    letterSpacing: -0.7,
    lineHeight: 32,
    textAlign: "left",
    fontFamily: FontFamily.button,
    left: 21,
    position: "absolute",
  },
  vuesaxboldlocationIcon: {
    width: 28,
    height: 28,
  },
  bramleaRoadBrampton: {
    marginLeft: 12,
    flex: 1,
  },
  vuesaxlinearcopyIcon: {
    marginLeft: 12,
  },
  vuesaxboldlocationParent: {
    top: 517,
    right: 30,
    left: 21,
    position: "absolute",
  },
  vuesaxboldclockParent: {
    top: 684,
    left: 21,
    position: "absolute",
    right: 21,
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: 2,
    width: 27,
    height: 27,
  },
  rated45: {
    width: 127,
  },
  ratings: {
    fontSize: FontSize.size_smi,
    letterSpacing: -0.1,
    lineHeight: 19,
    color: Color.dark60,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  rated45Parent: {
    marginLeft: 10,
  },
  starParent: {
    top: 750,
    left: 21,
    position: "absolute",
    right: 21,
    flexDirection: "row",
  },
  closeIcon: {
    top: 240,
    right: 16,
    width: 43,
    height: 43,
    position: "absolute",
  },
  vectorIcon: {
    top: 414,
    left: 137,
    width: 147,
    height: 60,
    position: "absolute",
  },
  restaurantMoreInfoChild1: {
    top: 415,
    left: 138,
    width: 144,
    height: 57,
    position: "absolute",
  },
  groupIcon: {
    top: 454,
    left: 109,
    width: 40,
    height: 40,
    position: "absolute",
  },
  groupChild: {
    top: -10,
    left: -14,
    width: 74,
    height: 77,
    position: "absolute",
  },
  logoChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.firebrick,
    width: 30,
    height: 30,
    left: 0,
    top: 0,
  },
  image1Icon: {
    top: 9,
    width: 13,
    height: 11,
    left: 8,
    position: "absolute",
  },
  logo: {
    width: 30,
    height: 30,
    left: 8,
    top: 8,
  },
  vectorParent: {
    top: 368,
    left: 258,
    width: 46,
    height: 51,
    position: "absolute",
  },
  restaurantMoreInfoChild2: {
    top: 663,
  },
  restaurantMoreInfoChild3: {
    top: 729,
  },
  getDirections: {
    fontSize: FontSize.button_size,
    marginLeft: 7,
    textAlign: "left",
    color: Color.dark100,
    fontWeight: "500",
  },
  vuesaxboldrouting2Parent: {
    width: 158,
  },
  mi: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.blue100,
    textAlign: "right",
  },
  frameParent: {
    top: 577,
    borderStyle: "solid",
    borderColor: "#292d32",
    borderWidth: 1.5,
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_2xl,
    justifyContent: "center",
    borderRadius: Border.br_sm,
    left: 21,
    right: 21,
    position: "absolute",
  },
  notchIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    right: 0,
    left: 0,
    top: 0,
  },
  networkSignalDark: {
    width: 20,
    height: 14,
  },
  wifiSignalDark: {
    width: 16,
    marginLeft: 4,
    height: 14,
  },
  batteryDark: {
    width: 25,
    height: 12,
    marginLeft: 4,
  },
  statusIcons: {
    top: 16,
    right: 14,
    position: "absolute",
  },
  indicatorIcon: {
    right: 71,
    width: 6,
    top: 8,
  },
  timeDark: {
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
  restaurantMoreInfo: {
    borderRadius: Border.br_27xl,
    width: "100%",
    overflow: "hidden",
    height: 844,
    flex: 1,
    backgroundColor: Color.light100,
  },
});

export default RestaurantMoreInfo;
