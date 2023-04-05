import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Discover = () => {
  return (
    <View style={styles.discover}>
      <Image
        style={[styles.contentIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/content.png")}
      />
      <LinearGradient
        style={[styles.discoverChild, styles.statusBarPosition]}
        locations={[0, 1]}
        colors={["#fff", "rgba(255, 255, 255, 0)"]}
      />
      <Text style={styles.discover1}>Discover</Text>
      <View style={[styles.restaurantCard, styles.restaurantCardFlexBox]}>
        <View style={styles.restaurantFlexBox}>
          <View style={[styles.restaurant, styles.restaurantFlexBox]}>
            <View style={styles.nameLogo}>
              <View style={[styles.logo, styles.logoLayout]}>
                <View style={[styles.logoChild, styles.logoChildPosition]} />
                <Image
                  style={styles.image1Icon}
                  resizeMode="cover"
                  source={require("../assets/image-13.png")}
                />
              </View>
              <View style={styles.name}>
                <Text style={styles.mcdonalds}>McDonald’s</Text>
                <View style={styles.location}>
                  <Image
                    style={styles.vuesaxboldlocationIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxboldlocation1.png")}
                  />
                  <Text
                    style={[styles.bramleaSandalwood, styles.textClr]}
                  >{`Bramlea & Sandalwood`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.favourite}>
              <Image
                style={styles.vuesaxboldheartIcon}
                resizeMode="cover"
                source={require("../assets/vuesaxboldheart2.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.frameChild, styles.frameChildSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/vector-43.png")}
          />
          <View
            style={[styles.locationRatingsParent, styles.frameChildSpaceBlock]}
          >
            <View style={styles.locationRatings}>
              <View style={styles.distance}>
                <Image
                  style={styles.vuesaxboldrouteSquareIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxboldroutesquare.png")}
                />
                <Text style={[styles.m, styles.mTypo]}>200m</Text>
              </View>
              <Image
                style={styles.separatorIcon}
                resizeMode="cover"
                source={require("../assets/separator.png")}
              />
              <View style={styles.ratings}>
                <Image
                  style={styles.ratingsChild}
                  resizeMode="cover"
                  source={require("../assets/group-36325.png")}
                />
                <Text style={[styles.text, styles.mTypo]}>(1,293)</Text>
              </View>
            </View>
            <Text style={[styles.open, styles.mTypo]}>OPEN</Text>
          </View>
          <View style={styles.item1Parent}>
            <View style={styles.item1}>
              <View style={styles.item1Child} />
              <View style={styles.frame}>
                <Image
                  style={[styles.rectangleIcon, styles.subwayChildPosition]}
                  resizeMode="cover"
                  source={require("../assets/rectangle21.png")}
                />
              </View>
            </View>
            <View style={styles.item1}>
              <View style={styles.item1Child} />
              <Image
                style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle22.png")}
              />
            </View>
            <View style={styles.item1}>
              <View style={styles.item1Child} />
              <Image
                style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle23.png")}
              />
            </View>
            <View style={styles.item1}>
              <View style={styles.item1Child} />
              <Image
                style={[styles.rectangleIcon3, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/rectangle24.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.restaurantCard1, styles.restaurantCardLayout]}>
        <View style={styles.restaurantFlexBox}>
          <View style={[styles.restaurant, styles.restaurantFlexBox]}>
            <View style={styles.nameLogo}>
              <View style={[styles.logo, styles.logoLayout]}>
                <View style={[styles.logoChild, styles.logoChildPosition]} />
                <Image
                  style={styles.image1Icon}
                  resizeMode="cover"
                  source={require("../assets/image-13.png")}
                />
              </View>
              <View style={styles.name}>
                <Text style={styles.mcdonalds}>McDonald’s</Text>
                <View style={styles.location}>
                  <Image
                    style={styles.vuesaxboldlocationIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxboldlocation1.png")}
                  />
                  <Text
                    style={[styles.bramleaSandalwood, styles.textClr]}
                  >{`Bramlea & Sandalwood`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.favourite}>
              <Image
                style={styles.vuesaxboldheartIcon}
                resizeMode="cover"
                source={require("../assets/vuesaxboldheart2.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.frameChild, styles.frameChildSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/vector-43.png")}
          />
          <View
            style={[styles.locationRatingsParent, styles.frameChildSpaceBlock]}
          >
            <View style={styles.locationRatings}>
              <View style={styles.distance}>
                <Image
                  style={styles.vuesaxboldrouteSquareIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxboldroutesquare.png")}
                />
                <Text style={[styles.m, styles.mTypo]}>200m</Text>
              </View>
              <Image
                style={styles.separatorIcon1}
                resizeMode="cover"
                source={require("../assets/separator.png")}
              />
              <View style={styles.ratings}>
                <Image
                  style={styles.ratingsChild}
                  resizeMode="cover"
                  source={require("../assets/group-36325.png")}
                />
                <Text style={[styles.text, styles.mTypo]}>(1,293)</Text>
              </View>
            </View>
            <Text style={[styles.open, styles.mTypo]}>OPEN</Text>
          </View>
          <View style={styles.item1Parent}>
            <View style={styles.item1}>
              <View style={styles.item1Child} />
              <View style={styles.frame}>
                <Image
                  style={[styles.rectangleIcon4, styles.rectangleIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle21.png")}
                />
              </View>
            </View>
            <View style={styles.item1}>
              <View style={styles.item1Child} />
              <Image
                style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle22.png")}
              />
            </View>
            <View style={styles.item1}>
              <View style={styles.item1Child} />
              <Image
                style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle23.png")}
              />
            </View>
            <Image
              style={styles.moreInfoIcon}
              resizeMode="cover"
              source={require("../assets/more-info.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.restaurantCard2, styles.restaurantCardLayout]}>
        <View style={styles.restaurantFlexBox}>
          <View style={[styles.restaurant, styles.restaurantFlexBox]}>
            <View style={styles.nameLogo}>
              <View style={[styles.logo, styles.logoLayout]}>
                <View style={[styles.logoChild, styles.logoChildPosition]} />
                <Image
                  style={styles.image1Icon}
                  resizeMode="cover"
                  source={require("../assets/image-13.png")}
                />
              </View>
              <View style={styles.name}>
                <Text style={styles.mcdonalds}>McDonald’s</Text>
                <View style={styles.location}>
                  <Image
                    style={styles.vuesaxboldlocationIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxboldlocation1.png")}
                  />
                  <Text
                    style={[styles.bramleaSandalwood, styles.textClr]}
                  >{`Bramlea & Sandalwood`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.favourite}>
              <Image
                style={styles.vuesaxboldheartIcon}
                resizeMode="cover"
                source={require("../assets/vuesaxboldheart2.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.frameChild, styles.frameChildSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/vector-43.png")}
          />
          <View
            style={[styles.locationRatingsParent, styles.frameChildSpaceBlock]}
          >
            <View style={styles.locationRatings}>
              <View style={styles.distance}>
                <Image
                  style={styles.vuesaxboldrouteSquareIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxboldroutesquare.png")}
                />
                <Text style={[styles.m, styles.mTypo]}>200m</Text>
              </View>
              <Image
                style={styles.separatorIcon1}
                resizeMode="cover"
                source={require("../assets/separator.png")}
              />
              <View style={styles.ratings}>
                <Image
                  style={styles.ratingsChild}
                  resizeMode="cover"
                  source={require("../assets/group-36325.png")}
                />
                <Text style={[styles.text, styles.mTypo]}>(1,293)</Text>
              </View>
            </View>
            <Text style={[styles.open, styles.mTypo]}>OPEN</Text>
          </View>
          <View style={styles.item1Parent}>
            <View style={styles.item1}>
              <View style={styles.item1Child} />
              <View style={styles.frame}>
                <Image
                  style={[styles.rectangleIcon, styles.subwayChildPosition]}
                  resizeMode="cover"
                  source={require("../assets/rectangle21.png")}
                />
              </View>
            </View>
            <View style={styles.item1}>
              <View style={styles.item1Child} />
              <Image
                style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle22.png")}
              />
            </View>
            <View style={styles.item1}>
              <View style={styles.item1Child} />
              <Image
                style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
                resizeMode="cover"
                source={require("../assets/rectangle23.png")}
              />
            </View>
            <Image
              style={styles.moreInfoIcon}
              resizeMode="cover"
              source={require("../assets/more-info.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.restaurantCardFlexBox}>
          <Image
            style={styles.frameChild1Layout}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearhome2.png")}
          />
          <Text style={styles.homeTypo}>Home</Text>
        </View>
        <View style={styles.restaurantCardFlexBox}>
          <Image
            style={styles.frameChild1Layout}
            resizeMode="cover"
            source={require("../assets/vuesaxbolddiscover.png")}
          />
          <Text style={[styles.discover2, styles.homeTypo]}>Discover</Text>
          <Image
            style={styles.vuesaxlineardiscoverChild}
            resizeMode="cover"
            source={require("../assets/ellipse-768.png")}
          />
        </View>
        <View style={styles.vuesaxlinearcarParent}>
          <Image
            style={styles.frameChild1Layout}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearcar.png")}
          />
          <Text style={styles.homeTypo}>Drivethru</Text>
        </View>
        <View style={styles.restaurantCardFlexBox}>
          <Image
            style={styles.frameChild1Layout}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearreceipt.png")}
          />
          <Text style={styles.homeTypo}>Orders</Text>
        </View>
        <View style={styles.restaurantCardFlexBox}>
          <Image
            style={[styles.frameChild1, styles.frameChild1Layout]}
            resizeMode="cover"
            source={require("../assets/rectangle-11561.png")}
          />
          <Text style={styles.homeTypo}>Profile</Text>
        </View>
      </View>
      <Image
        style={[styles.discoverItem, styles.cartIconLayout]}
        resizeMode="cover"
        source={require("../assets/frame-113.png")}
      />
      <Image
        style={[styles.cartIcon, styles.cartIconLayout]}
        resizeMode="cover"
        source={require("../assets/cart.png")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconLayout]}
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
            style={styles.wifiSignalLight}
            resizeMode="cover"
            source={require("../assets/wifi-signal--light.png")}
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
      <View style={styles.homeIndicator}>
        <View style={styles.bar}>
          <View style={styles.base} />
        </View>
      </View>
      <View style={styles.mcdonalds3}>
        <Image
          style={styles.mcdonaldsChild}
          resizeMode="cover"
          source={require("../assets/rectangle-11631.png")}
        />
        <View style={[styles.logo3, styles.logo3Layout]}>
          <View style={[styles.rectangleView, styles.logo3Layout]} />
          <Image
            style={styles.image1Icon3}
            resizeMode="cover"
            source={require("../assets/image-14.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.starbucksIcon, styles.starbucksIconLayout]}
        resizeMode="cover"
        source={require("../assets/starbucks.png")}
      />
      <Image
        style={[styles.starbucksIcon1, styles.starbucksIconLayout]}
        resizeMode="cover"
        source={require("../assets/starbucks.png")}
      />
      <Image
        style={[styles.starbucksIcon2, styles.starbucksIconLayout]}
        resizeMode="cover"
        source={require("../assets/starbucks.png")}
      />
      <Image
        style={[styles.burgerKingIcon, styles.starbucksIconLayout]}
        resizeMode="cover"
        source={require("../assets/burger-king.png")}
      />
      <View style={[styles.subway, styles.starbucksIconLayout]}>
        <Image
          style={[styles.subwayChild, styles.rectangleIconPosition]}
          resizeMode="cover"
          source={require("../assets/burger-king.png")}
        />
        <Image
          style={[styles.screenShot20220510At438, styles.logo3Layout]}
          resizeMode="cover"
          source={require("../assets/screen-shot-20220510-at-438-1.png")}
        />
      </View>
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union.png")}
      />
      <Image
        style={[styles.discoverInner, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/group-36330.png")}
      />
      <Image
        style={[styles.logoIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/logo1.png")}
      />
      <Image
        style={[styles.burgerKingNew2021SeeklogoIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/burgerkingnew2021seeklogocom3-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusBarPosition: {
    top: 0,
    position: "absolute",
  },
  restaurantCardFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  restaurantFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  logoLayout: {
    width: 44,
    height: 44,
  },
  logoChildPosition: {
    backgroundColor: Color.firebrick,
    left: 0,
    borderRadius: Border.br_31xl,
    top: 0,
  },
  textClr: {
    color: Color.dark60,
    textAlign: "left",
  },
  frameChildSpaceBlock: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  mTypo: {
    letterSpacing: 0.2,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.button,
    flex: 1,
  },
  subwayChildPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  rectangleIconPosition: {
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  restaurantCardLayout: {
    width: 334,
    padding: Padding.p_sm,
    borderRadius: Border.br_lg,
    top: 512,
    position: "absolute",
    backgroundColor: Color.light100,
  },
  rectangleIconLayout: {
    width: "174.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    textAlign: "center",
    letterSpacing: -0.1,
    fontSize: FontSize.caption_size,
    lineHeight: 23,
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  frameChild1Layout: {
    height: 24,
    width: 24,
  },
  cartIconLayout: {
    height: 36,
    width: 36,
    top: 57,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 30,
    position: "absolute",
  },
  logo3Layout: {
    width: 34,
    height: 34,
    position: "absolute",
  },
  starbucksIconLayout: {
    width: "10.77%",
    height: "4.98%",
    position: "absolute",
  },
  contentIcon: {
    height: "103.58%",
    width: "314.12%",
    right: "-214.12%",
    bottom: "-3.58%",
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  discoverChild: {
    right: -1,
    left: -1,
    height: 139,
    opacity: 0.7,
    backgroundColor: "transparent",
  },
  discover1: {
    top: 54,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
    left: 21,
    position: "absolute",
  },
  logoChild: {
    height: 44,
    width: 44,
    position: "absolute",
  },
  image1Icon: {
    top: 14,
    left: 12,
    width: 19,
    height: 17,
    position: "absolute",
  },
  logo: {
    height: 44,
  },
  mcdonalds: {
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    lineHeight: 23,
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
  },
  vuesaxboldlocationIcon: {
    height: 15,
    width: 15,
  },
  bramleaSandalwood: {
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    color: Color.dark60,
    fontFamily: FontFamily.button,
    flex: 1,
  },
  location: {
    width: 141,
    flexDirection: "row",
  },
  name: {
    marginLeft: 6,
  },
  nameLogo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  vuesaxboldheartIcon: {
    width: 18,
    height: 18,
  },
  favourite: {
    borderRadius: Border.br_81xl,
    height: 40,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_lg,
    marginLeft: 73,
    backgroundColor: Color.light80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  restaurant: {
    flexDirection: "row",
  },
  frameChild: {
    height: 1,
    maxWidth: "100%",
    marginTop: 15,
    overflow: "hidden",
    width: "100%",
  },
  vuesaxboldrouteSquareIcon: {
    height: 16,
    width: 16,
  },
  m: {
    color: Color.dark90,
    marginLeft: 4,
    textAlign: "left",
  },
  distance: {
    width: 53,
    flexDirection: "row",
    alignItems: "center",
  },
  separatorIcon: {
    width: 1,
    height: 23,
    marginLeft: 16,
  },
  ratingsChild: {
    width: 74,
    height: 14,
  },
  text: {
    color: Color.dark60,
    textAlign: "left",
    marginLeft: 6,
  },
  ratings: {
    width: 118,
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  locationRatings: {
    flexDirection: "row",
    alignItems: "center",
  },
  open: {
    color: Color.systemGreen100,
    textAlign: "right",
    marginLeft: 16,
  },
  locationRatingsParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    flexDirection: "row",
    alignItems: "center",
  },
  item1Child: {
    borderRadius: Border.br_3xs,
    height: 67,
    width: 68,
    backgroundColor: Color.light80,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    right: "-74.04%",
    width: "174.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    top: 15,
    left: 2,
    height: 35,
    width: 59,
    position: "absolute",
    overflow: "hidden",
  },
  item1: {
    height: 67,
    width: 68,
  },
  rectangleIcon1: {
    height: "50.75%",
    width: "94.12%",
    top: "26.87%",
    bottom: "22.39%",
    left: "5.88%",
  },
  rectangleIcon2: {
    height: "47.76%",
    width: "91.18%",
    top: "25.37%",
    bottom: "26.87%",
    left: "8.82%",
  },
  rectangleIcon3: {
    height: "32.84%",
    width: "86.76%",
    top: "34.33%",
    right: "5.88%",
    bottom: "32.84%",
    left: "7.35%",
    position: "absolute",
  },
  item1Parent: {
    justifyContent: "space-between",
    marginTop: 15,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  restaurantCard: {
    right: 28,
    left: 28,
    padding: Padding.p_sm,
    top: 512,
    justifyContent: "center",
    borderRadius: Border.br_lg,
    position: "absolute",
    backgroundColor: Color.light100,
  },
  separatorIcon1: {
    width: 0,
    height: 22,
    marginLeft: 16,
  },
  rectangleIcon4: {
    top: "-1.22%",
    right: "-58.82%",
    bottom: "1.22%",
    left: "-15.22%",
    height: "100%",
    width: "174.04%",
  },
  moreInfoIcon: {
    width: 50,
    height: 50,
  },
  restaurantCard1: {
    left: -318,
  },
  restaurantCard2: {
    left: 374,
  },
  discover2: {
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
    width: 24,
  },
  frameParent: {
    marginTop: 322,
    marginLeft: -195,
    top: "50%",
    width: 390,
    paddingHorizontal: Padding.p_9xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_13xl,
    left: "50%",
    justifyContent: "space-between",
    backgroundColor: Color.light80,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  discoverItem: {
    right: 73,
  },
  cartIcon: {
    right: 21,
  },
  notchIcon: {
    right: 0,
    height: 30,
    left: 0,
    top: 0,
    maxWidth: "100%",
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    height: 14,
    marginLeft: 4,
    width: 16,
  },
  batteryLight: {
    width: 25,
    height: 14,
    marginLeft: 4,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
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
    right: 8,
    left: 7,
    height: 44,
    overflow: "hidden",
  },
  base: {
    backgroundColor: Color.labelColorLightPrimary,
    bottom: 0,
    right: 0,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bar: {
    right: 121,
    bottom: 8,
    left: 120,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -188,
    width: 375,
    height: 34,
    bottom: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  mcdonaldsChild: {
    top: -10,
    left: -14,
    width: 80,
    height: 84,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.firebrick,
    left: 0,
    borderRadius: Border.br_31xl,
    top: 0,
  },
  image1Icon3: {
    top: 11,
    left: 10,
    height: 13,
    width: 15,
    position: "absolute",
  },
  logo3: {
    top: 9,
    left: 9,
  },
  mcdonalds3: {
    top: 338,
    left: 204,
    width: 52,
    height: 58,
    position: "absolute",
  },
  starbucksIcon: {
    top: "20.5%",
    right: "82.31%",
    bottom: "74.53%",
    left: "6.92%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  starbucksIcon1: {
    top: "20.38%",
    right: "11.54%",
    bottom: "74.64%",
    left: "77.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  starbucksIcon2: {
    top: "17.89%",
    right: "43.33%",
    bottom: "77.13%",
    left: "45.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  burgerKingIcon: {
    top: "51.07%",
    right: "17.44%",
    bottom: "43.96%",
    left: "71.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  subwayChild: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  screenShot20220510At438: {
    top: 4,
    left: 4,
    borderRadius: 296,
  },
  subway: {
    top: "50.59%",
    right: "70.77%",
    bottom: "44.43%",
    left: "18.46%",
  },
  unionIcon: {
    height: 72,
    width: 59,
    borderRadius: Border.br_lg,
  },
  discoverInner: {
    height: "2.86%",
    width: "6.18%",
    top: "31.75%",
    right: "67.92%",
    bottom: "65.39%",
    left: "25.9%",
    position: "absolute",
  },
  logoIcon: {
    top: 295,
    left: 81,
    width: 30,
  },
  burgerKingNew2021SeeklogoIcon: {
    top: 437,
    left: 287,
    width: 28,
    overflow: "hidden",
  },
  discover: {
    borderRadius: Border.br_27xl,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.light100,
  },
});

export default Discover;
