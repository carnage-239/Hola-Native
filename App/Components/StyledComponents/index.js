import React from 'react';
import styled from 'styled-components';
import {
  appColor,
  fontSize,
  regularFont,
  whiteColor,
  whiteGroundColor,
} from 'colors';

export const CustomText = styled.Text`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.fontColor};
  letter-spacing: ${(props) => props.letterSpacing};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  line-height: ${(props) => props.lineHeight};
`;

CustomText.defaultProps = {
  fontSize: fontSize.medium,
  fontColor: whiteGroundColor,
  letterSpacing: '0px',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontFamily: regularFont,
  lineHeight: '18px',
};

export const CustomButton = ({
  width,
  backgroundColor,
  padding,
  borderRadius,
  clickData,
  onPress,
  textColor,
  fontSize,
  title,
  margin,
}) => (
  <ButtonWrapper
    width={width}
    backgroundColor={backgroundColor}
    padding={padding}
    borderRadius={borderRadius}
    margin={margin}
    onPress={() => onPress(clickData)}>
    <ButtonText textColor={textColor} fontSize={fontSize}>
      {title}
    </ButtonText>
  </ButtonWrapper>
);

const ButtonWrapper = styled.TouchableOpacity`
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  border: 2px solid ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};
`;

const ButtonText = styled.Text`
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize}px;
  text-align: center;
`;

ButtonWrapper.defaultProps = {
  width: '100px',
  backgroundColor: appColor,
  padding: '4px 16px',
  borderRadius: '5px',
  margin: '5px 5px',
};

ButtonText.defaultProps = {
  textColor: whiteColor,
  fontSize: fontSize.medium,
};
