import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const RestaurantMenu = () => {
  return (
    <View style={styles.restaurantMenu}>
      <Text style={styles.mcdonalds}>McDonald’s</Text>
      <Text style={styles.bramleaSandalwood}>{`Bramlea & Sandalwood`}</Text>
      <Image
        style={styles.vuesaxlinearlocationIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlinearlocation.png")}
      />
      <View style={styles.logo}>
        <View style={styles.logoChild} />
        <Image
          style={[styles.image1Icon, styles.image1IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.rectangleIcon, styles.rectangleIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle6.png")}
            />
          </View>
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text style={styles.classicCheeseBurger}>
              Classic Cheese Burger (400 Cals)
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <View style={[styles.frameContainer, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.rectangleIcon1, styles.rectangleIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle7.png")}
            />
          </View>
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text style={styles.classicCheeseBurger}>
              Simply Cheese with Sesame Seed buns
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$4.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$3.59</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <View style={[styles.frameParent1, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={[styles.frame2, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon2, styles.rectangleIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle8.png")}
            />
          </View>
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text
              style={styles.classicCheeseBurger}
            >{`Veggie & Bacon Hot Sauce Sandwich `}</Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$6.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$5.59</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <View style={[styles.frameParent3, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon3, styles.rectangleIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle9.png")}
            />
          </View>
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text style={styles.classicCheeseBurger}>
              Western BBQ Cheeseburger
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <View style={[styles.frameParent5, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={[styles.frame4, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon4, styles.rectangleIconLayout]}
              resizeMode="cover"
            />
          </View>
          <View style={styles.classicCheeseBurger400CalParent}>
            <Text style={styles.classicCheeseBurger}>
              Bacon and Veggies Salad
            </Text>
            <View style={[styles.parent, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textTypo]}>$5.89</Text>
              <Text style={[styles.text1, styles.textTypo]}>$4.59</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.notchIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
      </View>
      <View
        style={[styles.restaurantMenuChild, styles.lunchDinnerParentLayout]}
      />
      <View
        style={[styles.lunchDinnerParent, styles.lunchDinnerParentPosition]}
      >
        <Text style={styles.lunchDinner}>{`Lunch & Dinner`}</Text>
        <Text style={[styles.breakfastMenu, styles.menuTypo]}>
          Breakfast Menu
        </Text>
        <Text style={[styles.overnightMenu, styles.menuTypo]}>
          Overnight Menu
        </Text>
        <View style={[styles.rectangleView, styles.backPosition]} />
      </View>
      <View style={styles.vuesaxboldheartWrapper}>
        <Image
          style={styles.vuesaxboldheartIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldheart.png")}
        />
      </View>
      <View style={styles.frameParent7}>
        <View style={[styles.todaysDealsWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.todaysDeals, styles.backTypo]}>
            Today’s Deals
          </Text>
        </View>
        <View style={[styles.burgerMealsWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.burgerMeals, styles.backTypo]}>
            Burger Meals
          </Text>
        </View>
        <View style={[styles.chickenFishWrapper, styles.wrapperFlexBox]}>
          <Text
            style={[styles.burgerMeals, styles.backTypo]}
          >{`Chicken & Fish`}</Text>
        </View>
        <View style={[styles.beveragesWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.burgerMeals, styles.backTypo]}>Beverages</Text>
        </View>
        <View style={[styles.sidesWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.burgerMeals, styles.backTypo]}>Sides</Text>
        </View>
      </View>
      <View
        style={[styles.restaurantMenuItem, styles.lunchDinnerParentPosition]}
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
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={[styles.restaurantMenuInner, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/frame-113.png")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
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
  image1IconPosition: {
    top: 16,
    position: "absolute",
  },
  frameParentPosition: {
    right: 0,
    left: 0,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  notchIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameLayout: {
    width: 108,
    overflow: "hidden",
  },
  lunchDinnerParentLayout: {
    height: 59,
    top: 181,
  },
  lunchDinnerParentPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  menuTypo: {
    color: Color.dark60,
    lineHeight: 21,
    top: 18,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  backPosition: {
    top: 56,
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_31xl,
    top: 0,
    position: "absolute",
  },
  backTypo: {
    lineHeight: 16,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.button,
  },
  iconLayout: {
    height: 36,
    width: 36,
    top: 45,
    position: "absolute",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  mcdonalds: {
    top: 110,
    fontSize: FontSize.subtitle1_size,
    letterSpacing: -1.2,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.button,
    color: Color.dark100,
    left: 84,
    position: "absolute",
  },
  bramleaSandalwood: {
    top: 140,
    left: 101,
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.1,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  vuesaxlinearlocationIcon: {
    top: 145,
    width: 13,
    height: 13,
    left: 84,
    position: "absolute",
  },
  logoChild: {
    backgroundColor: Color.firebrick,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    height: 50,
    width: 50,
    position: "absolute",
  },
  image1Icon: {
    left: 14,
    height: 19,
    width: 22,
  },
  logo: {
    top: 112,
    height: 50,
    width: 50,
    left: 21,
    position: "absolute",
  },
  rectangleIcon: {
    width: "120.76%",
    right: "-20.76%",
    left: "0%",
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  frame: {
    width: 98,
    height: 41,
    overflow: "hidden",
  },
  classicCheeseBurger: {
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    alignSelf: "stretch",
    lineHeight: 23,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  text: {
    textDecoration: "line-through",
    color: Color.dark100,
  },
  text1: {
    fontWeight: "700",
    color: Color.blue100,
    marginLeft: 9,
  },
  parent: {
    marginTop: 1,
    alignSelf: "stretch",
  },
  classicCheeseBurger400CalParent: {
    marginLeft: 10,
    flex: 1,
  },
  vuesaxlineararrowRightIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
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
    top: 307,
    position: "absolute",
  },
  rectangleIcon1: {
    height: "97.56%",
    width: "139.8%",
    top: "1.22%",
    right: "-39.8%",
    bottom: "1.22%",
    left: "0%",
    maxHeight: "100%",
  },
  frameContainer: {
    top: 414,
    position: "absolute",
  },
  rectangleIcon2: {
    height: "70.27%",
    width: "108.33%",
    top: "13.51%",
    right: "-8.33%",
    bottom: "16.22%",
    left: "0%",
    maxHeight: "100%",
  },
  frame2: {
    height: 37,
  },
  frameParent1: {
    top: 521,
    position: "absolute",
  },
  rectangleIcon3: {
    width: "100.93%",
    right: "-11.11%",
    left: "10.19%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  frame3: {
    height: 40,
  },
  frameParent3: {
    top: 628,
    position: "absolute",
  },
  rectangleIcon4: {
    right: "0%",
    left: "0%",
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  frame4: {
    height: 23,
  },
  frameParent5: {
    top: 735,
    position: "absolute",
  },
  restaurantMenuChild: {
    backgroundColor: Color.light80,
    right: 0,
    left: 0,
    position: "absolute",
  },
  lunchDinner: {
    left: 168,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 21,
    top: 18,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  breakfastMenu: {
    left: 22,
  },
  overnightMenu: {
    right: -40,
  },
  rectangleView: {
    right: 102,
    left: 162,
    backgroundColor: Color.dark100,
    height: 3,
  },
  lunchDinnerParent: {
    height: 59,
    top: 181,
  },
  vuesaxboldheartIcon: {
    height: 22,
    width: 22,
  },
  vuesaxboldheartWrapper: {
    bottom: 689,
    left: 319,
    borderRadius: Border.br_81xl,
    padding: Padding.p_lg,
    justifyContent: "center",
    backgroundColor: Color.light80,
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: 50,
    position: "absolute",
  },
  todaysDeals: {
    color: Color.light100,
    letterSpacing: -0.1,
    lineHeight: 16,
  },
  todaysDealsWrapper: {
    backgroundColor: Color.dark90,
    left: 0,
    paddingHorizontal: Padding.p_sm,
  },
  burgerMeals: {
    color: Color.dark801,
    letterSpacing: -0.1,
    lineHeight: 16,
  },
  burgerMealsWrapper: {
    left: 123,
    backgroundColor: Color.light80,
  },
  chickenFishWrapper: {
    left: 243,
    backgroundColor: Color.light80,
  },
  beveragesWrapper: {
    left: 373,
    backgroundColor: Color.light80,
  },
  sidesWrapper: {
    left: 476,
    backgroundColor: Color.light80,
  },
  frameParent7: {
    top: 258,
    width: 369,
    height: 40,
    left: 21,
    position: "absolute",
  },
  restaurantMenuItem: {
    backgroundColor: Color.gray_300,
    height: 93,
    top: 0,
  },
  cartIcon: {
    right: 21,
  },
  vuesaxlineararrowLeftIcon: {
    left: 21,
  },
  vuesaxlinearmoreSquareIcon: {
    right: 125,
  },
  back: {
    left: 58,
    top: 56,
    position: "absolute",
    color: Color.dark100,
  },
  restaurantMenuInner: {
    right: 73,
  },
  notchIcon: {
    height: 30,
    right: 0,
    left: 0,
    top: 0,
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
    right: 14,
    top: 16,
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
  restaurantMenu: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default RestaurantMenu;
