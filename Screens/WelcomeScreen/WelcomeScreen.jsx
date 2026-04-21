import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { WhiteText } from "../../components";
import Vector from "../../assets/Vector.png";
import { useNavigation } from "@react-navigation/native";
const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{ flex: 0.84, paddingHorizontal: 20, gap: 10 }}>
                <View>
                    <WhiteText style={{ fontSize: 31 }}>Hello, Riya</WhiteText>
                </View>
                <View>
                    <WhiteText style={{ fontSize: 31 }}>
                        Looks like you're new here! Welcome to CabOK!
                        Get ready for seamless rides at your fingertips. Wherever you're headed, we've got you covered.
                    </WhiteText>
                </View>
                <View>
                    <WhiteText style={{ fontSize: 31, color: "#4971FF" }}>Enjoy your ride...</WhiteText>
                </View>
                <View style={{ justifyContent: "center", alignItems: "flex-end", flex: 1 }}>
                  <Image source={Vector} width={279} height={186} />
                </View>
            </View>
            <View style={{ flex: 0.16, flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
                <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                    <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
                </View>
                <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                    <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
                </View>
                <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                    <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: "#fff", borderRadius: 35, paddingVertical: 20, paddingHorizontal: 20, }} onPress={() => navigation.navigate('Home')}>
                        <WhiteText style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>Continue</WhiteText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default WelcomeScreen;