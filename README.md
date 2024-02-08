# ReactNativeControls

# Loader

A customizable loader component for React Native.

## Installation

Install the package in your React Native project:

```bash
npm i sd-reactnativecontrols

Usage

Import the Loader component and use it in your React Native application:

import React from 'react';
import { View } from 'react-native';
import {Loader} from 'sd-reactnativecontrols';

const MyScreen = () => {
  return (
    <View>
      {/* Your other components */}
      <Loader isVisible={true} message="Loading..." />
    </View>
  );
};

export default MyScreen;

Usage Props

isVisible (boolean, default: false)
Controls the visibility of the loader.

message (string, default: 'Loading...')
The message displayed below the loader.

boxColor (string, default: 'White')
The color of the loader box.

Available : {
  Accent: '#e07a5f',
  Primary: '#0081a7',
  Warm: '#e76f51',
  Danger: '#d62828',
  Light: '#e09f3e',
  Delight: '#9b5de5',
  White: '#FFFFFF',
}

overlayColor (string, default: 'Level1')
The color of the overlay behind the loader.

Available : {
  Level1: 0.1,
  Level2: 0.2,
  Level3: 0.3,
  Level4: 0.4,
  Level5: 0.5,
}

size (string, default: 'large')

Example

<Loader
  isVisible={true}
  message="Please wait..."
  boxColor="Primary"
  overlayColor="Level2"
  size="small"
/>

License


This template provides more details about each prop in the "Usage Props" section, and it includes a dedicated "Example" subsection to showcase how to use the component with different props. Feel free to customize it further based on your component's specific use cases.

```
