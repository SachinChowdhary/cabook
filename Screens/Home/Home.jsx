import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { WhiteText } from "../../components";
const Home = () => {
    const navigation = useNavigation();
    return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <TouchableOpacity onPress={() => navigation.navigate("OrderDetails")}>
            <WhiteText>Home Screen</WhiteText>
            </TouchableOpacity>
        </View>
    );
};

export default Home;