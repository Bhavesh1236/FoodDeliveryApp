import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const ChangeLocation = () => {
  return (
    <View style={styles.changeLocation}>
      <Image
        style={[styles.image3Icon, styles.basePosition1]}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <View style={styles.changeLocationChild} />
      <Text style={[styles.recents, styles.recentsTypo]}>Recents</Text>
      <View style={styles.clearAllWrapper}>
        <Text style={styles.clearAll}>CLEAR ALL</Text>
      </View>
      <Text style={[styles.editAddress, styles.recentsTypo]}>Edit Address</Text>
      <View style={styles.changeLocationItem} />
      <Image
        style={styles.closeIcon}
        resizeMode="cover"
        source={require("../assets/close.png")}
      />
      <View
        style={[styles.vuesaxlinearsearchNormalParent, styles.parentFlexBox]}
      >
        <Image
          style={styles.vuesaxlinearsearchNormalIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearsearchnormal.png")}
        />
        <Text style={[styles.lookForAn, styles.lookForAnTypo]}>
          Look for an Address
        </Text>
      </View>
      <Text style={[styles.savedLocations, styles.recentsTypo]}>
        Saved Locations
      </Text>
      <View style={[styles.changeLocationInner, styles.basePosition]} />
      <View style={[styles.frameView, styles.frameViewFlexBox]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.vuesaxlinearsearchNormalIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxboldgps.png")}
          />
          <Text style={[styles.useCurrentLocation, styles.recentsTypo]}>
            Use Current Location
          </Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View
          style={[styles.vuesaxboldlocationParent, styles.frameViewFlexBox]}
        >
          <Image
            style={styles.vuesaxboldlocationIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxboldlocation.png")}
          />
          <Text style={[styles.georgeAvenueBrampton, styles.lookForAnTypo]}>
            56, George Avenue, Brampton, ON
          </Text>
        </View>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-4.png")}
        />
      </View>
      <View style={styles.frameGroup}>
        <View
          style={[styles.vuesaxboldlocationParent, styles.frameViewFlexBox]}
        >
          <Image
            style={styles.vuesaxlinearsearchNormalIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxboldbuilding.png")}
          />
          <Text style={[styles.georgeAvenueBrampton, styles.lookForAnTypo]}>
            31244, King Street, Toronto, ON
          </Text>
        </View>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-4.png")}
        />
      </View>
      <View style={styles.frameContainer}>
        <View
          style={[styles.vuesaxboldlocationParent, styles.frameViewFlexBox]}
        >
          <Image
            style={styles.vuesaxlinearsearchNormalIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxboldhome.png")}
          />
          <Text
            style={[styles.georgeAvenueBrampton, styles.lookForAnTypo]}
          >{`34, George Avenue, Brampton,
ON L6T 8H6`}</Text>
        </View>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-4.png")}
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
    top: 0,
    left: 0,
  },
  recentsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.button,
    fontWeight: "500",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  lookForAnTypo: {
    lineHeight: 23,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.button,
    letterSpacing: -0.2,
    flex: 1,
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  frameViewFlexBox: {
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    flexDirection: "row",
  },
  image3Icon: {
    width: 390,
    left: 0,
    position: "absolute",
    height: 844,
  },
  changeLocationChild: {
    top: 54,
    borderRadius: Border.br_11xl,
    height: 790,
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.light100,
  },
  recents: {
    top: 410,
    color: Color.dark100,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.subtitle2_size,
    textAlign: "left",
    left: 21,
    position: "absolute",
  },
  clearAll: {
    fontSize: FontSize.caption_size,
    letterSpacing: 0.2,
    lineHeight: 16,
    color: Color.systemRed100,
    textAlign: "right",
    fontFamily: FontFamily.button,
    fontWeight: "500",
  },
  clearAllWrapper: {
    top: 404,
    left: 287,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  editAddress: {
    top: 94,
    fontSize: FontSize.subtitle1_size,
    lineHeight: 36,
    color: Color.dark100,
    left: 21,
    textAlign: "left",
    position: "absolute",
  },
  changeLocationItem: {
    top: 64,
    left: 167,
    borderRadius: Border.br_21xl,
    width: 55,
    height: 6,
    backgroundColor: Color.light80,
    position: "absolute",
  },
  closeIcon: {
    top: 70,
    left: 331,
    width: 43,
    height: 43,
    position: "absolute",
  },
  vuesaxlinearsearchNormalIcon: {
    width: 24,
    height: 24,
  },
  lookForAn: {
    color: Color.dark60,
    marginLeft: 10,
  },
  vuesaxlinearsearchNormalParent: {
    top: 138,
    borderRadius: Border.br_sm,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    width: 348,
    left: 21,
    position: "absolute",
    backgroundColor: Color.light80,
  },
  savedLocations: {
    top: 211,
    color: Color.dark100,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.subtitle2_size,
    textAlign: "left",
    left: 21,
    position: "absolute",
  },
  changeLocationInner: {
    backgroundColor: Color.gray_200,
    height: 112,
    width: 390,
    left: 0,
  },
  useCurrentLocation: {
    fontSize: FontSize.button_size,
    lineHeight: 18,
    color: Color.light100,
    marginLeft: 7,
  },
  frameView: {
    bottom: 30,
    borderRadius: Border.br_lg,
    backgroundColor: Color.blue100,
    paddingVertical: Padding.p_xl,
    justifyContent: "center",
    width: 348,
    left: 21,
    position: "absolute",
  },
  vuesaxboldlocationIcon: {
    width: 28,
    height: 28,
  },
  georgeAvenueBrampton: {
    marginLeft: 14,
    color: Color.dark100,
  },
  vuesaxboldlocationParent: {
    alignSelf: "stretch",
    height: 62,
    paddingTop: Padding.p_2xl,
    paddingBottom: Padding.p_lg,
  },
  frameChild: {
    height: 1,
    marginTop: 8,
    width: 390,
  },
  frameParent: {
    top: 448,
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    top: 319,
    left: 0,
    position: "absolute",
  },
  frameContainer: {
    top: 249,
    left: 0,
    position: "absolute",
  },
  base: {
    right: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorLightPrimary,
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
    right: 8,
    left: 7,
    height: 34,
    overflow: "hidden",
  },
  changeLocation: {
    borderRadius: Border.br_27xl,
    width: "100%",
    overflow: "hidden",
    height: 844,
    flex: 1,
    backgroundColor: Color.light100,
  },
});

export default ChangeLocation;
