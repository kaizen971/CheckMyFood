import * as Styled from '../styled.js';
import { Icon } from 'react-native-elements';
import Sidebar from '../../../component/sideBar/sideBar.js';

export const NavBar = () => {
    return (
        <Styled.NavBar>
        <Icon name="settings" type="feather" onPress={() => console.log('Settings clicked')} />
      </Styled.NavBar>
    )
}

export const ButtonScanFood = ({navigation}) => {
    return (
        <Styled.SubView flex={0.45}>
        <Styled.ScanButton
          onPress={()=> navigation.navigate('CameraScreen')}
        >
          <Icon name="camera" type="feather" color="#fff" />
          <Styled.ButtonText>Scan Your Dish</Styled.ButtonText>
        </Styled.ScanButton>
        </Styled.SubView>
    )
}

export const SideBar = ({navigation}) => {
    return (
        <Sidebar navigation={navigation}/>
    )
}