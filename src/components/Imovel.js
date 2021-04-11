import React from 'react';
import {View,Text,Image} from 'react-native'
import styles from '../styles/imovel'

function Imovel() {
  return(
      <View style={styles.container}>
            <Image style={styles.image}/>
            <View style={styles.data}>
              <Text style={styles.title}>Casa 2 quartos a venda</Text>
              <Text style={styles.price}>R$300000,00</Text>
              <Text style={styles.localType}>Venda - Casa</Text>
              <Text style={styles.localType}>Rio de Janeiro, RJ</Text>
            </View>       
      </View>
  );
}

export default Imovel;