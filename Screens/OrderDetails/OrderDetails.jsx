import React from "react";
import { View } from "react-native";
import { WhiteText } from "../../components";

export default function OrderDetails({ navigation }) {
  return (
    <View>
      <WhiteText>Order Details Screen</WhiteText>
      <WhiteText>Order ID:</WhiteText>
    </View>
  );
}