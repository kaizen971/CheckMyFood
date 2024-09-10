import styled from 'styled-components/native';
import  theme  from '../../theme/theme.js';
import { Animated } from 'react-native';


export const ContainerView = styled.View`
position:absolute;
flex: 1;
height:100%;
width:100%;
`;

export const ButtonHistoricContainer = styled.View `
position: absolute;
top: 5%;
left: 5%;
`;

export const ButtonHistoric = styled.TouchableOpacity`
border-radius: ${theme.borderRadius.extraLarge};
background-color: ${theme.background.secondary};
border: 1px solid ${theme.colors.primary};
padding: ${theme.padding.small};
`;

export const TextButton = styled.Text`
color: ${theme.colors.secondary};
font-size: ${theme.fontSizes.medium};
font-weight: bold;
margin-bottom: ${theme.margin.smallest};
`;

export const TouchableOpacityOutsideOpen = styled.TouchableOpacity`

${({sidebarOpen}) => sidebarOpen ?
`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
`
:
`
display:none;
`
};
`;

export const OverLay = styled.TouchableOpacity`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0,0,0,0.5);
`;


export const ScrollView = styled(Animated.ScrollView)`
position: absolute;
left: 0;
top: 0;
bottom: 0;
width: 70%;
background-color: ${theme.background.primary};
`;

export const TextHistoric = styled.Text`
font-size: ${theme.fontSizes.large};
font-weight: bold;
margin-top: ${theme.margin.extraLarge};
color: ${theme.colors.primary};
background-color: ${theme.background.primary};
text-align: "center";
`;


export const transformAnimation = (sidebarAnim)    => {
    return(
    {
        transform: [
          {
            translateX: sidebarAnim,
          },
        ],
      }
    )
}