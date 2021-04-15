import React from 'react';
import {View,Text,Image,TouchableNativeFeedback} from 'react-native'
import styles from '../styles/imovel'

function Imovel(props) {
  return(
    <TouchableNativeFeedback style={styles.touch} onPress={()=>props.route()}>
      <View style={styles.container}>
            <Image style={styles.image}/>
            <View style={styles.data}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>R${props.price.toFixed(2)}</Text>
              <Text style={styles.localType}>{props.finalidade} - {props.type}</Text>
              <Text style={styles.localType}>{props.state}, {props.city}</Text>
            </View>       
      </View>
    </TouchableNativeFeedback>
  );
}

export default Imovel;