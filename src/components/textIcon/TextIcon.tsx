import React, {PropsWithChildren} from 'react';
import {Text, TextStyle, View} from 'react-native';
import Styles from './Styles';
import {Icon} from '@rneui/themed';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../styles/Colors';
import {Row} from '../row/Row';

type TextIconProps = PropsWithChildren<{
  text: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
  style?: TextStyle[];
  iconProps?: any;
}>;
export const TextIcon: React.FC<TextIconProps> = ({
  text,
  rightIcon,
  leftIcon,
  iconProps,
  style,
}) => {
  return (
    <Row>
      {leftIcon && iconProps}
      <Text style={[Styles.textStyle, style]}>{text}</Text>
      {rightIcon && iconProps}
    </Row>
  );
};
