import React, {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Styles from './Styles';
import {TextIcon} from '../textIcon/TextIcon';
import {Icon} from '@rneui/themed';
import {Colors} from '../../styles/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = PropsWithChildren<{
  text: string;
  btnStyle?: TextStyle;
  textStyle?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  iconProps?: any;
  colors?: string[];
}>;
export const Button: React.FC<ButtonProps> = ({
  text,
  btnStyle,
  textStyle,
  iconProps,
  onPress,
  colors,
}) => {
  return (
    <TouchableOpacity style={Styles.btnStyle}>
      <LinearGradient
        colors={colors ? colors : ['#1F2B41', '#111720']}
        style={Styles.linearContainer}>
        <TextIcon
          text={text}
          style={[Styles.textStyle]}
          leftIcon={true}
          iconProps={iconProps}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};
