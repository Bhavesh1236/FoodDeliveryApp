import * as React from "react";
import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <Text style={[styles.search1, styles.backFlexBox]}>Search</Text>
      <View
        style={[styles.vuesaxlinearsearchNormalParent, styles.parentFlexBox]}
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
      <View style={[styles.keyboard, styles.keyboardPosition]}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
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
            source={require("../assets/emoji1.png")}
          />
          <View style={[styles.return, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Go</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle2.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={[styles.keyLight, styles.keyLightPosition]}>
              <Image
                style={[styles.rectangleIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle3.png")}
              />
              <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
              resizeMode="cover"
              source={require("../assets/delete-button1.png")}
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
            <Text style={[styles.symbol7, styles.symbolTypo]}>Z</Text>
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
            <Text style={[styles.symbol7, styles.symbolTypo]}>S</Text>
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
            <Text style={[styles.symbol3, styles.symbolTypo]}>R</Text>
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
      <Text style={[styles.recentlySearched, styles.filterTypo]}>
        Recently Searched
      </Text>
      <View style={styles.clearAllWrapper}>
        <Text style={[styles.clearAll, styles.backTypo]}>CLEAR ALL</Text>
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.rectangleIcon4, styles.keyLightPosition]}
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
            <View style={[styles.logoParent, styles.parentFlexBox]}>
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
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={styles.logoLayout}>
            <Image
              style={[styles.logoChild, styles.keyLightPosition]}
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
            <View
              style={[
                styles.bramleaRoadBramptonOnWrapper,
                styles.parentFlexBox,
              ]}
            >
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
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
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
            <View
              style={[
                styles.bramleaRoadBramptonOnWrapper,
                styles.parentFlexBox,
              ]}
            >
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
      <View style={[styles.vuesaxlinearsetting3Parent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxlineararrowIconLayout}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearsetting3.png")}
        />
        <Text style={[styles.filter, styles.filterTypo]}>Filter</Text>
      </View>
      <View style={[styles.searchChild, styles.keyboardPosition]} />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.logoLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <View style={styles.statusBar}>
        <Image
          style={[styles.notchIcon, styles.notchIconLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  backFlexBox: {
    textAlign: "left",
    color: Color.dark100,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  bbqChickenBurgerTypo: {
    lineHeight: 23,
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  keyboardPosition: {
    left: 0,
    position: "absolute",
  },
  viewPosition: {
    bottom: "21.24%",
    top: "62.55%",
    height: "16.22%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  labelTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: "26.19%",
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
    position: "absolute",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -12.94,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
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
    top: "0%",
    height: "16.22%",
    position: "absolute",
  },
  filterTypo: {
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  backTypo: {
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.button,
  },
  frameParentPosition: {
    right: 0,
    left: 0,
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
  notchIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  logoLayout: {
    height: 36,
    width: 36,
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  timeLightPosition: {
    left: 21,
    position: "absolute",
  },
  search1: {
    top: 104,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    fontFamily: FontFamily.button,
    textAlign: "left",
    left: 21,
  },
  searchFoodRestaurants: {
    color: Color.dark60,
    marginLeft: 10,
    flex: 1,
  },
  vuesaxlinearsearchNormalParent: {
    top: 161,
    borderRadius: Border.br_sm,
    backgroundColor: Color.light80,
    width: 347,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    left: 21,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    left: 1,
    height: 34,
    bottom: 0,
    right: -1,
    position: "absolute",
  },
  dictationIcon: {
    height: 26,
    width: 16,
  },
  emojiIcon: {
    width: 28,
    height: 28,
  },
  rectangleIcon: {
    bottom: -1,
    borderRadius: Border.br_8xs_6,
    maxHeight: "100%",
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
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
    top: 0,
    bottom: 0,
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
    position: "absolute",
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
  symbol7: {
    left: "28.12%",
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
    right: -1,
    left: 0,
  },
  recentlySearched: {
    top: 233,
    fontSize: FontSize.subtitle2_size,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontWeight: "500",
    color: Color.dark100,
    left: 21,
    position: "absolute",
  },
  clearAll: {
    fontSize: FontSize.caption_size,
    letterSpacing: 0.2,
    color: Color.systemRed100,
    textAlign: "right",
  },
  clearAllWrapper: {
    top: 228,
    left: 286,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  rectangleIcon4: {
    width: "133.98%",
    right: "-33.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frame: {
    width: 106,
    height: 49,
    overflow: "hidden",
  },
  bbqChickenBurger: {
    alignSelf: "stretch",
    color: Color.dark100,
    fontSize: FontSize.body_size,
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
    top: 275,
  },
  logoChild: {
    borderRadius: Border.br_31xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: "0%",
    width: "100%",
  },
  bramleaRoadBrampton: {
    flex: 1,
  },
  bramleaRoadBramptonOnWrapper: {
    marginTop: 1,
    alignSelf: "stretch",
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
  },
  logoItem: {
    backgroundColor: Color.firebrick,
    borderRadius: Border.br_31xl,
    top: 0,
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
  },
  filter: {
    fontSize: FontSize.button_size,
    lineHeight: 18,
    color: Color.pink100,
    marginLeft: 6,
  },
  vuesaxlinearsetting3Parent: {
    top: 103,
    left: 274,
    borderRadius: Border.br_xs,
    backgroundColor: Color.pink,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    position: "absolute",
  },
  searchChild: {
    backgroundColor: Color.gray_300,
    width: 390,
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
    textAlign: "left",
    color: Color.dark100,
    position: "absolute",
  },
  notchIcon: {
    height: 30,
    right: 0,
    left: 0,
    position: "absolute",
    top: 0,
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
    right: 7,
    left: 7,
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Search;
