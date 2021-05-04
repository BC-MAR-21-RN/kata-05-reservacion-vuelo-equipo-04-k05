import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AirplaneIcon from '../icons/AirplaneIcon';
import FlightCity from '../components/FlightCity';
import FlightScreenStyles from '../styles/FlightScreenStyles';
import moment from 'moment';
import {locations} from '../db/Locations';

export default function FlightScreen({item, screen}) {
  let originFlight, destinationFlight, dateFlight, passengerFlight;
  switch (screen) {
    case 'HomeScreen':
      originFlight = true;
      destinationFlight = true;
      dateFlight = true;
      passengerFlight = true;
      break;
    case 'LocOriginScreen':
      originFlight = false;
      destinationFlight = false;
      dateFlight = false;
      passengerFlight = false;
      break;
    case 'LocDestinationScreen':
      originFlight = true;
      destinationFlight = false;
      dateFlight = false;
      passengerFlight = false;
      break;
    case 'DateScreen':
      originFlight = true;
      destinationFlight = true;
      dateFlight = false;
      passengerFlight = false;
      break;
    case 'PassenScreen':
      originFlight = true;
      destinationFlight = true;
      dateFlight = true;
      passengerFlight = false;
      break;
    case 'SendDataScreen':
      originFlight = true;
      destinationFlight = true;
      dateFlight = true;
      passengerFlight = true;
      break;
    default:
      originFlight = false;
      destinationFlight = false;
      dateFlight = false;
      passengerFlight = false;
  }
  const [showOrigin, setShowOrigin] = useState(originFlight);
  const [showDestination, setShowDestination] = useState(destinationFlight);
  const [showDate, setShowDate] = useState(dateFlight);
  const [showPassenger, setShowPassenger] = useState(passengerFlight);
  const convertDate = () => {
    return moment(item.date).format('MMM DD, YYYY');
  };
  return (
    <>
      {showOrigin ? (
        <>
          <View
            style={[FlightScreenStyles.row, FlightScreenStyles.spaceBetween]}>
            {locations.map((value, index) => {
              return item.origin === value.key ? (
                <FlightCity city={value.city} country={value.country} />
              ) : null;
            })}

            <View
              style={[
                FlightScreenStyles.column,
                FlightScreenStyles.centerVertical,
              ]}>
              <AirplaneIcon />
            </View>

            {showDestination
              ? locations.map((value, index) => {
                  return item.destination === value.key ? (
                    <FlightCity city={value.city} country={value.country} />
                  ) : null;
                })
              : null}
          </View>
          <View style={FlightScreenStyles.hr} />
        </>
      ) : null}

      {showDate ? (
        <>
          <View
            style={[FlightScreenStyles.row, FlightScreenStyles.spaceBetween]}>
            <Text style={FlightScreenStyles.fontNormal}>{convertDate()}</Text>
            {showPassenger ? (
              <Text
                style={[
                  FlightScreenStyles.textRight,
                  FlightScreenStyles.fontNormal,
                ]}>
                {item.passenger} passengers
              </Text>
            ) : null}
          </View>
          <View style={FlightScreenStyles.hr} />
        </>
      ) : null}
    </>
  );
}
