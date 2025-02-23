
import React from "react";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import { colors } from '../utils/colors';
import { Images } from "../utils/images";

export default function EmptyViewComponent(props) {
  const { emptyViewMessage, buttonText, onEmptyButtonPress, emptyRendeView } = props;
  return emptyRendeView === 'default' ? (
    <View
      style={{
        justifyContent: "center",
        top: Dimensions.get("screen").height / 4,
      }}
    >
      <View>
        <Image
          style={{ width: 200, height: 200, alignSelf:'center' }}
          resizeMode={"contain"}
          source={Images?.no_data_found}
        />
        <Text
          style={{
            alignItems: "center",
            textAlign: "center",
            color: colors.text_color_grey,
            fontSize: 20,
          }}
        >
          {emptyViewMessage ? emptyViewMessage : ""}
        </Text>
        {buttonText && (
          <TouchableOpacity
            style={{
              marginTop:20,
              height: 45,
              marginStart:12,
              marginEnd:12,
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#82ae32",
              borderColor: "transparent",
              justifyContent:'center',
              alignItems:'center'
            }}
            onPress={onEmptyButtonPress}
          >
            <Text style={{ fontSize: 16, color: "#fff", fontWeight: "600" }}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  ):null
}
