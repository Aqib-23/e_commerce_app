import { View, Text, Dimensions, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
var { width, height } = Dimensions.get("window");

export default function Authentication() {
  const [verify, setverify] = useState("");
  const [entername, setentername] = useState(false);

  const navigation = useNavigation();

  const handlechagetext = (text) => {
    setverify(text);
    if (verify.length == 4 || verify.length == 7) {
      navigation.navigate("Home");
      setverify("");
    }
  };

  const verification = () => {
    setentername(true);
  };
  return (
    <View style={{ flex: 1, marginTop: 0.3 }}>
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
          <Image source={require("../../assets/images/s3.png")} />
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
                marginBottom: -3,
                height: 10,
                width: 20,
                backgroundColor: "#F08626",
                borderRadius: 20,
              }}
            />
            {/*  */}
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
                marginBottom: -3,
                height: 11,
                width: 20,
                backgroundColor: "#F08626",
                borderRadius: 20,
              }}
            />
            {/*  */}
            <View
              style={{
                marginBottom: 5,
                height: 10,
                width: 23,
                backgroundColor: "#F08626",
                borderRadius: 20,
              }}
            />
            <View
              style={{
                height: 6,
                width: 10,
                backgroundColor: "#F08626",
                borderRadius: 20,
              }}
            />
          </View>
          <Text>{verify}</Text>
        </View>
        {/* second part */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <Text style={{ fontWeight: 500, fontSize: 20 }}>
            What is your firstname?
          </Text>
          <TextInput
            onChangeText={handlechagetext}
            value={verify}
            style={{
              padding: 15,
              backgroundColor: "#d3d3d3",
              width: width * 0.85,
              borderRadius: 8,
              marginTop: 20,
              height: 45,
            }}
            placeholder="Tony"
          ></TextInput>
          <Pressable onPress={() => verification()}>
            {entername == false ? null : (
              <Text style={{ color: "red" }}>please enter your firstname</Text>
            )}
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
                Start Ordering
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
