import React, { useState, useRef } from 'react';
import { Animated } from 'react-native';
import { useSelector } from 'react-redux';
import * as Styled from './styled.js';
import * as Component from './subComponent.js';

const Sidebar = ({ navigation }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarWidth = 250;
  const sidebarAnim = useRef(new Animated.Value(-sidebarWidth)).current;
  const user = useSelector(state => state.users.items);
  const toggleSidebar = () => {
    if (sidebarOpen) {
      // Fermer la sidebar
      Animated.timing(sidebarAnim, {
        toValue: -sidebarWidth,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Ouvrir la sidebar
      Animated.timing(sidebarAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    setSidebarOpen(!sidebarOpen);
  };
  const onOverlayPress = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <Styled.ContainerView>
      <Component.ButtonHistoric toggleSidebar={toggleSidebar} />
      <Styled.TouchableOpacityOutsideOpen sidebarOpen={sidebarOpen} activeOpacity={1}>
          <Component.OverLay onOverlayPress={onOverlayPress} sidebarOpen={sidebarOpen} />
        {sidebarOpen && <Styled.ScrollView style={Styled.transformAnimation(sidebarAnim)}>
          <Component.HistoricBody user={user} />
        </Styled.ScrollView>}
      </Styled.TouchableOpacityOutsideOpen>
    </Styled.ContainerView>
  );
};

export default Sidebar;
