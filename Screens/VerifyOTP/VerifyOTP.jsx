import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { WhiteText } from "../../components";
const VerifyOTP = () => {
    const inputRefs = [React.useRef(), React.useRef(), React.useRef(), React.useRef()];
    const [otp, setOtp] = React.useState(["", "", "", ""]);
    const [seconds, setSeconds] = React.useState(59);
    const navigation = useNavigation();
    React.useEffect(() => {
        if (seconds === 0) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={{ flex: 0.84, paddingHorizontal: 20, gap: 10 }}>
                <WhiteText style={{ fontSize: 31 }}>Verify OTP</WhiteText>
                <WhiteText style={{ fontSize: 15, color: "#fff", opacity: 0.8 }}>Enter the 4 digit code sent to your message</WhiteText>
                <View style={{ flexDirection: "row", gap: 15 }}>
                    {inputRefs.map((ref, index) => (
                        <TextInput
                            key={index}
                            ref={ref}
                            value={otp[index]}
                            maxLength={1}
                            keyboardType="numeric"
                            style={{
                                borderBottomWidth: 1,
                                borderColor: "#fff",
                                marginTop: 20,
                                fontSize: 24,
                                color: "#000",
                                backgroundColor: "#fff",
                                height: 55,
                                borderRadius: 13,
                                width: 60,
                                textAlign: "center",
                            }}


                            onChangeText={(text) => {
                                const newOtp = [...otp];
                                newOtp[index] = text;
                                setOtp(newOtp);
                                if (text && index < inputRefs.length - 1) {
                                    inputRefs[index + 1].current.focus();
                                } else if (!text && index > 0) {
                                    inputRefs[index - 1].current.focus();
                                }
                            }}

                            onKeyPress={(e) => {
                                if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
                                    inputRefs[index - 1].current.focus();
                                }
                            }}
                        />
                    ))}
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <TouchableOpacity style={{ width: 130, height: 40, backgroundColor: "#fff", borderRadius: 8, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate('VerifyOTP')}>
                        <WhiteText style={{ color: "#000", fontSize: 19 }}>Resend OTP</WhiteText>
                    </TouchableOpacity>
                    <View>
                        <WhiteText>00:{seconds}</WhiteText>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <WhiteText style={{ textDecorationLine: "underline", fontSize: 15 }}>Change the phone number</WhiteText>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 0.16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                    <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
                </View>
                <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                    <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: "#fff", borderRadius: 35, paddingVertical: 20, paddingHorizontal: 20 }} onPress={() => navigation.navigate('WelcomeScreen')}>
                        <WhiteText style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>Continue</WhiteText>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                    <View style={{ height: 2, width: 35, backgroundColor: "#fff" }} />
                </View>
            </View>
        </View>
    );
};

export default VerifyOTP;