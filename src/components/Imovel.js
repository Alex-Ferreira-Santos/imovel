import React from 'react';
import {View,Text,Image,TouchableNativeFeedback} from 'react-native'
import styles from '../styles/imovel'

function Imovel(props) {
  return(
    <TouchableNativeFeedback style={styles.touch} >
      <View style={styles.container}>
            <Image style={styles.image}/>
            <View style={styles.data}>
              <Text style={styles.title}>Casa 2 quartos a venda</Text>
              <Text style={styles.price}>R$300000,00</Text>
              <Text style={styles.localType}>Venda - Casa</Text>
              <Text style={styles.localType}>Rio de Janeiro, RJ</Text>
            </View>       
      </View>
    </TouchableNativeFeedback>
  );
}

export default Imovel;