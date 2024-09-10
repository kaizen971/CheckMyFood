import React from 'react';
import foodHome from '../../assets/foodHome.png';
import * as Styled from './styled.js';
import * as Component from './components/index.js';

const HomeScreen = ({ navigation }) => {

  return (
    <Styled.ContainerView>
      <Component.NavBar />
      <Styled.FoodImage source={foodHome }/>
      <Component.ButtonScanFood navigation={navigation}/>
      <Component.SideBar navigation={navigation}/>
    </Styled.ContainerView>
  );
};

export default HomeScreen;