import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
var { width, height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import { removetocart } from "../../reduxhandle/cartSlice";
import CompleteDetail from "./CompleteDetail";

export default function Basketitem() {

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const cartitems = useSelector((state) => state.cart);

  const handleremovetocart = (item) => {
    dispatch(removetocart(item));
  };


  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#FFA451",
          height: height * 0.17,
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
            bottom: -15,
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
          <Text
            style={{
              fontSize: 18,
              color: "white",
              fontWeight: "400",
              left: 50,
            }}
          >
            My Basket
          </Text>
        </View>
      </View>
      <ScrollView>
        {cartitems.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                gap: 15,
                padding: 25,
              }}
            >
              <Image
                style={{
                  backgroundColor:
                    item.id == 1
                      ? "#FFFAEB"
                      : item.id == 2
                      ? "#FEF0F0"
                      : "#F1EFF6",
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                }}
                source={item.image}
              ></Image>
              <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 500 }}>
                {item.desciption}
              </Text>
              <Text
                style={{
                  marginTop: 28,
                  fontSize: 16,
                  fontWeight: 400,
                  marginLeft: 30,
                }}
              >
                {item.price}
              </Text>
              <Entypo
                onPress={() => handleremovetocart(item.id)}
                style={{
                  marginTop: 30,
                  fontSize: 27,
                  fontWeight: 500,
                  right: 5,
                }}
                name="circle-with-minus"
                size={24}
                color="black"
              />
            </View>
          );
        })}
        {cartitems.length > 0 ? (
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text>Total</Text>
              <Text style={{ fontSize: 20 }}>$ 60,000</Text>
            </View>
            <Pressable onPress={()=>navigation.navigate('Completedetail')}
              style={{
                width: width * 0.5,
                backgroundColor: "#FFA451",
                borderRadius: 13,
              }}
            >
              <Text
                style={{ textAlign: "center", marginTop: 10, color: "white" }}
              >
                Checkout
              </Text>
            </Pressable>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}
