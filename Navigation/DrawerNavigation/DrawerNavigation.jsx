import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import home from "../../assets/home.png";
import servicesIcon from "../../assets/services.png";
import profileIcon from "../../assets/profile.png";
import activityIcon from '../../assets/activity.png'
import Home from "../../Screens/Home/Home";
import Services from "../../Screens/Services/Services";
import MyProfile from "../../Screens/Profile/MyProfile";
import Activity from "../../Screens/Activity/Activity";
import { SafeAreaView } from "react-native-safe-area-context";
export default function DrawerNavigation() {
    const Tab = createBottomTabNavigator();
    const renderIcon = (icon) => ({ focused }) => (
        <View>
            <Image
                source={icon}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "#2B48FC" : "#000",
                }}
                resizeMode="contain"
            />
        </View>
    );
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: "#fff",
                        height: 72,
                        borderRadius: 40,
                        marginBottom: 10,
                        marginHorizontal: 10,
                        paddingTop: 10,
                        paddingBottom: 10,
                    },
                    tabBarLabelStyle: {
                        display: "none"
                    },
                    tabBarIconStyle: {
                        marginTop: 2,
                    }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: "",
                        tabBarLabel: "",
                        tabBarIcon: renderIcon(home)
                    }}
                />
                <Tab.Screen
                    name="MyRides"
                    component={Services}
                    options={{
                        headerTitle: "",
                        tabBarLabel: "",
                        tabBarIcon: renderIcon(servicesIcon),

                    }}
                />
                <Tab.Screen
                    name="Activity"
                    component={Activity}
                    options={{
                        headerTitle: "",
                        tabBarLabel: "",
                        tabBarIcon: renderIcon(activityIcon)
                    }}
                />
                <Tab.Screen
                    name="MyProfile"
                    component={MyProfile}
                    options={{
                        headerTitle: "",
                        tabBarLabel: "",
                        tabBarIcon: renderIcon(profileIcon)
                    }}
                />
            </Tab.Navigator>
        </SafeAreaView>
    )
}