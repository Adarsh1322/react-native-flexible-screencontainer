import React from 'react'
import { Pressable } from 'react-native'
import { colors } from './colors'
export default function CustomPressableComponent(props) {

  return (
    <Pressable
        android_ripple={props.enableRipple ? {
        color: props.rippleType==='light'? colors.white :'rgba(0, 0, 0, 0.05)',
        borderless: false,
        foreground: true
        } : null}
        style={props.style}
        onPress={() => onPress()}
        onTouchStart={handleOnTouchStart}
    >
         {props.children}
    </Pressable>
  )

  function handleOnTouchStart() {
    if(props.onTouchStart) {
      props.onTouchStart()
    }
  }

  function onPress() {
    if(props.onPress) {
      props.onPress()
    }
  }

}