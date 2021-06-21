import React from 'react';
import {Text, View, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import styles from './BottomNavBar.style';
import { TABS, activeColor, defaultColor } from '../../Navigation/Navigation.constants';
import IconImageSvg from '../IconImageSvg/IconImageSvg'

class BottomNavBar extends React.PureComponent {
  constructor (props) {
    super();
    this.state = {
      active: props.active
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress(title) {
    this.setState({ active: title })
  }

  render() {
    const { active } = this.state;
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.backgroundStyle}>
          {TABS.map((item) => {
            return (
              <NavBarItem
                key={item.id}
                title={item.title}
                active={item.title === active}
                iconName={item.iconName}
                handleOnPress={this.onPress}
              />
            );
          })}
        </View>
      </SafeAreaView>
    );
  }
}

class NavBarItem extends React.PureComponent {
  render() {
    const {title, active, iconName, handleOnPress} = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => handleOnPress(title)}>
        <View style={styles.buttonIcon}>
          <IconImageSvg
            icon
            active={active}
            iconName={iconName}
          />
          <Text style={active ? { color: activeColor } : { color: defaultColor }}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default BottomNavBar;
