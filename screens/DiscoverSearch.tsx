import * as React from "react";
import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const DiscoverSearch = () => {
  return (
    <View style={styles.discoverSearch}>
      <Text style={[styles.discover, styles.backTypo]}>Discover</Text>
      <View
        style={[styles.vuesaxlinearsearchNormalParent, styles.discoverPosition]}
      >
        <Image
          style={styles.vuesaxlineararrowIconLayout}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearsearchnormal.png")}
        />
        <Text
          style={[styles.searchFoodRestaurants, styles.bbqChickenBurgerTypo]}
        >
          Search Food, Restaurants etc.
        </Text>
      </View>
      <View style={[styles.vuesaxlinearsetting3Parent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxlineararrowIconLayout}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearsetting3.png")}
        />
        <Text style={[styles.filter, styles.backTypo]}>Filter</Text>
      </View>
      <Text style={styles.recommended}>Recommended</Text>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle10.png")}
            />
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.bbqChickenBurgerWrapper}>
              <Text
                style={[styles.bbqChickenBurger, styles.bbqChickenBurgerTypo]}
              >{`BBQ Chicken Burger `}</Text>
            </View>
            <View style={styles.logoParent}>
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
              styles.vuesaxlineararrowRightIcon,
              styles.vuesaxlineararrowIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <View style={styles.logoLayout}>
            <Image
              style={[styles.logoChild, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-1156.png")}
            />
          </View>
          <View style={styles.kfcParent}>
            <Text
              style={[styles.bbqChickenBurger, styles.bbqChickenBurgerTypo]}
            >
              KFC
            </Text>
            <View style={styles.bramleaRoadBramptonOnWrapper}>
              <Text style={[styles.bramleaRoadBrampton, styles.kfcTypo]}>
                10565 Bramlea Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={[
              styles.vuesaxlineararrowRightIcon1,
              styles.vuesaxlineararrowIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.frameParent1, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.frameFlexBox]}>
          <View style={styles.logoLayout}>
            <View style={[styles.logoItem, styles.logoLayout]} />
            <Image
              style={styles.image1Icon}
              resizeMode="cover"
              source={require("../assets/image-11.png")}
            />
          </View>
          <View style={styles.kfcParent}>
            <Text
              style={[styles.bbqChickenBurger, styles.bbqChickenBurgerTypo]}
            >
              McDonald’s
            </Text>
            <View style={styles.bramleaRoadBramptonOnWrapper}>
              <Text style={[styles.bramleaRoadBrampton, styles.kfcTypo]}>
                18915 Queens Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={[
              styles.vuesaxlineararrowRightIcon1,
              styles.vuesaxlineararrowIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.discoverSearchChild, styles.keyboardPosition]} />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.logoLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <View style={[styles.frameParent2, styles.keyboardPosition]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.vuesaxlineararrowIconLayout}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearhome2.png")}
          />
          <Text style={styles.homeTypo}>Home</Text>
        </View>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.vuesaxlineararrowIconLayout}
            resizeMode="cover"
            source={require("../assets/vuesaxbolddiscover.png")}
          />
          <Text style={[styles.discover1, styles.homeTypo]}>Discover</Text>
          <Image
            style={styles.vuesaxlineardiscoverChild}
            resizeMode="cover"
            source={require("../assets/ellipse-768.png")}
          />
        </View>
        <View style={styles.vuesaxlinearcarParent}>
          <Image
            style={styles.vuesaxlineararrowIconLayout}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearcar.png")}
          />
          <Text style={styles.homeTypo}>Drivethru</Text>
        </View>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.vuesaxlineararrowIconLayout}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearreceipt.png")}
          />
          <Text style={styles.homeTypo}>Orders</Text>
        </View>
        <View style={styles.parentFlexBox}>
          <Image
            style={[styles.frameChild1, styles.vuesaxlineararrowIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-11561.png")}
          />
          <Text style={styles.homeTypo}>Profile</Text>
        </View>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition]}
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
            source={require("../assets/wifi-signal--light.png")}
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
          style={[styles.timeLight, styles.discoverPosition]}
          resizeMode="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.bar, styles.barPosition]}>
          <View style={[styles.base, styles.baseBg]} />
        </View>
      </View>
      <View style={[styles.keyboard, styles.keyboardPosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]}>
          <View style={[styles.homeIndicator2, styles.baseBg]} />
        </View>
        <View style={styles.keys}>
          <Image
            style={styles.dictationIcon}
            resizeMode="cover"
            source={require("../assets/dictation.png")}
          />
          <Image
            style={styles.emojiIcon}
            resizeMode="cover"
            source={require("../assets/emoji.png")}
          />
          <View style={[styles.return, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Go</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle2.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={[styles.keyLight, styles.keyLightPosition]}>
              <Image
                style={styles.rectangleIcon1}
                resizeMode="cover"
                source={require("../assets/rectangle3.png")}
              />
              <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
              resizeMode="cover"
              source={require("../assets/delete-button2.png")}
            />
          </View>
          <View style={[styles.shift, styles.shiftPosition]}>
            <View style={[styles.keyLight, styles.keyLightPosition]}>
              <View style={styles.rectangleShadowBox} />
              <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
            </View>
            <Image
              style={[styles.shiftIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/shift.png")}
            />
          </View>
          <View style={[styles.m, styles.mPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
          </View>
          <View style={[styles.n, styles.nPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
          </View>
          <View style={[styles.b, styles.bPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>B</Text>
          </View>
          <View style={[styles.v, styles.vPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
          </View>
          <View style={[styles.c, styles.cPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
          </View>
          <View style={[styles.x, styles.xPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>X</Text>
          </View>
          <View style={[styles.z, styles.zPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Z</Text>
          </View>
          <View style={[styles.l, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
          </View>
          <View style={[styles.k, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>K</Text>
          </View>
          <View style={[styles.j, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>J</Text>
          </View>
          <View style={[styles.h, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>H</Text>
          </View>
          <View style={[styles.g, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
          </View>
          <View style={[styles.f, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
          </View>
          <View style={[styles.d, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
          </View>
          <View style={[styles.s, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>S</Text>
          </View>
          <View style={[styles.a, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
          </View>
          <View style={[styles.p, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>P</Text>
          </View>
          <View style={[styles.o, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>O</Text>
          </View>
          <View style={[styles.i, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
          </View>
          <View style={[styles.u, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
          </View>
          <View style={[styles.y, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Y</Text>
          </View>
          <View style={[styles.t, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>T</Text>
          </View>
          <View style={[styles.r, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol23, styles.symbolTypo]}>R</Text>
          </View>
          <View style={[styles.e, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>E</Text>
          </View>
          <View style={[styles.w, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
          </View>
          <View style={[styles.q, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>Q</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backTypo: {
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  discoverPosition: {
    left: 21,
    position: "absolute",
  },
  bbqChickenBurgerTypo: {
    lineHeight: 23,
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameParentPosition: {
    left: 0,
    position: "absolute",
  },
  frameFlexBox: {
    paddingTop: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  notchIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  logoLayout: {
    height: 36,
    width: 36,
  },
  keyboardPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    fontSize: FontSize.caption_size,
    letterSpacing: -0.1,
    lineHeight: 23,
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  basePosition: {
    right: 0,
    top: 0,
    left: 0,
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  homePosition: {
    height: 34,
    bottom: 0,
    position: "absolute",
  },
  barPosition: {
    bottom: 8,
    height: 5,
  },
  baseBg: {
    backgroundColor: Color.labelColorLightPrimary,
    position: "absolute",
  },
  viewPosition: {
    bottom: "21.24%",
    top: "62.55%",
    height: "16.22%",
    position: "absolute",
  },
  labelTypo: {
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: "26.19%",
    textAlign: "center",
    left: 0,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.08%",
    top: "41.7%",
    width: "11.38%",
    height: "16.22%",
    position: "absolute",
  },
  keyLightPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -12.94,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  mPosition: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  nPosition: {
    left: "66.12%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.83%",
    right: "35.5%",
  },
  vPosition: {
    left: "45.8%",
    right: "45.53%",
  },
  cPosition: {
    left: "35.5%",
    right: "55.83%",
  },
  xPosition: {
    left: "25.47%",
    right: "65.85%",
  },
  zPosition: {
    left: "15.18%",
    right: "76.15%",
  },
  lPosition: {
    bottom: "62.93%",
    top: "20.85%",
    width: "8.67%",
    height: "16.22%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.78%",
    width: "8.67%",
    height: "16.22%",
    top: "0%",
    position: "absolute",
  },
  discover: {
    top: 104,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    color: Color.dark100,
    left: 21,
    position: "absolute",
  },
  searchFoodRestaurants: {
    color: Color.dark60,
    marginLeft: 10,
    flex: 1,
  },
  vuesaxlinearsearchNormalParent: {
    top: 161,
    borderRadius: Border.br_sm,
    width: 347,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.light80,
  },
  filter: {
    fontSize: FontSize.button_size,
    lineHeight: 18,
    color: Color.pink100,
    marginLeft: 6,
    fontWeight: "500",
  },
  vuesaxlinearsetting3Parent: {
    top: 103,
    left: 274,
    borderRadius: Border.br_xs,
    backgroundColor: Color.pink,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  recommended: {
    top: 233,
    fontSize: FontSize.subtitle2_size,
    lineHeight: 24,
    fontWeight: "500",
    letterSpacing: -0.2,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
    left: 21,
    position: "absolute",
  },
  rectangleIcon: {
    width: "133.98%",
    right: "-33.98%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  frame: {
    width: 106,
    height: 49,
    overflow: "hidden",
  },
  bbqChickenBurger: {
    alignSelf: "stretch",
    color: Color.dark100,
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
  logoParent: {
    marginTop: 3,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainer: {
    marginLeft: 9,
    alignSelf: "stretch",
    flex: 1,
  },
  vuesaxlineararrowRightIcon: {
    marginLeft: 9,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_2xl,
    paddingBottom: Padding.p_lg,
    alignSelf: "stretch",
  },
  frameChild: {
    height: 1,
    alignSelf: "stretch",
    width: "100%",
  },
  frameParent: {
    top: 275,
    right: 1,
    left: 0,
  },
  logoChild: {
    right: "0%",
    borderRadius: Border.br_31xl,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  bramleaRoadBrampton: {
    flex: 1,
  },
  bramleaRoadBramptonOnWrapper: {
    marginTop: 1,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  kfcParent: {
    marginLeft: 10,
    flex: 1,
  },
  vuesaxlineararrowRightIcon1: {
    marginLeft: 10,
  },
  frameView: {
    top: 366,
    right: 1,
    left: 0,
  },
  logoItem: {
    backgroundColor: Color.firebrick,
    top: 0,
    borderRadius: Border.br_31xl,
    left: 0,
    position: "absolute",
  },
  image1Icon: {
    top: 11,
    left: 10,
    height: 14,
    width: 16,
    position: "absolute",
  },
  frameParent1: {
    top: 451,
    right: 1,
    left: 0,
  },
  discoverSearchChild: {
    backgroundColor: Color.gray_300,
    height: 93,
    top: 0,
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
    color: Color.dark100,
    position: "absolute",
  },
  discover1: {
    fontWeight: "500",
  },
  vuesaxlineardiscoverChild: {
    width: 5,
    height: 5,
  },
  vuesaxlinearcarParent: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameChild1: {
    borderRadius: Border.br_31xl,
  },
  frameParent2: {
    paddingHorizontal: Padding.p_9xl,
    paddingBottom: Padding.p_13xl,
    justifyContent: "space-between",
    bottom: 0,
    paddingTop: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.light80,
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
    position: "absolute",
  },
  base: {
    borderRadius: Border.br_3xs,
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
  },
  bar: {
    right: 121,
    left: 120,
    position: "absolute",
  },
  homeIndicator: {
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  homeIndicator2: {
    marginLeft: -67,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    bottom: 8,
    height: 5,
  },
  homeIndicator1: {
    right: -1,
    left: 1,
  },
  dictationIcon: {
    height: 26,
    width: 16,
  },
  emojiIcon: {
    width: 28,
    height: 28,
  },
  rectangleIcon1: {
    bottom: -1,
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  label: {
    width: 92,
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label1: {
    width: 189,
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label2: {
    width: 90,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 44,
  },
  keyLight: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  deleteButtonIcon: {
    height: 18,
    width: 24,
  },
  delete: {
    left: "88.62%",
    right: "0%",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_8xs_6,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  symbol: {
    left: "48.07%",
  },
  shiftIcon: {
    height: "39.18%",
    width: "44.95%",
    top: "29.05%",
    right: "27.29%",
    bottom: "31.77%",
    left: "27.76%",
  },
  shift: {
    right: "88.62%",
    left: "0%",
  },
  symbol1: {
    left: "18.75%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
  },
  symbol2: {
    left: "25%",
  },
  n: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol3: {
    left: "28.13%",
  },
  b: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  v: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  c: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  x: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  z: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol8: {
    left: "31.25%",
  },
  l: {
    right: "4.88%",
    left: "86.45%",
  },
  k: {
    right: "15.18%",
    left: "76.15%",
  },
  j: {
    left: "66.12%",
    right: "25.2%",
  },
  h: {
    left: "55.83%",
    right: "35.5%",
  },
  g: {
    left: "45.8%",
    right: "45.53%",
  },
  f: {
    left: "35.5%",
    right: "55.83%",
  },
  d: {
    left: "25.47%",
    right: "65.85%",
  },
  s: {
    left: "15.18%",
    right: "76.15%",
  },
  a: {
    right: "86.18%",
    left: "5.15%",
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  symbol18: {
    left: "21.88%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  symbol19: {
    left: "40.63%",
  },
  i: {
    right: "20.33%",
    left: "71%",
  },
  u: {
    right: "30.35%",
    left: "60.98%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  symbol23: {
    left: "28.12%",
  },
  r: {
    right: "60.98%",
    left: "30.35%",
  },
  e: {
    right: "71%",
    left: "20.33%",
  },
  symbol25: {
    left: "15.63%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "89%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "8.25%",
    left: "0.8%",
    position: "absolute",
  },
  keyboard: {
    top: 540,
    backgroundColor: Color.lightgray,
    height: 304,
  },
  discoverSearch: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default DiscoverSearch;
