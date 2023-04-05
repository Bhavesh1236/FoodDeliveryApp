import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const Restaurant = () => {
  return (
    <View style={styles.restaurant}>
      <Image
        style={[styles.restaurantChild, styles.frameChildLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-1154.png")}
      />
      <Text style={styles.mcdonalds}>McDonald’s</Text>
      <View style={styles.vuesaxboldheartWrapper}>
        <Image
          style={styles.vuesaxboldheartIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldheart.png")}
        />
      </View>
      <Text
        style={[styles.bramleaSandalwood, styles.bramleaSandalwoodTypo]}
      >{`Bramlea & Sandalwood`}</Text>
      <Image
        style={styles.vuesaxlinearlocationIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlinearlocation2.png")}
      />
      <View style={styles.logo}>
        <View style={styles.logoChild} />
        <Image
          style={styles.image1Icon}
          resizeMode="cover"
          source={require("../assets/image-16.png")}
        />
      </View>
      <View style={styles.restaurantItem} />
      <Image
        style={styles.restaurantInner}
        resizeMode="cover"
        source={require("../assets/star-2.png")}
      />
      <Text style={[styles.ratings45, styles.backTypo1]}>Ratings: 4.5</Text>
      <Text style={[styles.deliversIn1520, styles.backTypo1]}>
        Delivers in 15-20 min
      </Text>
      <Text style={[styles.burgers, styles.backTypo1]}>Burgers</Text>
      <Image
        style={styles.vuesaxboldelement2Icon}
        resizeMode="cover"
        source={require("../assets/vuesaxboldelement2.png")}
      />
      <Image
        style={styles.vuesaxboldboxTimeIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxboldboxtime.png")}
      />
      <View style={[styles.rectangleView, styles.frameParentPosition]} />
      <Text
        style={[styles.lunchDinner, styles.backTypo]}
      >{`Lunch & Dinner`}</Text>
      <Text style={[styles.breakfastMenu, styles.menuTypo]}>
        Breakfast Menu
      </Text>
      <Text style={[styles.overnightMenu, styles.menuTypo]}>
        Overnight Menu
      </Text>
      <View style={styles.restaurantChild1} />
      <Image
        style={styles.moreInfoIcon}
        resizeMode="cover"
        source={require("../assets/more-info1.png")}
      />
      <View style={[styles.todaysDealsWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.todaysDeals, styles.backTypo]}>Today’s Deals</Text>
      </View>
      <View style={[styles.burgerMealsWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.burgerMeals, styles.backTypo]}>Burger Meals</Text>
      </View>
      <View style={[styles.chickenFishWrapper, styles.wrapperFlexBox]}>
        <Text
          style={[styles.burgerMeals, styles.backTypo]}
        >{`Chicken & Fish`}</Text>
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
          <View style={styles.classicCheeseHamburger400Parent}>
            <Text
              style={[
                styles.classicCheeseHamburger,
                styles.bramleaSandalwoodTypo,
              ]}
            >
              Classic Cheese Hamburger (400 Cals)
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
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-4.png")}
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
          <View style={styles.classicCheeseHamburger400Parent}>
            <Text
              style={[
                styles.classicCheeseHamburger,
                styles.bramleaSandalwoodTypo,
              ]}
            >
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
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-4.png")}
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
          <View style={styles.classicCheeseHamburger400Parent}>
            <Text
              style={[
                styles.classicCheeseHamburger,
                styles.bramleaSandalwoodTypo,
              ]}
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
          style={[styles.frameInner, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-6.png")}
        />
      </View>
      <View style={[styles.frameParent3, styles.frameParent3Position]}>
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={[styles.frame3, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon3, styles.rectangleIconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle9.png")}
            />
          </View>
          <View style={styles.classicCheeseHamburger400Parent}>
            <Text
              style={[
                styles.classicCheeseHamburger,
                styles.bramleaSandalwoodTypo,
              ]}
            >
              Western BBQ Cheeseburger (400 Cals)
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
          style={[styles.frameInner, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-6.png")}
        />
      </View>
      <View style={[styles.restaurantChild2, styles.frameParent3Position]} />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/cart.png")}
      />
      <Image
        style={[styles.vuesaxlinearmoreSquareIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlinearmoresquare.png")}
      />
      <Image
        style={[styles.frameIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/frame-113.png")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.frameChildLayout]}
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
  frameChildLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  bramleaSandalwoodTypo: {
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  backTypo1: {
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  frameParentPosition: {
    left: 0,
    right: 0,
  },
  backTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.button,
  },
  menuTypo: {
    color: Color.dark60,
    lineHeight: 21,
    top: 509,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    top: 568,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
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
  frameLayout: {
    width: 108,
    overflow: "hidden",
  },
  frameParent3Position: {
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
  restaurantChild: {
    top: 93,
    height: 164,
    left: 0,
    right: 0,
    position: "absolute",
  },
  mcdonalds: {
    top: 278,
    left: 100,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    textAlign: "left",
    fontFamily: FontFamily.button,
    color: Color.dark100,
    position: "absolute",
  },
  vuesaxboldheartIcon: {
    width: 22,
    height: 22,
  },
  vuesaxboldheartWrapper: {
    top: 275,
    borderRadius: Border.br_81xl,
    padding: Padding.p_lg,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    width: 50,
    backgroundColor: Color.light80,
    right: 21,
    position: "absolute",
  },
  bramleaSandalwood: {
    top: 321,
    left: 122,
    position: "absolute",
  },
  vuesaxlinearlocationIcon: {
    top: 322,
    left: 99,
    width: 19,
    height: 19,
    position: "absolute",
  },
  logoChild: {
    backgroundColor: Color.firebrick,
    borderRadius: Border.br_31xl,
    top: 0,
    height: 64,
    width: 64,
    left: 0,
    position: "absolute",
  },
  image1Icon: {
    top: 20,
    left: 18,
    width: 28,
    height: 24,
    position: "absolute",
  },
  logo: {
    top: 279,
    height: 64,
    width: 64,
    left: 21,
    position: "absolute",
  },
  restaurantItem: {
    top: 364,
    backgroundColor: Color.dark60,
    height: 109,
    opacity: 0.3,
    borderRadius: Border.br_3xs,
    left: 21,
    right: 21,
    position: "absolute",
  },
  restaurantInner: {
    top: 381,
    borderRadius: 2,
    height: 20,
    width: 20,
    left: 38,
    position: "absolute",
  },
  ratings45: {
    top: 383,
    letterSpacing: -0.1,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    left: 63,
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  deliversIn1520: {
    top: 412,
    letterSpacing: -0.1,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    left: 63,
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  burgers: {
    top: 438,
    letterSpacing: -0.1,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    left: 63,
    color: Color.dark100,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  vuesaxboldelement2Icon: {
    top: 437,
    height: 16,
    width: 16,
    left: 38,
    position: "absolute",
  },
  vuesaxboldboxTimeIcon: {
    top: 409,
    left: 37,
    width: 18,
    height: 18,
    position: "absolute",
  },
  rectangleView: {
    top: 491,
    height: 59,
    backgroundColor: Color.light80,
    position: "absolute",
  },
  lunchDinner: {
    left: 124,
    textAlign: "center",
    lineHeight: 21,
    top: 509,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    color: Color.dark100,
    position: "absolute",
  },
  breakfastMenu: {
    left: -22,
  },
  overnightMenu: {
    left: 266,
  },
  restaurantChild1: {
    top: 547,
    left: 118,
    backgroundColor: Color.dark100,
    width: 126,
    height: 3,
    position: "absolute",
  },
  moreInfoIcon: {
    top: 393,
    right: 45,
    height: 50,
    width: 50,
    position: "absolute",
  },
  todaysDeals: {
    color: Color.light100,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: -0.1,
  },
  todaysDealsWrapper: {
    backgroundColor: Color.dark90,
    left: 21,
  },
  burgerMeals: {
    color: Color.dark801,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    letterSpacing: -0.1,
  },
  burgerMealsWrapper: {
    left: 144,
    backgroundColor: Color.light80,
  },
  chickenFishWrapper: {
    left: 265,
    backgroundColor: Color.light80,
  },
  rectangleIcon: {
    width: "120.76%",
    top: "0%",
    right: "-20.76%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    height: "100%",
  },
  frame: {
    width: 98,
    height: 41,
    overflow: "hidden",
  },
  classicCheeseHamburger: {
    alignSelf: "stretch",
  },
  text: {
    textDecoration: "line-through",
    color: Color.dark100,
    lineHeight: 18,
    fontSize: FontSize.size_base,
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
  classicCheeseHamburger400Parent: {
    marginLeft: 10,
    flex: 1,
  },
  vuesaxlineararrowRightIcon: {
    width: 24,
    marginLeft: 10,
    height: 24,
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
    top: 617,
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
    top: 724,
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
  frameInner: {
    height: 0,
    alignSelf: "stretch",
    width: "100%",
  },
  frameParent1: {
    top: 831,
    position: "absolute",
  },
  rectangleIcon3: {
    width: "100.93%",
    top: "-3.75%",
    right: "-11.11%",
    bottom: "3.75%",
    left: "10.19%",
    height: "100%",
  },
  frame3: {
    height: 40,
  },
  frameParent3: {
    top: 938,
  },
  restaurantChild2: {
    backgroundColor: Color.gray_300,
    height: 93,
    top: 0,
  },
  vuesaxlineararrowLeftIcon: {
    left: 21,
  },
  back: {
    top: 56,
    left: 58,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "500",
    color: Color.dark100,
    position: "absolute",
  },
  cartIcon: {
    left: 333,
  },
  vuesaxlinearmoreSquareIcon: {
    right: 125,
  },
  frameIcon: {
    left: 281,
  },
  notchIcon: {
    height: 30,
    top: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
  networkSignalLight: {
    height: 14,
    width: 20,
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
    position: "absolute",
  },
  base: {
    backgroundColor: Color.labelColorLightPrimary,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    right: 0,
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
  restaurant: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Restaurant;
