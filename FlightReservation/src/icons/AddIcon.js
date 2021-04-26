import React from 'react';
import CrossPlatformIcon from 'react-native-cross-platform-icons';

export default function AddIcon({...rest}) {
  return (
    <CrossPlatformIcon
      name="add-circle"
      size={80}
      color="rgba(74,144,226,1)"
      outline
    />
  );
}
