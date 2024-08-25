import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
var { width, height } = Dimensions.get("window");
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Cartitemscreen({ route }) {
  const [additem, setadditem] = useState(0);
  const [favourite, setfavourite] = useState(true);

  const additems = () => {
    setadditem(additem + 1);
  };

  const reduceitems = () => {
    if (additem > 0) {
      setadditem(additem - 1);
    }
  };

  const setfav = () => {
    setfavourite(!favourite);
  };

  const addtocart=()=>{
    console.warn("item was successfully added")
  }

  const navigation = useNavigation();

  const { selecteditem } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#FFA451",
          height: height * 0.47,
          borderRadius: 7,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            width: width * 0.25,
            borderRadius: 30,
            bottom: 25,
            right: 120,
          }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            name="chevron-back"
            size={30}
            color="black"
          />
          <Text style={{ marginTop: 5 }}>Go back</Text>
        </View>
        <Image
          style={{ height: height * 0.22, padding: 84 }}
          source={selecteditem.image}
        ></Image>
      </View>
      <View style={{ padding: 25 }}>
        <Text style={{ fontSize: 25, fontWeight: 400 }}>
          {selecteditem.desciption}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 17,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <AntDesign
              onPress={() => reduceitems()}
              name="minuscircleo"
              size={24}
              color="black"
            />
            <Text style={{ fontSize: 18 }}>{additem}</Text>
            <AntDesign
              onPress={() => additems()}
              style={{ color: "#F08626" }}
              name="pluscircleo"
              size={24}
              color="black"
            />
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 400 }}>
              {selecteditem.price}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: width * 1,
          height: 0.6,
          backgroundColor: "pink",
          bottom: 10,
        }}
      ></View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: 400, fontSize: 18 }}>
          {selecteditem.title}
        </Text>
        <View
          style={{
            width: width * 0.43,
            height: 1.8,
            backgroundColor: "#F08626",
            top: 2,
          }}
        ></View>
        <Text
          style={{
            fontWeight: 400,
            fontSize: 15,
            lineHeight: 20,
            marginTop: 10,
          }}
        >
          {selecteditem.titledescription}
        </Text>
      </View>
      <View
        style={{
          width: width * 1,
          height: 0.6,
          backgroundColor: "pink",
          top: 3,
        }}
      ></View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 12, fontWeight: 300 }}>
          {selecteditem.detail}
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity activeOpacity={1} onPress={() => setfav()}>
          {favourite == true ? (
            <Feather
              style={{
                backgroundColor: "#FFF7F0",
                borderRadius: 40,
                padding: 10,
              }}
              name="heart"
              size={24}
              color="#FFA451"
            />
          ) : (
            <FontAwesome
              style={{
                backgroundColor: "#FFF7F0",
                borderRadius: 40,
                padding: 10,
              }}
              name="heart"
              size={24}
              color="#FFA451"
            />
          )}
        </TouchableOpacity>
        <Pressable onPress={()=>addtocart()}
          style={{
            backgroundColor: "#FFA451",
            width: width * 0.5,
            height: height * 0.07,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>Add to basket</Text>
        </Pressable>
      </View>
    </View>
  );
}
