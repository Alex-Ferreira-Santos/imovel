import React from 'react';
import {View,Text,Image} from 'react-native'
import styles from '../styles/imovel'

function Imovel() {
  return(
      <View style={styles.container}>
            <View style={styles.badge}>
                <Text style={styles.type}>Casa</Text>
            </View>
            <Image style={styles.image}/>
            <Text style={styles.finalidade}>Venda - <Text style={styles.value}>R$300000,00</Text></Text>
      </View>
  );
}

export default Imovel;