import * as Styled from './styled.js';
import {View} from 'react-native';

export const ButtonHistoric = ({toggleSidebar}) => {
    return (
        <Styled.ButtonHistoricContainer >
        <Styled.ButtonHistoric name="menu" type="feather" onPress={toggleSidebar} >
          <Styled.TextButton>Historique</Styled.TextButton>
        </Styled.ButtonHistoric>
      </Styled.ButtonHistoricContainer>
    )
}
export const OverLay = ({sidebarOpen, onOverlayPress}) => {
  if(!sidebarOpen) return null;
  return(
  <Styled.OverLay onPress={onOverlayPress} activeOpacity={1} />
  )
}

export const HistoricBody = ({user}) => {
  return (
    <View>
    <Styled.TextHistoric>Historique</Styled.TextHistoric>
          {user.map((item, index) => (
            <NutritionCard
              key={index}
              item={item}
              navigation={navigation}
            />
          ))
          }      
    </View>
  )
}
