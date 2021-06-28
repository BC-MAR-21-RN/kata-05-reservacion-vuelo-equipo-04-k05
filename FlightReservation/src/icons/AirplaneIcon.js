import React from 'react';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

export default function AirplaneIcon({...rest}) {
  return (
    <CrossPlatformIcon
      name="airplane"
      size={25}
      color="rgba(74,144,226,1)"
      outline
    />
  );
}
