import React from 'react';
import BottomNavBar from '../../Components/NavBar/BottomNavBar';

class Launch extends React.PureComponent {
  render() {
    return <BottomNavBar active={'Dashboard'} />;
  }
}

export default Launch;
