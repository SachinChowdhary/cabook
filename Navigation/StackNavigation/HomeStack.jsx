import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { View, Text } from "react-native";
import OrderDetails from "../../Screens/OrderDetails/OrderDetails";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import DrawerNavigation from "../DrawerNavigation/DrawerNavigation";
import LandingScreen from "../../Screens/LandingScreen/LandingScreen";
import Login from "../../Screens/Login/Login";
import VerifyOTP from "../../Screens/VerifyOTP/VerifyOTP";
import WelcomeScreen from "../../Screens/WelcomeScreen/WelcomeScreen";
import { WhiteText } from "../../components";
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <NavigationContainer
            theme={{
                ...DarkTheme,
                colors: {
                    ...DarkTheme.colors,
                    background: "#000",
                    card: "#000",
                    text: "#fff",
                    border: "#000",
                    primary: "#fff",
                },
            }}
        >
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#000" },
                headerTintColor: "#fff",
                headerTitleStyle: { color: "#fff" },
                cardStyle: { backgroundColor: "#000" },
            }}
            initialRouteName="LandingScreen"
        >
            {/* <Stack.Screen
                name="Home"
                component={DrawerNavigation}
                options={{ headerShown: false }}
            /> */}
            {/* <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={{ headerTitle: "Order Details" }}
            /> */}
            <Stack.Screen
                name="LandingScreen"
                component={LandingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ 
                    headerShown: true,
                    headerTitle: "Sign Up",
                    headerTitleStyle: { color: "#fff", fontWeight: "bold", fontSize: 25 },
                    headerTitleContainerStyle: { flex:12, justifyContent: "center", alignItems:"flex-end"},
                        
                     
                }}
            />
            <Stack.Screen
                name="VerifyOTP"
                component={VerifyOTP}
                options={{ 
                    headerShown: true,
                    headerTitle: "Sign Up",
                    headerTitleStyle: { color: "#fff", fontWeight: "bold", fontSize: 25 },
                    headerTitleContainerStyle: { flex:12, justifyContent: "center", alignItems:"flex-end"},
                        
                     
                }}
            />
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{ 
                    headerShown: true, 
                    headerTitle: "",
                }}
            />
            <Stack.Screen
                name="Home"
                component={DrawerNavigation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStack