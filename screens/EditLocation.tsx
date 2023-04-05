import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const EditLocation = () => {
  return (
    <View style={styles.editLocation}>
      <Image
        style={[styles.image3Icon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
      />
      <View style={[styles.editLocationChild, styles.iconChildLayout]} />
      <Text style={[styles.deliveryDetails, styles.editAddressTypo]}>
        Delivery details
      </Text>
      <Text style={[styles.editAddress, styles.editAddressTypo]}>
        Edit Address
      </Text>
      <View style={styles.editLocationItem} />
      <Image
        style={styles.closeIcon}
        resizeMode="cover"
        source={require("../assets/close1.png")}
      />
      <Image
        style={[styles.editLocationInner, styles.frameParentPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-1161.png")}
      />
      <View style={[styles.vuesaxlineargpsParent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxlineargpsIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineargps.png")}
        />
        <Text style={[styles.pinLocation, styles.saveAndUseLayout]}>
          Pin Location
        </Text>
      </View>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-1163.png")}
      />
      <Text style={styles.back}>Back</Text>
      <View style={styles.rectangleView} />
      <Image
        style={styles.vuesaxboldhomeIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxboldhome1.png")}
      />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <View style={[styles.typeSomethingHereWrapper, styles.typeSpaceBlock]}>
        <Text style={[styles.typeSomethingHere, styles.typeTypo]}>
          Type Something Here
        </Text>
      </View>
      <View style={[styles.typeSomethingHereContainer, styles.typeSpaceBlock]}>
        <Text style={[styles.typeSomethingHere, styles.typeTypo]}>
          Type Something Here
        </Text>
      </View>
      <View style={[styles.typeSomethingHereFrame, styles.typeSpaceBlock]}>
        <Text style={[styles.typeSomethingHere2, styles.typeTypo]}>
          Type Something Here
        </Text>
      </View>
      <View style={[styles.typeSomethingHereFrame, styles.typeSpaceBlock]}>
        <Text style={[styles.typeSomethingHere2, styles.typeTypo]}>
          Type Something Here
        </Text>
      </View>
      <Text style={[styles.aptSuite, styles.aptSuiteTypo]}>
        Apt / Suite / Floor
      </Text>
      <Text style={[styles.businessBuilding, styles.aptSuiteTypo]}>
        Business / Building Name
      </Text>
      <Text style={[styles.addInstructions, styles.aptSuiteTypo]}>
        Add Instructions
      </Text>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.leaveAtDoorstepWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.leaveAtDoorstep, styles.saveAndUseTypo]}>
            Leave at Doorstep
          </Text>
        </View>
        <View style={[styles.inPersonHandoffWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.inPersonHandoff, styles.leaveAtDoorstepLayout]}>
            In-Person Handoff
          </Text>
        </View>
        <View style={[styles.meetOutsideHouseWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.inPersonHandoff, styles.leaveAtDoorstepLayout]}>
            Meet Outside House
          </Text>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <View style={[styles.editLocationChild1, styles.basePosition]} />
      <View style={[styles.editLocationInner1, styles.parentFlexBox]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.vuesaxboldtickCircleIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxboldtickcircle.png")}
          />
          <Text style={[styles.saveAndUse, styles.saveAndUseTypo]}>
            Save and Use
          </Text>
        </View>
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
  iconChildLayout: {
    width: 390,
    left: 0,
  },
  editAddressTypo: {
    textAlign: "left",
    fontFamily: FontFamily.button,
    fontWeight: "500",
  },
  frameParentPosition: {
    left: 21,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  saveAndUseLayout: {
    lineHeight: 18,
    fontSize: FontSize.button_size,
  },
  typeSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    alignItems: "center",
    flexDirection: "row",
    width: 348,
    borderRadius: Border.br_sm,
    left: 21,
    position: "absolute",
  },
  typeTypo: {
    lineHeight: 23,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.button,
    letterSpacing: -0.2,
    flex: 1,
  },
  aptSuiteTypo: {
    color: Color.dark801,
    letterSpacing: -0.3,
    left: 34,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.button,
    fontWeight: "500",
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    position: "absolute",
  },
  saveAndUseTypo: {
    color: Color.light100,
    textAlign: "left",
    fontFamily: FontFamily.button,
    fontWeight: "500",
  },
  leaveAtDoorstepLayout: {
    letterSpacing: -0.1,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  image3Icon: {
    top: 0,
    position: "absolute",
    height: 844,
  },
  editLocationChild: {
    top: 54,
    borderRadius: Border.br_11xl,
    height: 790,
    position: "absolute",
    backgroundColor: Color.light100,
  },
  deliveryDetails: {
    top: 639,
    fontSize: FontSize.subtitle2_size,
    lineHeight: 24,
    color: Color.dark100,
    textAlign: "left",
    left: 21,
    position: "absolute",
    letterSpacing: -0.2,
  },
  editAddress: {
    top: 137,
    fontSize: FontSize.subtitle1_size,
    lineHeight: 36,
    color: Color.dark100,
    textAlign: "left",
    left: 21,
    position: "absolute",
  },
  editLocationItem: {
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
  editLocationInner: {
    top: 181,
    height: 193,
    width: 348,
    borderRadius: Border.br_sm,
  },
  vuesaxlineargpsIcon: {
    width: 20,
    height: 20,
  },
  pinLocation: {
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    marginLeft: 4,
    fontFamily: FontFamily.button,
    fontWeight: "500",
    fontSize: FontSize.button_size,
    flex: 1,
  },
  vuesaxlineargpsParent: {
    marginLeft: -97,
    top: 350,
    borderStyle: "solid",
    borderColor: "#2d3943",
    borderWidth: 1.5,
    width: 194,
    paddingHorizontal: 35,
    paddingVertical: 15,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    borderRadius: Border.br_sm,
    backgroundColor: Color.light100,
  },
  rectangleIcon: {
    top: 223,
    left: 180,
    width: 74,
    height: 77,
    position: "absolute",
  },
  back: {
    top: 103,
    left: 56,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.button,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleView: {
    top: 241,
    left: 202,
    width: 30,
    height: 30,
    backgroundColor: Color.lightslategray,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  vuesaxboldhomeIcon: {
    top: 247,
    left: 208,
    width: 18,
    height: 18,
    position: "absolute",
  },
  vuesaxlineararrowLeftIcon: {
    top: 92,
    left: 19,
    width: 36,
    height: 36,
    position: "absolute",
  },
  typeSomethingHere: {
    color: Color.dark60,
  },
  typeSomethingHereWrapper: {
    top: 447,
    backgroundColor: Color.light80,
  },
  typeSomethingHereContainer: {
    top: 546,
    backgroundColor: Color.light80,
  },
  typeSomethingHere2: {
    color: Color.darkslategray_100,
  },
  typeSomethingHereFrame: {
    top: 766,
    backgroundColor: Color.lightslategray,
  },
  aptSuite: {
    top: 423,
  },
  businessBuilding: {
    top: 522,
  },
  addInstructions: {
    top: 742,
  },
  leaveAtDoorstep: {
    letterSpacing: -0.1,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
  },
  leaveAtDoorstepWrapper: {
    backgroundColor: Color.dark90,
    left: 0,
  },
  inPersonHandoff: {
    color: Color.dark90,
    textAlign: "left",
    fontFamily: FontFamily.button,
    fontWeight: "500",
  },
  inPersonHandoffWrapper: {
    left: 150,
    backgroundColor: Color.light80,
  },
  meetOutsideHouseWrapper: {
    left: 301,
    backgroundColor: Color.light80,
  },
  frameParent: {
    top: 681,
    width: 369,
    height: 40,
  },
  vectorIcon: {
    top: 618,
    height: 1,
    position: "absolute",
  },
  editLocationChild1: {
    backgroundColor: Color.gray_200,
    height: 112,
    width: 390,
    left: 0,
  },
  vuesaxboldtickCircleIcon: {
    width: 24,
    height: 24,
  },
  saveAndUse: {
    marginLeft: 5,
    lineHeight: 18,
    fontSize: FontSize.button_size,
  },
  editLocationInner1: {
    marginLeft: -174,
    bottom: 30,
    borderRadius: Border.br_lg,
    backgroundColor: Color.pink100,
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_2xl,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    width: 348,
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
  editLocation: {
    borderRadius: Border.br_27xl,
    width: "100%",
    overflow: "hidden",
    height: 844,
    flex: 1,
    backgroundColor: Color.light100,
  },
});

export default EditLocation;
