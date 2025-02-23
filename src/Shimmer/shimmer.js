import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

const CustomLinearGradient = ({ locationStart, colorShimmer, widthShimmer }) => (
  <LinearGradient
    colors={colorShimmer}
    style={{ flex: 1 }}
    start={{ x: -1, y: 0.5 }}
    end={{ x: 2, y: 0.5 }}
    locations={[
      locationStart + widthShimmer,
      locationStart + 0.5 + widthShimmer / 2,
      locationStart + 1,
    ]}
  />
);

CustomLinearGradient.propTypes = {
  locationStart: PropTypes.number.isRequired,
  colorShimmer: PropTypes.array.isRequired,
  widthShimmer: PropTypes.number.isRequired,
};

const AnimatedLinearGradient = Animated.createAnimatedComponent(CustomLinearGradient);

const Shimmer = ({
  width = 200,
  height = 15,
  widthShimmer = 0.7,
  duration = 1000,
  colorShimmer = ["#ebebeb", "#c5c5c5", "#ebebeb"],
  reverse = false,
  autoRun = false,
  visible = false,
  children,
  style,
  backgroundColorBehindBorder = "white",
  hasBorder = false,
}) => {
  const beginShimmerPosition = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    let isMounted = true;

    const loopAnimated = () => {
      if (!isMounted) return;
      beginShimmerPosition.setValue(-1);
      Animated.timing(beginShimmerPosition, {
        toValue: 1,
        duration,
        useNativeDriver: false,
      }).start(() => {
        if (!visible && isMounted) {
          loopAnimated();
        }
      });
    };

    if (autoRun) {
      loopAnimated();
    }

    return () => {
      isMounted = false; // Prevents memory leaks
    };
  }, [autoRun, visible, duration]);

  const beginPosition = reverse ? 0.7 : -0.7;
  const endPosition = reverse ? -0.7 : 0.7;

  const shimmerPosition = beginShimmerPosition.interpolate({
    inputRange: [-1, 1],
    outputRange: [beginPosition, endPosition],
  });

  if (visible) return <>{children}</>;

  return (
    <View style={[{ width, height }, styles.container, style]}>
      <View style={{ flex: 1 }}>
        <AnimatedLinearGradient
          locationStart={shimmerPosition}
          colorShimmer={colorShimmer}
          widthShimmer={widthShimmer}
        />
        <View style={{ width: 0, height: 0 }}>{children}</View>
        {((style?.borderRadius || hasBorder) && Platform.OS === "android") && (
          <View
            style={{
              position: "absolute",
              top: -40,
              bottom: -40,
              right: -40,
              left: -40,
              borderWidth: 40,
              borderColor: backgroundColorBehindBorder,
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
});

Shimmer.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  widthShimmer: PropTypes.number,
  duration: PropTypes.number,
  colorShimmer: PropTypes.array,
  reverse: PropTypes.bool,
  autoRun: PropTypes.bool,
  visible: PropTypes.bool,
  children: PropTypes.any,
  style: PropTypes.any,
  backgroundColorBehindBorder: PropTypes.string,
  hasBorder: PropTypes.bool,
};

export default Shimmer;
