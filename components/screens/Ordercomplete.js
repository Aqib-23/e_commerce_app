import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";
var { width, height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Ordercomplete() {

  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: width * 0.6,
          height: height * 0.27,
          backgroundColor: "#E0FFE5",
          borderRadius: 250,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#4CD964",
          borderWidth: 2,
        }}
      >
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "#4CD964",
            borderRadius: 200,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            style={{ fontSize: 50, fontWeight: "bold" }}
            name="checkmark-sharp"
            size={50}
            color="white"
          />
        </View>
      </View>
      <Text
        style={{ fontWeight: 500, fontSize: 25, marginTop: 50, lineHeight: 50 }}
      >
        Congratulations!!!
      </Text>
      <Text
        style={{
          fontWeight: 400,
          fontSize: 18,
          lineHeight: 30,
          marginHorizontal: 50,
          textAlign: "center",
        }}
      >
        Your order have been taken and is being attended to
      </Text>
      <Pressable
        style={{
          width: width * 0.37,
          height: height * 0.08,
          backgroundColor: "#FFA451",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginTop: 60,
        }}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
          Track order
        </Text>
      </Pressable>
      <Pressable onPress={()=>navigation.navigate('Home')}
        style={{
          width: width * 0.5,
          height: height * 0.07,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginTop: 50,
          borderColor:'#FFA451',
          borderWidth:1
        }}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 16 , color:'#FFA451' }}>
        Continue shopping
        </Text>
      </Pressable>
    </View>
  );
}
