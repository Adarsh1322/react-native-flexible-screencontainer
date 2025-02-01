import React from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';

export const Loader = ({
  message,
  imageSource,
  textStyle,
  imageStyle,
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {imageSource ? (
        <Image
          source={imageSource}
          style={[{width: 100, height: 100}, imageStyle]}
        />
      ) : null}

      {message && (
        <Text
          style={[{fontSize: 16, color: '#333', marginBottom: 10}, textStyle]}>
          {message}
        </Text>
      )}
    </View>
  );
};
