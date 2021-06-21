import {StyleSheet} from 'react-native';
import {scale} from '../../Themes/Utility';

export default StyleSheet.create({
  safeView: {
    flex: 1,
  },
  backgroundStyle: {
    bottom: 0,
    position: 'absolute',
    height: scale(60),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
