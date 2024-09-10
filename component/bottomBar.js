import React , {useEffect, useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';


const BottomBar = ({ navigation }) => {
  // navigation actuelle
  const [currentNav, setCurrentNav] = useState('Home');
  const route = useRoute();
  console.log(route.name); // Nom de la route actuelle
  useEffect(() => {
    setCurrentNav(route.name);
  }, [route]);
    return (
        <View style={styles.bottomNav}>
          <View style={{borderBottomWidth: 1, backgroundColor: currentNav === 'Home' ? '#A3C1A2' : 'transparent', padding:10, borderRadius:10}}>
        <Icon name="home" type="feather"  onPress={()=> navigation.navigate('Home')}/>
        </View>
        <View style={{borderBottomWidth: 1, backgroundColor: currentNav === 'agendaNutrition' ? '#A3C1A2' : 'transparent', padding:10, borderRadius:10}}>
        <Icon name="book" type="feather"  onPress={()=> navigation.navigate('agendaNutrition')}/>
        </View>
        <View style={{borderBottomWidth: 1, backgroundColor: currentNav === 'Favorites' ? '#A3C1A2' : 'transparent', padding:10, borderRadius:10}}>
        <Icon name="heart" type="feather" onPress={() => console.log('Favorites clicked')} />
        </View>
        <View style={{borderBottomWidth: 1, backgroundColor: currentNav === 'Profile' ? '#A3C1A2' : 'transparent', padding:10, borderRadius:10}}>
        <Icon name="user" type="feather" onPress={() => console.log('Profile clicked')} />
        </View>
      </View>

    );
}

const styles = StyleSheet.create({

    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: 1,
      borderColor: '#e1e1e1',
      backgroundColor: '#fff',
    },
  });

export default BottomBar;