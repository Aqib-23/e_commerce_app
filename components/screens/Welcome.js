import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
var { width, height } = Dimensions.get("window");

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, marginTop: 0.3 }}>
      {/* first part */}
      <View>
        <View
          style={{
            backgroundColor: "#FFA451",
            height: height * 0.65,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Image source={require("../../assets/images/s2.png")} />
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 9 }}
          >
            <View
              style={{
                height: 6,
                width: 20,
                backgroundColor: "#F08626",
                borderRadius: 20,
              }}
            />
            <View
              style={{
                height: 9,
                borderRadius: 80,
                width: width * 0.67,
                backgroundColor: "#F08626",
                margin: -5,
              }}
            />
            <View
              style={{
                height: 6,
                width: 20,
                backgroundColor: "#F08626",
                borderRadius: 20,
              }}
            />
          </View>
        </View>
      </View>
      {/* second part */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 500 }}>
          Get The Freshest Fruit Salad Combo
        </Text>
        <Text
          style={{ fontSize: 14, fontWeight: 400, padding: 10, lineHeight: 20 }}
        >
          We deliver the best and freshest fruit salad in town. Order for a
          combo today!!!
        </Text>
        <Pressable onPress={() => navigation.navigate("Authenticationscreen")}>
          <View
            style={{
              marginTop: 60,
              width: width * 0.85,
              height: 50,
              backgroundColor: "#F08626",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: 400, fontSize: 15 }}>
              Let’s Continue
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
