import {StyleSheet} from 'react-native';

const FlightScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginTitle: {marginHorizontal: 50, marginTop: 20},
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
  },
  fontBold: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  fontNormal: {
    color: 'rgba(132,137,145,1)',
    fontSize: 14,
  },
  textRight: {
    textAlign: 'right',
  },
  lblTitle: {
    fontFamily: 'roboto-700',
    color: 'rgba(92,110,248,1)',
    fontSize: 32,
    marginTop: 41,
    textAlign: 'left',
    marginHorizontal: 25,
    fontWeight: 'bold',
  },
  iconAdd: {
    bottom: 0,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 12,
  },
});

export default FlightScreenStyles;
