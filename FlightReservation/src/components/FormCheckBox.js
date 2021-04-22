import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function FormCheckBox({checkboxTitle, ...rest}) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.row}>
      <CheckBox
        disabled={false}
        value={isSelected}
        onValueChange={setSelection}
        tintColors={{true: 'rgba(92,110,248,1)', false: 'gray'}}
      />
      <Text style={styles.chbTitle}>{checkboxTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chbTitle: {
    marginLeft: 8,
    fontSize: 14,
    color: 'rgba(198,203,212,1)',
    fontFamily: 'roboto-regular',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 30,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
});
