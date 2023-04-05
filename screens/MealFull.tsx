import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const MealFull = () => {
  return (
    <View style={styles.mealFull}>
      <View style={[styles.mealFullChild, styles.mealPosition]} />
      <View style={[styles.mealFullItem, styles.mealPosition]} />
      <View
        style={[styles.vuesaxlinearminus, styles.vuesaxlinearminusPosition]}
      >
        <Image
          style={styles.vuesaxlinearminusIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearminus.png")}
        />
      </View>
      <View
        style={[styles.vuesaxlinearminus1, styles.vuesaxlinearminusPosition]}
      >
        <Image
          style={styles.vuesaxlinearminusIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearminus.png")}
        />
      </View>
      <View style={[styles.mealFullInner, styles.mealPosition]} />
      <Text style={[styles.westernBbqCheeseburger, styles.calsClr]}>
        Western BBQ Cheeseburger Meal
      </Text>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Text style={[styles.softDrinks, styles.friesTypo]}>Soft Drinks</Text>
        </View>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-752.png")}
        />
      </View>
      <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle29.png")}
            />
          </View>
          <Text style={[styles.mediumFries, styles.friesTypo]}>
            Medium Fries
          </Text>
        </View>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-752.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={[styles.frame1, styles.frame1Layout]}>
            <Image
              style={[styles.rectangleIcon1, styles.rectangleIconPosition1]}
              resizeMode="cover"
              source={require("../assets/rectangle30.png")}
            />
          </View>
          <Text style={[styles.mediumFries, styles.friesTypo]}>
            Sesame Seed Bun
          </Text>
        </View>
        <View style={[styles.editParent, styles.parentFlexBox]}>
          <Text style={[styles.edit, styles.editLayout]}>Edit</Text>
          <Image
            style={styles.vuesaxlinearminusIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
        </View>
      </View>
      <View style={[styles.mealFullInner1, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={styles.frame2}>
            <Image
              style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
              resizeMode="cover"
            />
          </View>
          <Text style={[styles.mediumFries, styles.friesTypo]}>
            Sesame Seed Bun
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={styles.frame3}>
            <Image
              style={[styles.rectangleIcon3, styles.rectangleIconPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle31.png")}
            />
          </View>
          <View style={styles.beefPattyParent}>
            <Text style={[styles.beefPatty, styles.eaFlexBox]}>Beef Patty</Text>
            <Text style={[styles.ea, styles.eaTypo]}>$1.59 ea</Text>
          </View>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent5, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={styles.frame4}>
            <Image
              style={[styles.rectangleIcon4, styles.rectangleIconPosition1]}
              resizeMode="cover"
              source={require("../assets/rectangle32.png")}
            />
          </View>
          <View style={styles.beefPattyParent}>
            <Text style={[styles.beefPatty, styles.eaFlexBox]}>Cheese</Text>
            <Text style={[styles.ea, styles.eaTypo]}>$0.59 ea</Text>
          </View>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.rectangleIcon5, styles.rectangleIconPosition1]}
              resizeMode="cover"
              source={require("../assets/rectangle33.png")}
            />
          </View>
          <Text style={[styles.mediumFries, styles.friesTypo]}>
            Banana Peppers
          </Text>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent9, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={styles.frame6}>
            <Image
              style={[styles.rectangleIcon6, styles.rectangleIconPosition]}
              resizeMode="cover"
            />
          </View>
          <Text style={[styles.mediumFries, styles.friesTypo]}>Lettuce</Text>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent11, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle29.png")}
            />
          </View>
          <Text style={[styles.mediumFries, styles.friesTypo]}>
            Chipotle Sauce
          </Text>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent13, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle29.png")}
            />
          </View>
          <Text style={[styles.mediumFries, styles.friesTypo]}>BBQ Sauce</Text>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={styles.buttonFlexBox}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button2, styles.buttonFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.mealFullInner2, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <Text style={[styles.softDrinks, styles.friesTypo]}>Juices</Text>
          <Image
            style={[styles.frameInner, styles.frameLayout]}
            resizeMode="cover"
            source={require("../assets/group-21.png")}
          />
        </View>
      </View>
      <View style={[styles.mealFullInner3, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
            <View style={[styles.frame1, styles.frame1Layout]}>
              <Image
                style={[styles.rectangleIcon9, styles.rectangleIconPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle34.png")}
              />
            </View>
            <Text style={[styles.largeFries, styles.friesTypo]}>
              Large Fries
            </Text>
          </View>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text6, styles.eaTypo]}>+$2.99</Text>
            <Image
              style={[styles.groupIcon, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/group-21.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.calories}>
        <View style={[styles.calsParent, styles.frameParentFlexBox]}>
          <Text style={[styles.cals, styles.calsLayout]}>340-400 Cals</Text>
          <Image
            style={styles.vuesaxlinearinfoCircleIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearinfocircle1.png")}
          />
        </View>
      </View>
      <Text style={[styles.sideItem, styles.drinksTypo]}>Side Item</Text>
      <Text style={[styles.required, styles.requiredTypo]}>REQUIRED</Text>
      <Text style={[styles.required1, styles.requiredTypo]}>REQUIRED</Text>
      <Text style={[styles.drinks, styles.drinksTypo]}>Drinks</Text>
      <Text style={[styles.editCheeseburger, styles.drinksTypo]}>
        Edit Cheeseburger
      </Text>
      <View style={[styles.mealFullInner4, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
          <View style={[styles.softDrinksWrapper, styles.frameParentFlexBox]}>
            <View style={styles.frame10}>
              <Image
                style={[styles.rectangleIcon10, styles.rectangleIconPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle4.png")}
              />
            </View>
            <Text style={[styles.mediumFries, styles.friesTypo]}>
              Fruit Punch Juice
            </Text>
          </View>
          <View style={[styles.editGroup, styles.parentFlexBox]}>
            <Text style={[styles.edit, styles.editLayout]}>Edit</Text>
            <Image
              style={styles.vuesaxlinearminusIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowright.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frameParent19}>
        <View style={styles.frame11}>
          <Image
            style={[styles.rectangleIcon9, styles.rectangleIconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle26.png")}
          />
        </View>
        <Image
          style={[styles.rectangleIcon12, styles.basePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle27.png")}
        />
        <View style={styles.frame12}>
          <Image
            style={[styles.rectangleIcon9, styles.rectangleIconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle28.png")}
          />
        </View>
      </View>
      <View
        style={[styles.vuesaxlinearminus2, styles.vuesaxlinearminusPosition]}
      >
        <Image
          style={styles.vuesaxlinearminusIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlinearminus.png")}
        />
      </View>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.vuesaxboldheartWrapper, styles.frameParent20Position]}
      >
        <Image
          style={styles.vuesaxlinearminusIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldheart3.png")}
        />
      </View>
      <View style={[styles.frameParent20, styles.frameParent20Position]}>
        <View
          style={[styles.vuesaxboldbagHappyParent, styles.frameParentFlexBox]}
        >
          <Image
            style={styles.vuesaxboldbagHappyIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxboldbaghappy.png")}
          />
          <Text style={[styles.addToBag, styles.calsLayout]}>Add to Bag</Text>
        </View>
        <Text style={[styles.text7, styles.calsLayout]}>$8.69</Text>
      </View>
      <View style={[styles.mealFullChild1, styles.rectangleViewPosition]} />
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
        style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.back, styles.editLayout]}>Back</Text>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.frame1Layout]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.frameParentFlexBox]}>
          <Image
            style={styles.networkSignalLight}
            resizeMode="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={styles.wifiSignalLight}
            resizeMode="cover"
            source={require("../assets/wifi-signal--light1.png")}
          />
          <Image
            style={styles.batteryLight}
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
      <View style={[styles.homeIndicator, styles.statusBarPosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealPosition: {
    height: 56,
    backgroundColor: Color.light80,
    left: 0,
    right: 0,
    position: "absolute",
  },
  vuesaxlinearminusPosition: {
    padding: Padding.p_11xs,
    flexDirection: "row",
    backgroundColor: Color.dark60,
    borderRadius: Border.br_81xl,
    right: 21,
    position: "absolute",
  },
  calsClr: {
    color: Color.dark100,
    textAlign: "left",
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  friesTypo: {
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  frameLayout: {
    height: 28,
    width: 28,
  },
  frame1Layout: {
    height: 30,
    overflow: "hidden",
  },
  rectangleIconPosition1: {
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  editLayout: {
    lineHeight: 16,
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  rectangleIconPosition: {
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  eaFlexBox: {
    alignSelf: "stretch",
    textAlign: "left",
  },
  eaTypo: {
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.button,
  },
  buttonFlexBox: {
    padding: Padding.p_7xs,
    width: 32,
    backgroundColor: Color.dark801,
    borderRadius: Border.br_161xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  calsLayout: {
    lineHeight: 18,
    fontFamily: FontFamily.button,
  },
  drinksTypo: {
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.subtitle2_size,
    lineHeight: 23,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.button,
    left: 21,
    position: "absolute",
  },
  requiredTypo: {
    color: Color.systemGreen100,
    letterSpacing: 0.2,
    fontSize: FontSize.caption_size,
    right: 61,
    textAlign: "right",
    fontWeight: "500",
    lineHeight: 16,
    fontFamily: FontFamily.button,
    position: "absolute",
  },
  basePosition: {
    left: 0,
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  frameParent20Position: {
    borderRadius: Border.br_lg,
    bottom: 30,
    alignItems: "center",
    flexDirection: "row",
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
    position: "absolute",
    overflow: "hidden",
  },
  mealFullChild: {
    top: 450,
  },
  mealFullItem: {
    top: 642,
  },
  vuesaxlinearminusIcon: {
    width: 24,
    height: 24,
  },
  vuesaxlinearminus: {
    top: 655,
  },
  vuesaxlinearminus1: {
    top: 463,
  },
  mealFullInner: {
    top: 907,
  },
  westernBbqCheeseburger: {
    top: 316,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    width: 293,
    textAlign: "left",
    fontFamily: FontFamily.button,
    color: Color.dark100,
    left: 21,
    position: "absolute",
  },
  softDrinks: {
    textAlign: "left",
    flex: 1,
  },
  softDrinksWrapper: {
    flex: 1,
  },
  frameChild: {
    marginLeft: 10,
  },
  frameParent: {
    top: 704,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon: {
    height: "90%",
    width: "89.13%",
    top: "10%",
    right: "5.43%",
    left: "5.43%",
    maxHeight: "100%",
    bottom: "0%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    height: 20,
    width: 92,
    overflow: "hidden",
  },
  mediumFries: {
    marginLeft: 2,
    textAlign: "left",
    flex: 1,
  },
  frameGroup: {
    top: 512,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon1: {
    width: "118.6%",
    right: "-25.13%",
    left: "6.52%",
  },
  frame1: {
    width: 92,
  },
  edit: {
    textAlign: "right",
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
  },
  editParent: {
    marginLeft: 10,
  },
  frameView: {
    top: 969,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon2: {
    width: "133.7%",
    right: "-33.7%",
    height: "100%",
    left: "0%",
    bottom: "0%",
  },
  frame2: {
    height: 32,
    width: 92,
    overflow: "hidden",
  },
  mealFullInner1: {
    top: 1397,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon3: {
    width: "158.7%",
    right: "-58.7%",
    height: "100%",
    left: "0%",
    bottom: "0%",
  },
  frame3: {
    height: 34,
    width: 92,
    overflow: "hidden",
  },
  beefPatty: {
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  ea: {
    lineHeight: 19,
    color: Color.peach100,
    alignSelf: "stretch",
    textAlign: "left",
  },
  beefPattyParent: {
    marginLeft: 2,
    flex: 1,
  },
  vuesaxlinearminusIcon2: {
    width: 20,
    height: 20,
  },
  text: {
    textAlign: "center",
    letterSpacing: -0.3,
    marginLeft: 10,
    fontSize: FontSize.body_size,
    lineHeight: 16,
  },
  button2: {
    marginLeft: 10,
  },
  button: {
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    marginLeft: 10,
  },
  frameParent3: {
    top: 1087,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon4: {
    width: "86.73%",
    right: "8.92%",
    left: "4.35%",
  },
  frame4: {
    height: 16,
    width: 92,
    overflow: "hidden",
  },
  frameParent5: {
    top: 1147,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon5: {
    width: "76.56%",
    right: "20.18%",
    left: "3.26%",
  },
  frameParent7: {
    top: 1217,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon6: {
    height: "106.25%",
    width: "92.83%",
    right: "7.17%",
    bottom: "-6.25%",
  },
  frame6: {
    height: 14,
    width: 92,
    overflow: "hidden",
  },
  frameParent9: {
    top: 1277,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameParent11: {
    top: 1337,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameParent13: {
    top: 1027,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameInner: {
    marginLeft: 2,
  },
  mealFullInner2: {
    top: 760,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon9: {
    right: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    width: "100%",
  },
  largeFries: {
    width: 224,
    marginLeft: 2,
    textAlign: "left",
  },
  text6: {
    lineHeight: 22,
    color: Color.darkslategray_200,
    textAlign: "right",
  },
  groupIcon: {
    marginLeft: 9,
  },
  parent: {
    width: 89,
    marginLeft: 2,
  },
  mealFullInner3: {
    top: 568,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    alignItems: "center",
    left: 0,
    right: 0,
    position: "absolute",
  },
  cals: {
    opacity: 0.34,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.dark100,
  },
  vuesaxlinearinfoCircleIcon: {
    width: 19,
    marginLeft: 4,
    opacity: 0.34,
    height: 19,
  },
  calsParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  calories: {
    top: 406,
    width: 111,
    height: 19,
    left: 21,
    position: "absolute",
  },
  sideItem: {
    top: 466,
  },
  required: {
    top: 470,
  },
  required1: {
    top: 662,
  },
  drinks: {
    top: 658,
  },
  editCheeseburger: {
    top: 923,
  },
  rectangleIcon10: {
    width: "113.16%",
    right: "-13.16%",
    height: "100%",
    left: "0%",
    bottom: "0%",
  },
  frame10: {
    width: 38,
    height: 33,
    overflow: "hidden",
  },
  editGroup: {
    marginLeft: 2,
  },
  mealFullInner4: {
    top: 814,
    right: 16,
    left: 16,
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: "#b3bfcb",
    borderWidth: 1,
    paddingLeft: Padding.p_2xl,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_xl,
    paddingTop: Padding.p_xl,
    position: "absolute",
    backgroundColor: Color.light100,
  },
  frame11: {
    left: 189,
    width: 249,
    height: 191,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon12: {
    top: 53,
    width: 365,
    height: 134,
  },
  frame12: {
    top: 124,
    left: 115,
    width: 220,
    height: 74,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent19: {
    top: 112,
    left: 22,
    width: 438,
    height: 198,
    position: "absolute",
  },
  vuesaxlinearminus2: {
    top: 921,
  },
  rectangleView: {
    backgroundColor: Color.gray_200,
    height: 112,
    bottom: 0,
  },
  vuesaxboldheartWrapper: {
    backgroundColor: "rgba(244, 115, 158, 0.3)",
    padding: Padding.p_lgi,
    justifyContent: "center",
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
    width: 158,
  },
  text7: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.blue100,
    textAlign: "right",
    flex: 1,
  },
  frameParent20: {
    marginLeft: -94,
    left: "50%",
    backgroundColor: Color.dark100,
    width: 268,
    paddingHorizontal: Padding.p_3xl,
    paddingBottom: Padding.p_2xl,
    paddingTop: Padding.p_xl,
  },
  mealFullChild1: {
    backgroundColor: Color.gray_300,
    height: 93,
    top: 0,
  },
  cartIcon: {
    right: 21,
    width: 36,
    top: 45,
  },
  vuesaxlinearmoreSquareIcon: {
    right: 78,
  },
  vuesaxlineararrowLeftIcon: {
    left: 21,
  },
  back: {
    top: 56,
    left: 58,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  notchIcon: {
    top: 0,
    maxWidth: "100%",
    height: 30,
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
    marginLeft: 4,
    height: 14,
  },
  batteryLight: {
    width: 25,
    marginLeft: 4,
    height: 14,
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
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorLightPrimary,
    bottom: 0,
    top: 0,
    right: 0,
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
    bottom: 0,
    height: 34,
  },
  mealFull: {
    borderRadius: Border.br_27xl,
    height: 1606,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.light100,
  },
});

export default MealFull;
