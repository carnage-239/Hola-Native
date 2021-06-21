import React from 'react';
import {Image} from 'react-native';
import styles from './IconImageSvg.style';
import { SvgUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign';
import { activeColor, defaultColor } from '../../Navigation/Navigation.constants';
import { scale } from '../../Themes/Utility'

// this component takes icon, image, svg as boolean value and sets the rest accordingly.
// this is to render icon, image, svg using single component and making it more modular.
// for imagePath use require('/app/images') instead just string '/app/images';
class IconImageSvg extends React.PureComponent {
  render () {
    const { icon, iconName, active, image, imageUrl, imagePath, svg, svgUrl, customStyle } = this.props;
    if (icon) {
      return (
        <Icon
          size={30} // hard-coded style
          name={iconName}
          color={active ? activeColor : defaultColor}
          iconStyle={[styles.base, customStyle]}
        />
      )
    }
    if (image) {
      return (
        <Image
          style={[styles.base, customStyle]}
          source={imageUrl ? { uri: imageUrl } : imagePath}
        />
      )
    }
    if (svg) {
      return (
        <SvgUri
          width={scale(30)}
          height={scale(30)}
          uri={svgUrl}
        />
      )
    }
    return <></>;
  }
}

export default IconImageSvg;
