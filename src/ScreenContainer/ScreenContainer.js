import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Alert,
  Platform,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-safearea-height';
import BottomSheetComponent from '../BottomSheet/BottomSheetComponent';
import EmptyViewComponent from '../EmptyView/EmptyViewComponent';
import { Loader } from '../Loader/LoaderComponent';
import ShimmerComponent from '../Shimmer/ShimmerComponent';
import { Images } from '../utils/images';

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

const ScreenContainer = ({
  children,
  viewType = 'View',
  backgroundColor = '#F1F0F5',
  statusBarStyle = 'light-content',
  /* if showShimmer is true then show shimmer component with data start */
  showShimmer,
  shimmerType = shimmerType || 'default',
  customShimmer /* it is a custom function which is used to render custom shimmer sheet */,
  /* show shimmer component with data end */
  /* if showSheet is true then show bottom sheet with data start */
  showSheet,
  sheetbackgroundColor,
  source,
  data,
  onButtonPress,
  onClose,
  bottomSheetType = bottomSheetType || "default",
  renderCustomBottomSheet /* it is a custom function which is used to render custom bottom sheet */,
  /* show bottom sheet with data end */
  /* if showloader is true and showLoader + mesesage is passed then show loader with message data start */
  showLoader,
  message,
  ImageSource,
  textStyle,
  imageStyle,
  /* show loader with message end */
  /* EmptyView is true then show empty view with message data start */
  emptyView,
  emptyRendeView = emptyRendeView || "default",
  renderCustomEmptyView,
  emptyMessage,
  buttonText,
  onPressButton,
  /* show empty view with data end */
}) => {
  useEffect(() => {
    // Update StatusBar when the component is mounted
    StatusBar.setBarStyle(statusBarStyle, true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true); // Ensures edge-to-edge content
  }, [statusBarStyle]);

  // Loader Function
  const getLoader = () => {
    if (showLoader) {
      return (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}>
          {message || ImageSource ? (
            <Loader
              isLoading={showLoader}
              message={message} // Dynamic text
              imageSource={ImageSource} // Dynamic image (local or remote)
              textStyle={textStyle} // Optional custom text style
              imageStyle={imageStyle} // Optional custom image style
            />
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </View>
      );
    }
    return null;
  };

  // Shimmer Effect
  const getShimmer = () => {
    if (showShimmer) {
      if (shimmerType === 'default') {
        return <ShimmerComponent type={shimmerType} />;
      } else if (shimmerType === 'custom') {
        return <ShimmerComponent type="custom" styles={customShimmer} />;
      }
    }
    return null;
  };

  // Empty View Component
  const getEmptyView = () => {
    if (emptyView) {
      if (emptyRendeView === 'default') {
        return (
          <EmptyViewComponent
            emptyViewMessage={emptyMessage}
            buttonText={buttonText}
            onEmptyButtonPress={onPressButton}
          />
        );
      } else if (
        emptyRendeView === 'custom' &&
        renderCustomEmptyView &&
        typeof renderCustomEmptyView === 'function'
      ) {
        return renderCustomEmptyView();
      }
    }
  };

  // Content rendering logic for different view types
  const ContentView = () => {
    return (
      <View style={{flex: 1, paddingTop: STATUSBAR_HEIGHT}}>
        {viewType === 'ScrollView' ? (
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            {children}
          </ScrollView>
        ) : viewType === 'View' ? (
          <View style={{flex: 1}}>{children}</View>
        ) : (
          Alert.alert('Error', 'Please provide viewType')
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor}}>
      {emptyView && getEmptyView()}
      {viewType && <ContentView />}
      {showLoader ? getLoader() : showShimmer ? getShimmer() : null}

      
      {showSheet &&
        (bottomSheetType === 'custom' && typeof renderCustomBottomSheet === 'function' ? (
          renderCustomBottomSheet() // Custom BottomSheet
        ) : bottomSheetType === 'default' ? (
          <BottomSheetComponent
            source={source ? source : Images?.logo}
            data={data}
            showSheet={showSheet}
            onButtonPress={onButtonPress}
            onClose={onClose}
            sheetbackgroundColor={sheetbackgroundColor}
          />
        ) : null)}
    </View>
  );
};

export default ScreenContainer;
