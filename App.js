import 'react-native-gesture-handler';
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartProvider } from "./src/context/CartContext";

import TabNavigator from "./src/navigation/TabNavigator";
import FilterScreen from "./src/screens/FilterScreen";

import SplashScreen from "./src/screens/SplashScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import SignInScreen from "./src/screens/SignInScreen";
import PhoneNumberScreen from "./src/screens/PhoneNumberScreen";
import VerificationScreen from "./src/screens/VerificationScreen";
import SelectLocationScreen from "./src/screens/SelectLocationScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import CheckoutScreen from "./src/screens/CheckoutScreen";
import OrderAcceptedScreen from "./src/screens/OrderAcceptedScreen";
import OrderFailedScreen from "./src/screens/OrderFailedScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          {!isLoggedIn ? (
            <>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
              <Stack.Screen name="Verification" component={VerificationScreen} />
              <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
              
              <Stack.Screen name="Login">
                {(props) => (
                  <LoginScreen
                    {...props}
                    onLogin={() => setIsLoggedIn(true)}
                  />
                )}
              </Stack.Screen>

              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Main" component={TabNavigator} />
              <Stack.Screen name="Filter" component={FilterScreen} />
              <Stack.Screen name="Checkout" component={CheckoutScreen} />
              <Stack.Screen name="OrderAccepted" component={OrderAcceptedScreen} />
              <Stack.Screen name="OrderFailed" component={OrderFailedScreen} />
            </>
          )}

        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}