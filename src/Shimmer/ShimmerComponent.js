import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Shimmer from './shimmer';

export default function ShimmerComponent(props) {
  const {styles, type, children} = props;
  return type === 'default' ? (
    <View style={{paddingBottom: 0}}>
      <Shimmer
        autoRun={true}
        visible={false}
        colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
        style={{
          marginLeft: 10,
          marginBottom: 10,
          marginTop: 15,
          width: 150,
          height: 20,
          borderRadius: 7,
        }}>
        <Text>Top Brands</Text>
      </Shimmer>

      <FlatGrid
        fixed={false}
        itemDimension={Dimensions.get('window').width / 3 - 16}
        data={[1, 2, 3]}
        renderItem={({item, i}) => (
          <Shimmer
            autoRun={true}
            visible={false}
            colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
            style={{
              width: Dimensions.get('window').width / 3 - 16,
              height: 150,
              borderRadius: 12,
            }}>
            <Text>hello</Text>
          </Shimmer>
        )}
      />
      <Shimmer
        autoRun={true}
        visible={false}
        colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
        style={{
          marginLeft: 10,
          marginBottom: 20,
          marginTop: 10,
          width: 150,
          height: 20,
          borderRadius: 7,
        }}>
        <Text>Top Brands</Text>
      </Shimmer>

      <ScrollView
        style={{padding: 10}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Shimmer
          autoRun={true}
          visible={false}
          colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
          style={{
            width: 280,
            height: 200,
            borderRadius: 12,
            marginRight: 10,
          }}>
          <Text>hello</Text>
        </Shimmer>
        <Shimmer
          autoRun={true}
          visible={false}
          colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
          style={{
            width: 280,
            height: 200,
            borderRadius: 12,
            marginRight: 15,
          }}>
          <Text>hello</Text>
        </Shimmer>
      </ScrollView>
      <ScrollView
        style={{padding: 10, paddingBottom: 10}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Shimmer
          autoRun={true}
          visible={false}
          colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
          style={{
            width: 280,
            height: 200,
            borderRadius: 12,
            marginRight: 10,
          }}>
          <Text>hello</Text>
        </Shimmer>
        <Shimmer
          autoRun={true}
          visible={false}
          colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
          style={{
            width: 280,
            height: 200,
            borderRadius: 12,
            marginRight: 15,
          }}>
          <Text>hello</Text>
        </Shimmer>
      </ScrollView>
      {children}
    </View>
  ) : (
    <View style={{paddingBottom: 0}}>
      <Shimmer
        autoRun={true}
        visible={false}
        colorShimmer={['#C8C8C8', '#B0B0B0', '#C8C8C8']}
        style={styles}
      />
      {children}
    </View>
  );
}
