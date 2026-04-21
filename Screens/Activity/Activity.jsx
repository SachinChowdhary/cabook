import React from "react";
import { View, TouchableOpacity } from "react-native";
import { WhiteText } from "../../components";
import { useNavigation } from "@react-navigation/native";
const Activity = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("LandingScreen")}> 
                <WhiteText>Activity Screen</WhiteText>
            </TouchableOpacity>
        </View>
    );
};

export default Activity;
    