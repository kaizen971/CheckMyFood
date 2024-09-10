import styled from 'styled-components/native';
import  theme  from '../../theme/theme.js';

export const ContainerView = styled.View`
flex: 1;
justify-content: space-between;
background-color: ${theme.background.primary};
`;

export const SubView = styled.View`
flex:${props => props.flex || 1};
flex-direction: ${props => props.flexDirection || 'column'};
justify-content: ${props => props.justifyContent || 'center'};
background-color:${props => props.backgroundColor || theme.background.primary};
`;


export const NavBar = styled.View`
flex:0.3;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
padding-right: ${theme.padding.extramedium};
`;
export const FoodImage = styled.Image`
width: 100%;
height: 50%;
resize-mode: cover;
`;
export const ScanButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
align-items: center;
padding-vertical: ${theme.padding.medium};
padding-horizontal: ${theme.padding.large};
background-color: ${theme.background.secondary};
border-radius: ${theme.borderRadius.small};
margin-horizontal: ${theme.margin.medium};
border-radius: ${theme.borderRadius.extraLarge};
shadow-color: #000;
shadow-offset: {
width: 0;
height: 2;
}
`;

export const ButtonText = styled.Text`
color: ${theme.colors.secondary};
font-size: ${theme.fontSizes.medium};
font-weight: bold;
margin-left: ${theme.margin.medium};
`;

