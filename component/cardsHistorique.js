import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import calorie from "../assets/kcal-transformed.png"
import proteins from "../assets/protein.png"
import carbohydrates from "../assets/carbohydrates.png"
import fats from "../assets/fat.png"
const NutritionCard = ({ name, imageUrl, calories, carbs, protein, fat,detailsOfIngredients,navigation,estimatedWeightOfDish }) => {
    const firstLettreUpperCase = (word) => {   
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    console.log(detailsOfIngredients)
    const handlePress = (photoUri, nutritionData) => {
        navigation.navigate('NutritionScreen', { photoUri: photoUri,nutritionData: nutritionData });
        };
  return (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(imageUrl, {nameOfDish:name,kcal:calories,carbohydrates:carbs,protein:protein,fat:fat,detailsOfIngredients:detailsOfIngredients,estimatedWeightOfDish:estimatedWeightOfDish})}>
      <View style={{marginBottom:15}}>
      <Text style={styles.title}>{firstLettreUpperCase(name)}</Text>
      </View>
      <Image source={{uri: `file:///${imageUrl}` }} style={styles.image} />
      <View style={styles.nutritionValues}>
      <View style={styles.nutrient}>
            <Text style={styles.Subtitle}>Kcal</Text>
            <Text style={[styles.text,{color:'#FE7103'}]}>{calories}kcal</Text>
            <CircularProgress color="#FE7103" photo={calorie} fill={calories/867} />
          </View>
          <View style={styles.nutrient}>
            <Text style={styles.Subtitle}>Protein</Text>
            <Text style={[styles.text,{color:'#3A6B35'}]} >{protein}g</Text>
            <CircularProgress color="#3A6B35" photo={proteins} fill={protein/10} />
          </View>
          <View style={styles.nutrient}>
            <Text style={styles.Subtitle}>carbohydrates</Text>
            <Text style={[styles.text,{color:'cyan'}]}>{carbs}g</Text>
            <CircularProgress color="cyan" photo={carbohydrates} fill={carbs/10} />
          </View>
          <View style={styles.nutrient}>
            <Text style={styles.Subtitle}>Fat</Text>
            <Text style={[styles.text]}>{fat}g</Text>
            <CircularProgress color="yellow" photo={fats} fill={fat/10} />
        </View>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 5.22,
    elevation: 3,
    backgroundColor:"#FFF8E7",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:"black",
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  nutritionContainer: {
    marginTop: 10,
  },
  nutritionText: {
    fontSize: 14,
    marginTop: 2,
  },


  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color:"black",
    textAlign:"center"
  },
  nutritionValues: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    color:"red"
    
  },
  nutrient: {
    alignItems: 'center',
    
    
  },
  button: {
    backgroundColor: '#3A6B35', // A dark green color for contrast
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text:{
    color:"black"
  
  },
  Subtitle:{
    color:"black",
    fontSize:14,
    fontWeight:"bold"
  
  },
  nutritionValues: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default NutritionCard;