import React, { memo, useCallback, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import CustomPressableComponent from '../utils/custompressable';
import { colors } from "../utils/colors";
import { Images } from "../utils/images";

function BottomSheetComponent(props) {
  const bottomSheetRef = useRef(null);

  const handleButtonPress = () => {
    if (props?.onButtonPress) {
      props.onButtonPress();
    }
  };

  const handleOnClose = () => {
    if (props?.onClose) {
      props.onClose();
    }
  };

  const CrossIcon = () => {
    return (
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          top: -60,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleOnClose}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "green",
            borderColor: "transparent",
          }}
        >
          <Image source={Images.close} style={{ height: 20, width: 20 }} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    );
  };

  const handleSheetChanges = useCallback((index) => {
  }, []);

  return (
      <BottomSheet
        snapPoints={["30%", "50%"]}
        enablePanDownToClose
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        handleComponent={() => <CrossIcon />}
        backgroundStyle={{backgroundColor:props?.sheetbackgroundColor}}
      >
        <BottomSheetView style={{ flex: 1, padding:10,  }}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={props?.source}
              style={{ width: 200, height: 70 }}
              resizeMode="contain"
            />
            {props?.data?.msg && (
              <View
                style={{
                  flexDirection: "row",
                  marginTop: props?.data?.desc ? 10 : 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "lightgrey",
                    textAlign: "center",
                    marginHorizontal: 10,
                  }}
                >
                  {props?.data?.msg}
                </Text>
              </View>
            )}
            {props?.data?.description && (
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "lightgrey",
                  }}
                >
                  {props?.data?.description}
                </Text>
              </View>
            )}
            <CustomPressableComponent
              onPress={handleButtonPress}
              style={{
                flexDirection: "row",
                marginTop: 10,
                backgroundColor:colors.green1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 10,
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "center",
                  color: colors.white,
                }}
              >
                Done
              </Text>
            </CustomPressableComponent>
          </View>
        </BottomSheetView>
      </BottomSheet>
  );
}

export default memo(BottomSheetComponent);
