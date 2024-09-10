import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';
import theme from './theme/theme.js';
import HomeScreen from './screen/Home/homePage.js';
import CameraScreen from './screen/CamPage/index.js';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { store, persistor } from './store';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'CameraScreen') {
            iconName = focused ? 'camera' : 'camera';
          }
          else if (route.name === 'NutritionScreen') {
            iconName = focused ? 'settings' : 'settings';
          }
          else if (route.name === 'Agenda') {
            iconName = focused ? 'book' : 'book';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3A6B35',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        style: {
          backgroundColor: '#3A6B35',
          borderTopWidth: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 5,
          height: 60
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CameraScreen" component={CameraScreen} />

    </Tab.Navigator>
  );
};
const StyledView = styled.View`
  flex: 1
`;

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledView >

          <NavigationContainer >
            <MyTabs />
          </NavigationContainer>
        </StyledView>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
