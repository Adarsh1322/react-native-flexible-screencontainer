import React from 'react';
import { Dimensions, ScrollView, Text, View, FlatList } from 'react-native';
import Shimmer from './shimmer';

export default function ShimmerComponent({ styles, type, children }) {
  const shimmerStyle = {
    width: 280,
    height: 200,
    borderRadius: 12,
    marginRight: 15,
  };

  const renderShimmerItem = ({ index }) => (
    <Shimmer
      key={`grid-item-${index}`}
      autoRun
      visible={false}
      colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
      style={{
        width: Dimensions.get('window').width / 3 - 16,
        height: 150,
        borderRadius: 12,
      }}
    >
      <Text>hello</Text>
    </Shimmer>
  );

  return (
    <View style={{ paddingBottom: 0 }}>
      {type === 'default' ? (
        <>
          <Shimmer
            autoRun
            visible={false}
            colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
            style={{ marginLeft: 10, marginBottom: 10, marginTop: 15, width: 150, height: 20, borderRadius: 7 }}
          >
            <Text>Top Brands</Text>
          </Shimmer>

          <FlatList
            data={[1, 2, 3]}
            keyExtractor={(_, index) => `shimmer-item-${index}`}
            numColumns={3}
            renderItem={renderShimmerItem}
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />

          <Shimmer
            autoRun
            visible={false}
            colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
            style={{ marginLeft: 10, marginBottom: 20, marginTop: 10, width: 150, height: 20, borderRadius: 7 }}
          >
            <Text>Top Brands</Text>
          </Shimmer>

          {[...Array(2)].map((_, index) => (
            <ScrollView
              key={`scroll-row-${index}`}
              style={{ padding: 10, paddingBottom: index === 1 ? 10 : 0 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {[...Array(2)].map((_, i) => (
                <Shimmer
                  key={`scroll-item-${index}-${i}`}
                  autoRun
                  visible={false}
                  colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
                  style={shimmerStyle}
                >
                  <Text>hello</Text>
                </Shimmer>
              ))}
            </ScrollView>
          ))}
        </>
      ) : (
        <Shimmer autoRun visible={false} colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']} style={styles} />
      )}

      {children}
    </View>
  );
}
