import * as React from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CategoryPage = () => {
  return (
    <View style={styles.categoryPage}>
      <Text style={[styles.burgers, styles.backTypo]}>Burgers</Text>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.logoParent, styles.logoParentFlexBox]}>
          <View style={styles.logoLayout}>
            <View style={[styles.logoChild, styles.childPosition]} />
            <Image
              style={styles.image1Icon}
              resizeMode="cover"
              source={require("../assets/image-11.png")}
            />
          </View>
          <View style={styles.mcdonaldsParent}>
            <Text style={[styles.mcdonalds, styles.backTypo]}>McDonald’s</Text>
            <View
              style={[
                styles.queensRoadBramptonOnWrapper,
                styles.logoParentFlexBox,
              ]}
            >
              <Text style={[styles.queensRoadBrampton, styles.kfcTypo]}>
                18915 Queens Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={[
              styles.vuesaxlineararrowRightIcon,
              styles.vuesaxlineararrowIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameGroup, styles.frameParentPosition]}>
        <View style={[styles.logoParent, styles.logoParentFlexBox]}>
          <View style={styles.logoLayout}>
            <View style={[styles.logoChild, styles.childPosition]} />
            <Image
              style={styles.image1Icon}
              resizeMode="cover"
              source={require("../assets/image-11.png")}
            />
          </View>
          <View style={styles.mcdonaldsParent}>
            <Text style={[styles.mcdonalds, styles.backTypo]}>McDonald’s</Text>
            <View
              style={[
                styles.queensRoadBramptonOnWrapper,
                styles.logoParentFlexBox,
              ]}
            >
              <Text style={[styles.queensRoadBrampton, styles.kfcTypo]}>
                18915 Queens Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={[
              styles.vuesaxlineararrowRightIcon,
              styles.vuesaxlineararrowIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameContainer, styles.frameParentPosition]}>
        <View style={[styles.logoParent, styles.logoParentFlexBox]}>
          <View style={styles.logoLayout}>
            <View style={[styles.logoChild, styles.childPosition]} />
            <Image
              style={styles.image1Icon}
              resizeMode="cover"
              source={require("../assets/image-11.png")}
            />
          </View>
          <View style={styles.mcdonaldsParent}>
            <Text style={[styles.mcdonalds, styles.backTypo]}>McDonald’s</Text>
            <View
              style={[
                styles.queensRoadBramptonOnWrapper,
                styles.logoParentFlexBox,
              ]}
            >
              <Text style={[styles.queensRoadBrampton, styles.kfcTypo]}>
                18915 Queens Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={[
              styles.vuesaxlineararrowRightIcon,
              styles.vuesaxlineararrowIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameParentPosition]}>
        <View style={[styles.logoParent, styles.logoParentFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle10.png")}
            />
          </View>
          <View style={styles.frameParent2}>
            <View style={styles.bbqChickenBurgerWrapper}>
              <Text
                style={[styles.mcdonalds, styles.backTypo]}
              >{`BBQ Chicken Burger `}</Text>
            </View>
            <View style={[styles.logoParent1, styles.logoParentFlexBox]}>
              <ImageBackground
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../assets/logo.png")}
              >
                <View style={styles.image1} />
              </ImageBackground>
              <Text style={[styles.kfc, styles.kfcTypo]}>KFC</Text>
            </View>
          </View>
          <Image
            style={[
              styles.vuesaxlineararrowRightIcon3,
              styles.vuesaxlineararrowIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameParent3, styles.frameParentPosition]}>
        <View style={[styles.logoParent, styles.logoParentFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle10.png")}
            />
          </View>
          <View style={styles.frameParent2}>
            <View style={styles.bbqChickenBurgerWrapper}>
              <Text
                style={[styles.mcdonalds, styles.backTypo]}
              >{`BBQ Chicken Burger `}</Text>
            </View>
            <View style={[styles.logoParent1, styles.logoParentFlexBox]}>
              <ImageBackground
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../assets/logo.png")}
              >
                <View style={styles.image1} />
              </ImageBackground>
              <Text style={[styles.kfc, styles.kfcTypo]}>KFC</Text>
            </View>
          </View>
          <Image
            style={[
              styles.vuesaxlineararrowRightIcon3,
              styles.vuesaxlineararrowIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.categoryPageChild, styles.childPosition]} />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.logoLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition1]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.logoParentFlexBox]}>
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
          style={[styles.timeLight, styles.burgersPosition]}
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
  backTypo: {
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  frameParentPosition: {
    right: 1,
    left: 0,
    position: "absolute",
  },
  logoParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  childPosition: {
    top: 0,
    position: "absolute",
  },
  kfcTypo: {
    color: Color.darkslategray_200,
    lineHeight: 19,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  vuesaxlineararrowIconLayout: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  logoLayout: {
    height: 36,
    width: 36,
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
  burgersPosition: {
    left: 21,
    position: "absolute",
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  burgers: {
    top: 107,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    left: 21,
    position: "absolute",
  },
  logoChild: {
    backgroundColor: Color.firebrick,
    borderRadius: Border.br_31xl,
    height: 36,
    width: 36,
    left: 0,
  },
  image1Icon: {
    top: 11,
    left: 10,
    height: 14,
    width: 16,
    position: "absolute",
  },
  mcdonalds: {
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    lineHeight: 23,
    alignSelf: "stretch",
  },
  queensRoadBrampton: {
    flex: 1,
  },
  queensRoadBramptonOnWrapper: {
    marginTop: 1,
    alignSelf: "stretch",
  },
  mcdonaldsParent: {
    marginLeft: 10,
    flex: 1,
  },
  vuesaxlineararrowRightIcon: {
    marginLeft: 10,
  },
  logoParent: {
    paddingHorizontal: Padding.p_2xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_lg,
    alignSelf: "stretch",
  },
  frameChild: {
    height: 1,
    alignSelf: "stretch",
    width: "100%",
  },
  frameParent: {
    top: 349,
    left: 0,
  },
  frameGroup: {
    top: 434,
    left: 0,
  },
  frameContainer: {
    top: 519,
    left: 0,
  },
  rectangleIcon: {
    height: "100%",
    width: "133.98%",
    top: "0%",
    right: "-33.98%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  frame: {
    width: 106,
    height: 49,
    overflow: "hidden",
  },
  bbqChickenBurgerWrapper: {
    alignSelf: "stretch",
  },
  image1: {
    width: 9,
    height: 8,
  },
  logoIcon: {
    paddingHorizontal: 6,
    paddingVertical: 7,
    borderRadius: Border.br_31xl,
  },
  kfc: {
    marginLeft: 5,
  },
  logoParent1: {
    marginTop: 3,
    alignSelf: "stretch",
  },
  frameParent2: {
    marginLeft: 9,
    alignSelf: "stretch",
    flex: 1,
  },
  vuesaxlineararrowRightIcon3: {
    marginLeft: 9,
  },
  frameView: {
    top: 258,
    left: 0,
  },
  frameParent3: {
    top: 167,
    left: 0,
  },
  categoryPageChild: {
    backgroundColor: Color.gray_300,
    width: 390,
    height: 93,
    left: 0,
  },
  vuesaxlineararrowLeftIcon: {
    top: 45,
    left: 21,
    position: "absolute",
  },
  back: {
    top: 56,
    left: 58,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    fontWeight: "500",
    position: "absolute",
  },
  notchIcon: {
    height: 30,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
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
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorLightPrimary,
    right: 0,
    top: 0,
    left: 0,
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
  categoryPage: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default CategoryPage;
