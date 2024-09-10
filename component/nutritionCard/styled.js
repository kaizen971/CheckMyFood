import styled from 'styled-components/native';
import  theme  from '../../theme/theme.js';
import { Animated } from 'react-native';

export const Card = styled.TouchableOpacity`
    background-color: ${theme.background.primary};
    border-radius: ${theme.borderRadius.medium};
    padding: ${theme.padding.medium};
    margin: ${theme.margin.medium};
    shadow-color: ${theme.shadow.shadowColor};
    shadow-offset: { width: 0, height: 1 };
    shadow-opacity: ${theme.shadow.shadowOpacity};
    shadow-radius: ${theme.shadow.shadowRadius};
    elevation: ${theme.shadow.elevation};
`;

export const TitleCardNutrition = styled.Text`
fontSize: ${theme.fontSizes.large};
fontWeight: ${theme.fontWeight.bold};
marginBottom: ${theme.margin.medium};
color: ${theme.colors.black};
textAlign:center;
alignItems:center;
justifyContent:center;
`;

export const SubView = styled.View`
flex:${props => props.flex || 1};
flex-direction: ${props => props.flexDirection || 'column'};
justify-content: ${props => props.justifyContent || 'center'};
background-color:${props => props.backgroundColor || theme.background.primary};
margin:${props => props.margin || 0};
`;

export const SubViewCardDetail = styled.View`
flex:1;
flex-direction:row;
justify-content:space-around;
background-color:${theme.background.primary};
margin:${theme.margin.medium};
`;

export const NutrientCard = styled.View`
alignItems: center;
`;

export const Subtitle = styled.Text`
color: ${theme.colors.black};
fontSize: ${theme.fontSizes.medium};
fontWeight: ${theme.fontWeight.bold};
`;