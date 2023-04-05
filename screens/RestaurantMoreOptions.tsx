import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const RestaurantMoreOptions = () => {
  return (
    <View style={styles.restaurantMoreOptions}>
      <Image
        style={[styles.image2Icon, styles.image6Position]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={[styles.image6, styles.image6Position]} />
      <View
        style={[styles.restaurantMoreOptionsChild, styles.image6Position]}
      />
      <View style={styles.icon}>
        <View style={styles.iconInner}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-36322.png")}
          />
        </View>
      </View>
      <View style={[styles.vuesaxboldsend2Parent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxboldsend2Icon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldsend2.png")}
        />
        <Text style={styles.shareTo}>Share to...</Text>
      </View>
      <View style={[styles.vuesaxboldinfoCircleParent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxboldsend2Icon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldinfocircle.png")}
        />
        <Text style={styles.shareTo}>Report Store</Text>
      </View>
      <View style={[styles.vuesaxboldheartAddParent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxboldsend2Icon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldheartadd.png")}
        />
        <Text style={styles.shareTo}>Add to Favourites</Text>
      </View>
      <View style={[styles.vuesaxboldprofile2userParent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxboldsend2Icon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldprofile2user.png")}
        />
        <Text style={styles.shareTo}>Order with Friends</Text>
      </View>
      <Image
        style={[styles.restaurantMoreOptionsItem, styles.restaurantLayout]}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={[styles.restaurantMoreOptionsInner, styles.restaurantLayout]}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.restaurantLayout]}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={styles.statusBar}>
        <Image
          style={[styles.notchIcon, styles.basePosition1]}
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
            source={require("../assets/wifi-signal--dark.png")}
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
          style={styles.timeDark}
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
  image6Position: {
    left: 0,
    width: 390,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  restaurantLayout: {
    height: 1,
    width: 390,
    left: 0,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 6,
    position: "absolute",
  },
  basePosition1: {
    right: 0,
    left: 0,
    top: 0,
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  image2Icon: {
    height: 851,
    width: 390,
    top: 0,
  },
  image6: {
    backgroundColor: Color.darkslategray_100,
    width: 390,
    top: 0,
    height: 844,
  },
  restaurantMoreOptionsChild: {
    top: 519,
    borderRadius: Border.br_11xl,
    height: 325,
    width: 390,
    backgroundColor: Color.light100,
  },
  frameChild: {
    width: 12,
    height: 12,
  },
  iconInner: {
    borderRadius: 28,
    padding: Padding.p_base,
    backgroundColor: Color.light80,
    flexDirection: "row",
  },
  icon: {
    top: 528,
    left: 329,
    padding: 5,
    flexDirection: "row",
    position: "absolute",
  },
  vuesaxboldsend2Icon: {
    width: 24,
    height: 24,
  },
  shareTo: {
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    lineHeight: 23,
    fontFamily: FontFamily.button,
    color: Color.dark100,
    textAlign: "left",
    marginLeft: 12,
  },
  vuesaxboldsend2Parent: {
    top: 713,
    left: 21,
  },
  vuesaxboldinfoCircleParent: {
    top: 779,
    left: 21,
  },
  vuesaxboldheartAddParent: {
    top: 647,
    left: 21,
  },
  vuesaxboldprofile2userParent: {
    top: 581,
    left: 21,
  },
  restaurantMoreOptionsItem: {
    top: 758,
  },
  restaurantMoreOptionsInner: {
    top: 692,
  },
  vectorIcon: {
    top: 626,
  },
  rectangleView: {
    top: 529,
    left: 167,
    borderRadius: Border.br_21xl,
    width: 55,
    backgroundColor: Color.light80,
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
    position: "absolute",
    overflow: "hidden",
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
    marginLeft: 4,
    height: 12,
  },
  statusIcons: {
    top: 16,
    right: 14,
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
  },
  timeDark: {
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
    top: 0,
    position: "absolute",
    overflow: "hidden",
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
    marginLeft: -195,
    left: "50%",
    height: 34,
    width: 390,
    overflow: "hidden",
  },
  restaurantMoreOptions: {
    borderRadius: Border.br_27xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.light100,
  },
});

export default RestaurantMoreOptions;
