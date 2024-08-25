import { View, Text, Dimensions, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Globalcom from "../Globalcom";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../reduxhandle/cartSlice";
import { addDoc, collection } from "firebase/firestore";
import { FIREBASE_DB } from "../../firbaseConfig";
var { width, height } = Dimensions.get("window");

export default function Homescreenone() {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const countitem = useSelector((state) => state.cart);

  const cartitem = [
    {
      id: 4,
      image: require("../../assets/images/honey.png"),
      desciption: "Honey lime combo",
      price: "$ 2000",
      icon1: { name: "pluscircle", size: 24, color: "#FFA451" },
      icon2: { name: "circle-with-minus", size: 24, color: "black" },
      iconheart: { name: "heart", size: 24, color: "black" },
      title: "One Pack Contains:",
      titledescription:
        "drizzled over fruits, used as a glaze for grilled meats, or incorporated.",
      detail:
        "The honey-lime combo is a delightful fusion of sweet and tangy flavors. Honey adds a natural sweetness This combination is commonly used in various dishes",
    },
    {
      id: 5,
      image: require("../../assets/images/berry.png"),
      desciption: "Berry mango combo",
      price: "$ 1000",
      icon1: { name: "pluscircle", size: 24, color: "#FFA451" },
      icon2: { name: "circle-with-minus", size: 24, color: "black" },
      iconheart: { name: "heart", size: 27, color: "black" },
      title: "One Pack Contains:",
      titledescription:
        "berries such as strawberries, blueberries, raspberries, or blackberries",
      detail:
        "The berry mango combo is a delicious blend of sweet and tart flavors, combining the tropical sweetness of mangoes with the juicy tartness of assorted berries.",
    },
  ];

  const cartdetail = (itemdetail) => {
    navigation.navigate("ItemDetail", { selecteditem: itemdetail });
  };

  const handleaddtocaritem = async(cartitem) => {
    dispatch(addtocart(cartitem));
    const {id, image, title, titledescription, detail, desciption, price} = cartitem
    const addinfirebase = addDoc(collection(FIREBASE_DB , 'Added') , {
      id: id,
      image: image,
      title: title,
      title_description: titledescription,
      detail: detail,
      description: desciption,
      price: price,
    })
    console.log(addinfirebase)
  };

  return (
    <View style={{ marginTop: 35, flex: 1, backgroundColor: "#F5F5ED" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 26,
        }}
      >
        <Ionicons name="reorder-two" size={24} color="#070648" />
        <Fontisto
          style={{ left: 133 }}
          onPress={() => navigation.navigate("Basketscreen")}
          name="shopping-basket"
          size={24}
          color="#FFA451"
        />
        <View style={{ bottom: 15 , backgroundColor:'yellow' , borderRadius:20 , height:22 }}>
          <Text style={{ fontSize: 16, fontWeight: 500 }}>
            {countitem.length}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          lineHeight: 30,
          fontWeight: 400,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        Hello Tony, What fruit salad combo do you want today?
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginHorizontal: 10,
        }}
      >
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{ marginRight: 10 }}
        />
        <TextInput
          style={{
            padding: 11,
            backgroundColor: "#F3F4F9",
            width: width * 0.7,
            borderRadius: 8,
            height: 45,
          }}
          placeholder="Search for fruit salad combos"
        />
        <Entypo name="flow-parallel" size={24} color="black" />
      </View>
      {/* recommended combo */}
      <Text
        style={{
          padding: 25,
          fontWeight: 400,
          fontSize: 22,
          marginVertical: 10,
        }}
      >
        Recommended Combo
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        {/* cart item map here */}
        {cartitem.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => cartdetail(item)}
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                width: width * 0.42,
                height: height * 0.24,
              }}
              key={index}
            >
              {
                <EvilIcons
                  style={{ left: 53, color: "#F08626" }}
                  name={item.iconheart.name}
                  size={item.iconheart.size}
                  color={item.iconheart.color}
                />
              }
              <Image source={item.image}></Image>
              <Text
                style={{ marginVertical: 10, fontSize: 16, fontWeight: 500 }}
              >
                {item.desciption}
              </Text>
              <View
                style={{
                  marginVertical: 3,
                  flexDirection: "row",
                  gap: 40,
                }}
              >
                <Text
                  style={{ color: "#F08626", fontWeight: 400, fontSize: 15 }}
                >
                  {item.price}
                </Text>
                <TouchableOpacity
                  onPress={() => handleaddtocaritem(item)}
                  activeOpacity={1}
                >
                  {
                    <AntDesign
                      name={item.icon1.name}
                      size={item.icon1.size}
                      color={item.icon1.color}
                    />
                  }
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* new deal */}
      <View>
        <ScrollView
          style={{ padding: 9 }}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
        >
          <TouchableOpacity activeOpacity={1}>
            <Text style={{ margin: 5, fontSize: 24, fontWeight: 500 }}>
              Hottest
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}>
            <Text
              style={{
                margin: 12,
                color: "#938DB5",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Popular
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}>
            <Text
              style={{
                margin: 12,
                color: "#938DB5",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              New combo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}>
            <Text
              style={{
                margin: 12,
                color: "#938DB5",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Top
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Globalcom></Globalcom>
    </View>
  );
}
