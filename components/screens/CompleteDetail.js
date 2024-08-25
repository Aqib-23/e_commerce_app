import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
var { width, height } = Dimensions.get("window");
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CompleteDetail() {
  const navigation = useNavigation();
  const [closemodal, setclosemodal] = useState(true);
  const [verifytext, setverifytext] = useState('');
  const [emptyfield, setemptyfield] = useState(false);

  const handleclosemodal = () => {
    setclosemodal(false);
    navigation.goBack();
  };

  const handledeliverydetail = () => {
    if(verifytext.length >= 6 ){
      navigation.navigate("Ordercompleteion");
    }
    else{
      setemptyfield(true)
    }
  };

  const handletext = (text) => {
    setverifytext(text);
  };

  return (
    <View style={{ flex: 1, marginBottom:50, justifyContent: "flex-end" }}>
      <View style={{ height: height * 0.5, padding: 20 }}>
        {closemodal == true ? (
          <View>
            <Entypo
              onPress={() => handleclosemodal()}
              style={{ textAlign: "center" }}
              name="circle-with-cross"
              size={30}
              color="gray"
            />
            <View style={{ padding: 10, gap: 10, marginVertical: 20 }}>
              <Text style={{ fontSize: 17, fontWeight: 500 }}>
                Delivery address
              </Text>
              <TextInput
                style={{
                  backgroundColor: "#d3d3d3",
                  width: width * 0.8,
                  height: height * 0.06,
                  padding: 2,
                  paddingLeft: 20,
                  borderRadius: 10,
                }}
                placeholder="10th avenue, Lekki, Lagos State"
                onChangeText={(text) => handletext(text)}
              ></TextInput>
              {emptyfield == true ?<Text style={{color:'red'}}>First enter you'r address</Text>:null}
            </View>
            <View style={{ padding: 10, gap: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: 500 }}>
                Number we can call
              </Text>
              <TextInput
                style={{
                  backgroundColor: "#d3d3d3",
                  width: width * 0.8,
                  height: height * 0.06,
                  padding: 2,
                  paddingLeft: 20,
                  borderRadius: 10,
                }}
                editable={false}
                placeholder="09090605708"
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 20,
              }}
            >
              <Pressable
                onPress={() => handledeliverydetail()}
                style={{
                  height: height * 0.07,
                  justifyContent: "center",
                  padding: 12,
                  borderWidth: 1,
                  borderColor: "#FFA451",
                  borderRadius: 10,
                }}
              >
                <Text>Pay on delivery</Text>
              </Pressable>
              <Pressable
                onPress={() => handledeliverydetail()}
                style={{
                  height: height * 0.07,
                  justifyContent: "center",
                  padding: 12,
                  borderWidth: 1,
                  borderColor: "#FFA451",
                  borderRadius: 10,
                }}
              >
                <Text>Pay with card</Text>
              </Pressable>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}
