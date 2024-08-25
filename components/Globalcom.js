import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
var { width, height } = Dimensions.get("window");
import { addtocart } from "../reduxhandle/cartSlice";
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { FIREBASE_DB } from "../firbaseConfig";

export default function Globalcom() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleaddtocaritem = async (cartitem) => {
    dispatch(addtocart(cartitem));
    try {
      // send data in to firestore
      const { id, image, title, titledescription, detail, desciption, price } =
        cartitem;
      const addinfirebase = await addDoc(collection(FIREBASE_DB, "Added"), {
        id: id,
        image: image,
        title: title,
        title_description: titledescription,
        detail: detail,
        description: desciption,
        price: price,
      });
    } catch (error) {
      console.log("erro adding item to firstore", error);
    }
  };

  // fetch data from firstore my code
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const getdata = await getDocs(collection(FIREBASE_DB, "Added"));
        const items = [];
        getdata.forEach((doc) => {
          items.push(doc.data());
        });
        console.log(items);
      } catch (error) {
        console.log("error in addding an item", error);
      }
    };
    fetchdata();
  }, []);

  // chat gpt
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(FIREBASE_DB, "Added"));
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         // Log the entire document to see its structure and contents
  //         console.log("Document data:", doc.data());
  //         // Push the entire document to the items array
  //         items.push(doc.data());
  //       });
  //       console.log("Items fetched:", items);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchdata();
  // }, []);

  const cart = [
    {
      id: 1,
      image: require("../assets/images/slider3.png"),
      desciption: "Quinoa fruit salad",
      price: "$ 10,000",
      icon1: { name: "pluscircle", size: 24, color: "#FFA451" },
      iconheart: { name: "heart", size: 24, color: "black" },
      title: "One Pack Contains:",
      titledescription:
        "Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.",
      detail:
        "If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make",
    },
    {
      id: 2,
      image: require("../assets/images/slider2.png"),
      desciption: "Tropical fruit salad",
      price: "$ 10,000",
      icon1: { name: "pluscircle", size: 24, color: "#FFA451" },
      iconheart: { name: "heart", size: 27, color: "black" },
      title: "One Pack Contains:",
      titledescription:
        "mixture of various fruits, chopped into bite-sized pieces, a",
      detail:
        "With its vibrant colors and combination of flavors, fruit salad offers a delightful blend of sweetness,",
    },
    {
      id: 3,
      image: require("../assets/images/slider3.png"),
      desciption: "Bmelon fruit salad",
      price: "$ 10,000",
      icon1: { name: "pluscircle", size: 24, color: "#FFA451" },
      iconheart: { name: "heart", size: 27, color: "black" },
      title: "One Pack Contains:",
      titledescription:
        "Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.",
      detail:
        "If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make",
    },
  ];

  const cartdetail = (itemdetail) => {
    navigation.navigate("ItemDetail", { selecteditem: itemdetail });
  };

  return (
    <ScrollView
      horizontal={true}
      style={{ flex: 1 }}
      showsHorizontalScrollIndicator={false}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 1,
        }}
      >
        {/* cart item map here */}
        {cart.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => cartdetail(item)}
              style={{
                alignItems: "center",
                backgroundColor:
                  item.id == 1
                    ? "#FFFAEB"
                    : item.id == 2
                    ? "#FEF0F0"
                    : "#F1EFF6",
                borderRadius: 10,
                padding: 10,
                margin: 5,
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
                style={{ marginVertical: 10, fontSize: 15, fontWeight: 500 }}
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
    </ScrollView>
  );
}
