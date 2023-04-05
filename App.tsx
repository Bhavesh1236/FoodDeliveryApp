const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onboarding1 from "./screens/Onboarding1";
import UtensilsProduct from "./screens/UtensilsProduct";
import EditAddOn from "./screens/EditAddOn";
import RestaurantMenu from "./screens/RestaurantMenu";
import Search from "./screens/Search";
import ChangeLocation from "./screens/ChangeLocation";
import EditLocation from "./screens/EditLocation";
import Utensils from "./screens/Utensils";
import PhoneVerification from "./screens/PhoneVerification";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding2 from "./screens/Onboarding2";
import CategoryPage from "./screens/CategoryPage";
import AllCategories from "./screens/AllCategories";
import DiscoverSearch from "./screens/DiscoverSearch";
import Discover from "./screens/Discover";
import Homepage from "./screens/Homepage";
import RestaurantSearch from "./screens/RestaurantSearch";
import RestaurantMoreOptions from "./screens/RestaurantMoreOptions";
import Restaurant from "./screens/Restaurant";
import RestaurantMoreInfo from "./screens/RestaurantMoreInfo";
import MealCollapsed from "./screens/MealCollapsed";
import MealFull from "./screens/MealFull";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UtensilsProduct"
              component={UtensilsProduct}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditAddOn"
              component={EditAddOn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantMenu"
              component={RestaurantMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangeLocation"
              component={ChangeLocation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditLocation"
              component={EditLocation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Utensils"
              component={Utensils}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhoneVerification"
              component={PhoneVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CategoryPage"
              component={CategoryPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllCategories"
              component={AllCategories}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DiscoverSearch"
              component={DiscoverSearch}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Discover"
              component={Discover}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantSearch"
              component={RestaurantSearch}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantMoreOptions"
              component={RestaurantMoreOptions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Restaurant"
              component={Restaurant}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantMoreInfo"
              component={RestaurantMoreInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealCollapsed"
              component={MealCollapsed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealFull"
              component={MealFull}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
