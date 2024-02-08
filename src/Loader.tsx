import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Dimensions,
} from 'react-native';

interface LoaderProps {
  size?: 'small' | 'large';
  isVisible?: boolean;
  message?: string;
  boxColor?: keyof typeof ProgressColor;
  overlayColor?: keyof typeof OverlayColor;
}

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = width;
const guidelineBaseHeight = height;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;

const ProgressColor = {
  Accent: '#e07a5f',
  Primary: '#0081a7',
  Warm: '#e76f51',
  Danger: '#d62828',
  Light: '#e09f3e',
  Delight: '#9b5de5',
  White: '#FFFFFF',
};

const OverlayColor = {
  Level1: 0.1,
  Level2: 0.2,
  Level3: 0.3,
  Level4: 0.4,
  Level5: 0.5,
};

const Loader: React.FC<LoaderProps> = ({
  size = 'large',
  isVisible = false,
  message = 'Loading...',
  boxColor = 'White',
  overlayColor = 'Level1',
}) => {
  if (!isVisible) {
    return null;
  }

  const ActivityColor = boxColor === 'White' ? 'red' : 'white';
  const ActivityTextColor = boxColor === 'White' ? '#284b63' : 'white';

  const styles = StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: `rgba(0, 0, 0, ${OverlayColor[overlayColor]})`,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    loadingBox: {
      width: scale(90),
      height: verticalScale(85),
      borderRadius: 16,
      backgroundColor: ProgressColor[boxColor],
      justifyContent: 'center',
      alignItems: 'center',
    },
    messageText: {
      alignSelf: 'center',
      color: ActivityTextColor,
      fontSize: 12,
      fontWeight: '600',
      marginTop: moderateVerticalScale(6),
    },
  });

  return (
    <View style={styles.overlay}>
      <View style={styles.loadingBox}>
        <ActivityIndicator size={size} color={ActivityColor} />
        {message !== '' && <Text style={styles.messageText}>{message}</Text>}
      </View>
    </View>
  );
};

export default Loader;
