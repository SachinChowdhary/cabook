import React from "react";
import { View, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WhiteText } from "../../components";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import mail from "../../assets/mail.png";
const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ flex: 0.84,paddingHorizontal: 20, gap:30 }}>
             <View>
                <WhiteText style={{ fontSize: 29 }}>Enter Your Mobile Number *</WhiteText>
                <TextInput placeholder="Mobile Number" 
              placeholderTextColor="#000000" 
              maxLength={10}
              style={{ 
                borderBottomWidth: 1, 
                borderColor: "#fff", 
                marginTop: 20, 
                fontSize: 24, 
                paddingVertical: 10, 
                color: "#000000", 
                backgroundColor: "#fff", 
                height: 55,
                paddingLeft: 20,
                borderRadius: 13,
                }} 
                keyboardType="numeric" />
             </View>
             <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <WhiteText style={{ fontSize: 31 }}>Or</WhiteText>
             </View>
             <View style={{ flexDirection: "column", gap: 20 }}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5, backgroundColor: "#fff", paddingVertical: 15, paddingHorizontal: 20, borderRadius: 10 }}>
                    <View>
                       <Image source={google} width={26} height={26} />
                    </View>
                    <View>
                        <WhiteText style={{color: "#000", fontSize:24 }}>Continue with Google</WhiteText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center",justifyContent: "center", gap: 5, backgroundColor: "#fff", paddingVertical: 15, paddingHorizontal: 20, borderRadius: 10 }}>
                     <View>
                        <Image source={apple} width={26} height={26} />
                     </View>
                    <View>
                        <WhiteText style={{color: "#000", fontSize:24}}>Continue with Apple</WhiteText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center",justifyContent: "center", gap: 5, backgroundColor: "#fff", paddingVertical: 15, paddingHorizontal: 20, borderRadius: 10 }}>
                     <View>
                        <Image source={mail} width={26} height={26} />
                     </View>
                    <View>
                        <WhiteText style={{color: "#000", fontSize:24}}>Continue with Email</WhiteText>
                    </View>
                </TouchableOpacity>
             </View>
             <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <WhiteText style={{textDecorationLine: "underline" }}>Already have an account?</WhiteText>
             </View>
           </View>
             <View style={{ flex: 0.16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
                 <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
            </View>
             <View>
                <TouchableOpacity style={{ backgroundColor: "#fff", borderRadius: 35, paddingVertical: 20, paddingHorizontal: 20 }} onPress={()=>navigation.navigate('VerifyOTP')}>
                    <WhiteText style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>Continue</WhiteText>
                </TouchableOpacity>
            </View>
            <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
                 <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
            </View>
            <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
                 <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
            </View>
             </View>
        </View>
    );
}
export default Login;