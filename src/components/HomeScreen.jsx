import React from 'react';
import { View, Text } from 'react-native';
import { useTema } from '../contexts/TemaContext';
import { createStyles } from '../config/styles';
import TrocaTema from './TrocaTema';
 
const HomeScreen = () => {
  const { tema } = useTema();
  const styles = createStyles(tema);
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ouvi dizer que você quer mudar a cor do site. Clique abaixo!</Text>
      <TrocaTema />
    </View>
  );
};
 
export default HomeScreen;