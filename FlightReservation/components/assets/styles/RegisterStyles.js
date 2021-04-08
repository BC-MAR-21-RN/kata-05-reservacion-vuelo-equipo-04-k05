import {StyleSheet} from 'react-native';
const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group: {
    height: 685,
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 16,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  lblTitle: {
    color: 'rgba(92,110,248,1)',
    fontSize: 24,
    fontWeight: 'bold',
  },
  lblFirstName1: {
    color: 'rgba(67,67,67,1)',
    fontSize: 18,
  },
  txbInputText: {
    height: 50,
    backgroundColor: '#fffafa',
    borderWidth: 1,
    borderColor: 'rgba(95,112,248,1)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  lblLabelEmailPass: {
    color: 'rgba(67,67,67,1)',
    fontSize: 15,
  },
  lblErrorEmailPass: {
    color: 'rgba(255,128,160,1)',
    fontSize: 16,
    marginLeft: 8,
  },
  lblPasswordIndication: {
    color: 'rgba(132,137,145,1)',
    fontSize: 13,
  },
  chbPolicy: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: 'rgba(95,112,248,1)',
  },
  chbTitle: {
    marginLeft: 8,
    fontSize: 16,
    color: 'rgba(198,203,212,1)',
    fontFamily: 'roboto-regular',
  },
  btnSignUp: {
    height: 50,
    borderRadius: 10,
    backgroundColor: 'rgba(92,110,248,1)',
    alignSelf: 'center',
  },
  lblOr: {
    color: 'rgba(189,195,214,1)',
    fontSize: 15,
    alignSelf: 'center',
  },
  lblAlreadyAccount: {
    color: 'rgba(203,208,225,1)',
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default RegisterStyles;
