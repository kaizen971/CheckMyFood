import { firstLettreUpperCase } from '../../utils/manipulateText';
import * as StyledComponent from './styled.js';

export const NameCard = ({ name }) => {
    return (
        <StyledComponent.SubView margin="15px">
        <StyledComponent.TitleCardNutrition>{firstLettreUpperCase(name)}</StyledComponent.TitleCardNutrition>
        </StyledComponent.SubView>
    );
}

export const CardDetails = ({ detailsOfIngredients }) => {
    return(
    <StyledComponent.SubViewCardDetail>
        <StyledComponent.NutrientCard>
        <StyledComponent.Subtitle>Kcal</StyledComponent.Subtitle>
        <Text style={[styles.text,{color:'#FE7103'}]}>{calories}kcal</Text>
        <CircularProgress color="#FE7103" photo={calorie} fill={calories/867} />
      </StyledComponent.NutrientCard>
      <StyledComponent.NutrientCard>
        <Text style={styles.Subtitle}>Protein</Text>
        <Text style={[styles.text,{color:'#3A6B35'}]} >{protein}g</Text>
        <CircularProgress color="#3A6B35" photo={proteins} fill={protein/10} />
      </StyledComponent.NutrientCard>
      <StyledComponent.NutrientCard>
        <StyledComponent.Subtitle>carbohydrates</StyledComponent.Subtitle>
        <Text style={[styles.text,{color:'cyan'}]}>{carbs}g</Text>
        <CircularProgress color="cyan" photo={carbohydrates} fill={carbs/10} />
      </StyledComponent.NutrientCard>
      <StyledComponent.NutrientCard>
        <StyledComponent.Subtitle>Fat</StyledComponent.Subtitle>
        <Text style={[styles.text]}>{fat}g</Text>
        <CircularProgress color="yellow" photo={fats} fill={fat/10} />
    </StyledComponent.NutrientCard>
  </StyledComponent.SubViewCardDetail>
  )}