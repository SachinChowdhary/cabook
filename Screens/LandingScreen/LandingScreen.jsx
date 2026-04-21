import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import cabok from "../../assets/cabok.png";
import { WhiteText } from "../../components";
import { useNavigation } from "@react-navigation/native";
const LandingScreen = () => {
    const navigation = useNavigation();
    return (<>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" }}>
            <View style={{ flex:1,justifyContent: "center", alignItems: "center" }}>
                <Image source={cabok} width={166} height={51} />
            </View>
        </View>
        <View style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}>
            <WhiteText style={{ fontSize: 16, lineHeight: 30 }}>By continuing, you agree that ou have read and accept our <WhiteText style={{textDecorationLine: "underline"}}>T&Cs</WhiteText> and <WhiteText style={{textDecorationLine: "underline"}}>Privacy Policy</WhiteText></WhiteText>
        </View>
        <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center", marginBottom: 30}}>
            <View>
                <TouchableOpacity style={{ backgroundColor: "#fff", borderRadius: 35, paddingVertical: 20, paddingHorizontal: 20 }} onPress={()=>navigation.navigate('Login')}>
                    <WhiteText style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>Continue</WhiteText>
                </TouchableOpacity>
            </View>
            <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
                 <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
            </View>
            <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
                 <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
            </View>
            <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
                 <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
            </View>
         </View>
    </>
    );
}

export default LandingScreen