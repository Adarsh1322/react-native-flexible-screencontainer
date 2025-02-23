# **react-native-flexible-screencontainer**

## 📌 **Introduction**

### **Brief Overview**
A customizable UI library for React Native that includes a dynamic status bar, loaders, shimmer effects, scrollable and non-scrollable views, an empty state handler, and a bottom sheet implementation.

`react-native-flexible-screencontainer` is a customizable React Native UI library that provides common components like:

- **Status Bar Handling** (Dynamic content & color support)
- **Loader Component** (Custom or default loading UI)
- **Shimmer Placeholder**
- **Empty View Handler** (Default & custom empty views when data is unavailable)
- **Bottom Sheet Component** (Default & custom bottom sheets using `@gorhom/bottom-sheet`)
- **Dynamic View & ScrollView Wrapper**

This library helps in creating highly customizable and reusable UI components while maintaining optimal performance.

## 🛠 **Installation**

Ensure you have React Native set up. Then, install the package:

npm install react-native-flexible-screencontainer

or using Yarn:

yarn add react-native-flexible-screencontainer

Also, install peer dependencies manually if not already installed:
yarn add @gorhom/bottom-sheet react-native-linear-gradient react-native-safearea-height


## 🚀 **Usage**

### 1️⃣ **Importing ScreenContainer**

import ScreenContainer from 'react-native-flexible-screencontainer';

### 2️⃣ **Basic Usage**

import React from 'react';
import { View, Text } from 'react-native';
import ScreenContainer from 'react-native-flexible-screencontainer';

const App = () => {
  return (
    <ScreenContainer viewType="View" backgroundColor="white" statusBarStyle="dark-content">
      <Text>Hello World!</Text>
    </ScreenContainer>
  );
};

export default App;


### 3️⃣ **Showing Loader**

<ScreenContainer showLoader={true} message="Loading..." />

### 4️⃣ **Using Shimmer Effect**

<ScreenContainer showShimmer={true} shimmerType="default" />

### 5️⃣ **Handling Empty View**

<ScreenContainer emptyView={true} emptyRendeView="default" emptyMessage="No Data Found" />


### 6️⃣ **Custom Empty View**

const customEmptyView = () => (
  <View>
    <Text style={{ fontSize: 20, color: 'red' }}>No Records Available</Text>
  </View>
);

<ScreenContainer emptyView={true} emptyRendeView="custom" renderCustomEmptyView={customEmptyView} />

### 7️⃣ **Showing Bottom Sheet**

<ScreenContainer showSheet={true} data={{ msg: "Hello!", description: "This is a bottom sheet." }} />

### 8️⃣ **Custom Bottom Sheet**


const customBottomSheet = () => (
  <View style={{ padding: 20, backgroundColor: 'black' }}>
    <Text style={{ color: 'white' }}>Custom Bottom Sheet</Text>
  </View>
);

<ScreenContainer showSheet={true} renderCustomBottomSheet={customBottomSheet} />

## 📌 **Features**

- ✅ **Dynamic Status Bar** (Light/Dark Mode Support)
- ✅ **Customizable Loaders** (Text, Image, or Default Indicator)
- ✅ **Shimmer Placeholder** for Skeleton UI
- ✅ **Empty View Handler**
- ✅ **Default & Custom Bottom Sheets**
- ✅ **Seamless Integration with View & ScrollView**

## 📖 **Dependencies**

This library uses:

- `@gorhom/bottom-sheet` (For bottom sheet handling)
- `react-native-linear-gradient` (For shimmer effects)
- `react-native-safearea-height` (For safe area handling)

⚠ **Note:** We do not claim ownership of any third-party dependencies used in this library. All credit goes to their respective owners. Please refer to their documentation for licensing information.

## 🛠 **Contributing**

We welcome contributions! If you find a bug or want to improve features, feel free to open a Pull Request.

## 📄 **License**

`react-native-flexible-screencontainer` is open-source under the **ISC License**.

🚀 **Created for React Native Developers to enhance UI experience effortlessly!**

## 🧐 **Common Issues & Solutions**

### 🔍 **(NOBRIDGE) ERROR - GestureHandlerRootView Required**

If you encounter the following error while using this library:

Warning: Error: GestureDetector must be used as a descendant of GestureHandlerRootView. Otherwise, the gestures will not be recognized.

### 🔮 **Why is it necessary to add GestureHandlerRootView now?**

In the latest versions of `react-native-gesture-handler`, there is a strict requirement for wrapping components.

Previously, this was implicitly handled within React Native, but now any component using `GestureDetector` must be wrapped inside `GestureHandlerRootView`.

### 🔥 **Alternative Solution (Not Recommended)**

If you don’t want to wrap `GestureHandlerRootView` everywhere, you can downgrade `react-native-gesture-handler` to an older version:

yarn add react-native-gesture-handler@2.12.0

Then, clear the cache and restart your project:

yarn start --reset-cache

🚫 **However, downgrading is not recommended**, as newer versions offer better performance and stability.

### ✅ **Best Practice (Recommended Solution)**

To avoid manually wrapping `GestureHandlerRootView` in multiple places, wrap your entire app inside `GestureHandlerRootView` in `index.js`:

#### 📌 **index.js (Best Solution)**

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import App from './App';
import { name as appName } from './app.json';
import { View } from 'react-native';

const RootComponent = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => RootComponent);


✅ **This will automatically apply `GestureHandlerRootView` globally, so you won't need to wrap it in `App.js` or other components manually.**


## 💖 Support & Sponsorship
If you like this library and want to support its development, consider sponsoring me on [GitHub Sponsors](https://github.com/sponsors/Adarsh1322) 